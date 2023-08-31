import { projectClicked } from "../navBtnSelector.js";

const main = document.querySelector('main');
const styleDiv = document.getElementById('stylesheetContainer');

export function loadProjects() {
    styleDiv.innerHTML = `<link rel="stylesheet" href="./Stylesheets/projects.css">`;
    projectClicked();
    main.innerHTML = `<div class="flexbox projects-div-arrow-left">
    <a id="projects-btn-left" class="projects-btn-arrow"><svg class="svg arrowBtn" viewBox="0 0 24 24"
            fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path opacity="0.1"
                    d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z"
                    fill="#a5c5e6"></path>
                <path
                    d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z"
                    stroke="#a5c5e6" stroke-width="2"></path>
                <path d="M8 12L16 12" stroke="#a5c5e6" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round"></path>
                <path
                    d="M11 9L8.08704 11.913V11.913C8.03897 11.961 8.03897 12.039 8.08704 12.087V12.087L11 15"
                    stroke="#a5c5e6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </g>
        </svg></a>
</div>
<div class="projects-container">
    <div class="flexbox projects-card card-center" id="project-card-1">
        <div class="flexbox projects-card-middle-div-left">
            <div class="flexbox projects-card-inner-div-left">
                <p class="agency projects-card-title">Cooler Titel</p>
                <p class="twCen projects-card-text">Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Vitae voluptatum
                    at atque officia
                    omnis voluptates necessitatibus quis, ipsa repudiandae id magni earum, asperiores
                    praesentium unde error dolorum laborum assumenda repellendus eum nulla iure corporis
                    quas
                    reprehenderit. Commodi, fuga maiores. Ex ducimus quo facilis? Ipsam similique minus
                    aperiam?
                    Porro, ullam adipisci.
                </p>
                <div class="flexbox projects-card-inner-content-bottom">
                    <a class="btn-projects-card nav-btn" href="#">Test</a>
                    <a class="btn-projects-card nav-btn" href="#">Test</a>
                </div>
            </div>
        </div>
        <div class="flexbox projects-card-middle-div-right">
            <div id="img_card_donut" class="projects-card-inner-div-right"></div>
        </div>
    </div>
    <div class="flexbox projects-card card-right" id="project-card-2">2</div>
    <div class="flexbox projects-card card-invisible" id="project-card-3">3</div>
    <div class="flexbox projects-card card-invisible" id="project-card-4">4</div>
    <div class="flexbox projects-card card-invisible" id="project-card-5">5</div>
    <div class="flexbox projects-card card-left" id="project-card-6">6</div>
</div>
<div class="flexbox projects-div-arrow-right">
    <a id="projects-btn-right" class="projects-btn-arrow">
        <svg class="svg arrowBtn" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path opacity="0.1"
                    d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z"
                    fill="#a5c5e6"></path>
                <path
                    d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z"
                    stroke="#a5c5e6" stroke-width="2"></path>
                <path d="M16 12L8 12" stroke="#a5c5e6" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round"></path>
                <path d="M13 15L15.913 12.087V12.087C15.961 12.039 15.961 11.961 15.913 11.913V11.913L13 9"
                    stroke="#a5c5e6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </g>
        </svg>
    </a>
</div>`;

    const projects_btn_left = document.getElementById('projects-btn-left');
    const projects_btn_right = document.getElementById('projects-btn-right');
    const projects_card_1 = document.getElementById('project-card-1');
    const projects_card_2 = document.getElementById('project-card-2');
    const projects_card_3 = document.getElementById('project-card-3');
    const projects_card_4 = document.getElementById('project-card-4');
    const projects_card_5 = document.getElementById('project-card-5');
    const projects_card_6 = document.getElementById('project-card-6');

    const projects_cards = [projects_card_1, projects_card_2, projects_card_3, projects_card_4, projects_card_5, projects_card_6,];
    const projects_length = (projects_cards.length - 1);

    projects_btn_left.addEventListener('click', projectsBtnLeftClicked);
    projects_btn_right.addEventListener('click', projectsBtnRightClicked);

    function projectsBtnRightClicked() {
        for (var i = 0; i < projects_length + 1; i++) {
            if (projects_cards[i].classList.contains('card-center')) {
                if (i === 0) {
                    projects_cards[projects_length].classList.add('card-center');
                    projects_cards[projects_length].classList.remove('card-left');

                    projects_cards[projects_length - 1].classList.add('card-left');
                    projects_cards[projects_length - 1].classList.remove('card-invisible');
                } else if (i === 1) {
                    projects_cards[projects_length].classList.add('card-left');
                    projects_cards[projects_length].classList.remove('card-invisible');

                    projects_cards[0].classList.add('card-center');
                    projects_cards[0].classList.remove('card-left');
                } else {
                    projects_cards[i - 2].classList.add('card-left');
                    projects_cards[i - 2].classList.remove('card-invisible');

                    projects_cards[i - 1].classList.add('card-center');
                    projects_cards[i - 1].classList.remove('card-left');
                }
                if (i === projects_length) {
                    projects_cards[0].classList.add('card-invisible');
                    projects_cards[0].classList.remove('card-right');
                } else {
                    projects_cards[i + 1].classList.add('card-invisible');
                    projects_cards[i + 1].classList.remove('card-right');
                }
                projects_cards[i].classList.add('card-right');
                projects_cards[i].classList.remove('card-center');
                break;
            }
        }
    }

    function projectsBtnLeftClicked() {
        for (var i = 0; i < projects_length + 1; i++) {
            if (projects_cards[i].classList.contains('card-center')) {
                if (i === projects_length) {
                    projects_cards[0].classList.add('card-center');
                    projects_cards[0].classList.remove('card-right');

                    projects_cards[1].classList.add('card-right');
                    projects_cards[1].classList.remove('card-invisible');
                } else if (i === projects_length - 1) {
                    projects_cards[projects_length].classList.add('card-center');
                    projects_cards[projects_length].classList.remove('card-right');

                    projects_cards[0].classList.add('card-right');
                    projects_cards[0].classList.remove('card-invisible');
                } else {
                    console.log(i);
                    projects_cards[i + 1].classList.add('card-center');
                    projects_cards[i + 1].classList.remove('card-right');

                    projects_cards[i + 2].classList.add('card-right');
                    projects_cards[i + 2].classList.remove('card-invisible');
                }
                if (i === 0) {
                    projects_cards[projects_length].classList.add('card-invisible');
                    projects_cards[projects_length].classList.remove('card-left');
                } else {
                    projects_cards[i - 1].classList.add('card-invisible');
                    projects_cards[i - 1].classList.remove('card-left');
                }
                projects_cards[i].classList.add('card-left');
                projects_cards[i].classList.remove('card-center');
                console.log(projects_cards);
                break;
            }
        }
    }
}