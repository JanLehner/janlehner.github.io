import { cvHtmlLoader } from "./cv_html_loader.js";
import { cvClicked } from "../navBtnSelector.js";

export function loadCV() {
    cvHtmlLoader();
    cvClicked();
    const observerLines = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('showLine');
            } else {
                entry.target.classList.remove('showLine');
            }
        });
    });

    const observerFade = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('showFade');
            } else {
                entry.target.classList.remove('showFade');
            }
        });
    });

    const hiddenLines = document.querySelectorAll('.hiddenLine');
    hiddenLines.forEach((el) => observerLines.observe(el));

    const hiddenFadeFR = document.querySelectorAll('.hiddenFadeFR');
    hiddenFadeFR.forEach((el) => observerFade.observe(el));

    const hiddenFadeFL = document.querySelectorAll('.hiddenFadeFL');
    hiddenFadeFL.forEach((el) => observerFade.observe(el));
};