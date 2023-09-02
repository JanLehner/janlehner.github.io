import { cvHtmlLoad } from "./cv_html_loader.js";
import { cvClicked } from "../navBtnSelector.js";
import { cvObserve } from "./cv_observer.js";

export function loadCV() {
    cvHtmlLoad();
    cvClicked();
    cvObserve();
};