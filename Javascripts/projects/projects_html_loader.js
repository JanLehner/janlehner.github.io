const main = document.querySelector('main');
const styleDiv = document.getElementById('stylesheetContainer');

export function projectsHtmlLoad(){
    styleDiv.innerHTML = `<link rel="stylesheet" href="./Stylesheets/projects.css">`;
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
}