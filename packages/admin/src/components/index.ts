import { ComponentLoader } from "adminjs";

const loader = new ComponentLoader();

const Components = {
    Dashboard: loader.override('DashboardRoute', './dashboard')
}

export { loader, Components }