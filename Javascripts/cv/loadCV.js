import { cvClicked } from "../navBtnSelector.js";

const main = document.querySelector('main');

export function loadCV() {
    cvClicked();
    main.innerHTML = `<h1>CV</h1>`;
}