import AdminJS from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import express from 'express'
import * as process from "process";
import { AppDataSource } from "./src/config/typeorm.datasource.js";
import * as AdminJSTypeorm from "@adminjs/typeorm"
import role from "./src/resources/role.js";
import user from "./src/resources/user.js";
import Connect from 'connect-pg-simple'
import session from 'express-session'
import { auth } from "./src/auth/admin.auth.js";
import { dark, light, noSidebar } from "@adminjs/themes";
import resources from "./src/resources/index.js";
import { locale } from "./src/config/locale.js";
import { ComponentLoader } from 'adminjs'
import * as path from "path";
import { Components, loader } from "./src/components/index.js";

const PORT = process.env.PORT ?? 5050

AdminJS.registerAdapter(AdminJSTypeorm);

const start = async () => {
    const app = express()

    await AppDataSource.initialize().then(() => {
        console.log('Database connection initialized')
    }).catch((e) => {
        console.log(e.message);
        process.exit(0)
    })

    const admin = new AdminJS({
        resources: [...resources],
        componentLoader: loader,
        dashboard: {
            component: Components.Dashboard
        },
        defaultTheme: dark.id,
        availableThemes: [dark, light, noSidebar],
        branding: {
            companyName: "Fractal Admin",
            withMadeWithLove: false
        },
        locale,
    })

    const connectionString = `postgres://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`
    const ConnectSession = Connect(session)
    const sessionStore = new ConnectSession({
        conObject: {
            connectionString: connectionString,
            ssl: process.env.NODE_ENV === 'production',
        },
        tableName: 'sessions_adminjs',
        createTableIfMissing: true,
    })

    const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
        admin,
        {
            authenticate: auth,
            cookieName: 'adminjs',
            cookiePassword: 'sessionsecret',
        },
        null,
        {
            store: sessionStore,
            resave: true,
            saveUninitialized: true,
            secret: 'sessionsecret',
            cookie: {
                httpOnly: process.env.NODE_ENV === 'production',
                secure: process.env.NODE_ENV === 'production',
            },
            name: 'adminjs',
        }
    )
    app.use(admin.options.rootPath, adminRouter)

    await admin.watch()

    app.listen(PORT, () => {
        console.log(`AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`)
    })
}

start()