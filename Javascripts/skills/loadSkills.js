import { skillsHtmlLoad } from "./skills_html_loader.js";
import { skillClicked } from "../navBtnSelector.js";
import { skillFunc } from './skills_hover_loader.js';


export function loadSkills() {    
    skillsHtmlLoad();
    skillClicked();
    do {
        skillFunc();
    } while (document.getElementsByClassName("block-btn") == null)
}