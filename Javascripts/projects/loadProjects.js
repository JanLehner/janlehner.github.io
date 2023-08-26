import { projectClicked } from "../navBtnSelector.js";

const main = document.querySelector('main');

export function loadProjects() {
    projectClicked();
    main.innerHTML = `<h1>Projects</h1>`;
}