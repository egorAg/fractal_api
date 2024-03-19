import { ComponentLoader } from "adminjs";

const loader = new ComponentLoader();

const Components = {
    Dashboard: loader.override('DashboardRoute', './dashboard'),
    Base64: loader.add('Base64', './base64')
}

export { loader, Components }