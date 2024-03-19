import { ComponentLoader } from "adminjs";

const loader = new ComponentLoader();

const Components = {
    Dashboard: loader.add('Dashboard', './dashboard')
}