import { projectClicked } from "../navBtnSelector.js";
import { projectsHtmlLoad } from "./projects_html_loader.js";
import { addCarouselFunction } from "./projects_carousel.js";

export function loadProjects() {
    projectsHtmlLoad();
    projectClicked();
    addCarouselFunction();
}