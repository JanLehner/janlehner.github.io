const main = document.querySelector('main');
const styleDiv = document.getElementById('stylesheetContainer');

export function projectsHtmlLoad() {
    styleDiv.innerHTML = `<link rel="stylesheet" href="./Stylesheets/projects.css">`;
    main.innerHTML = `<div class="flexbox projects-div-arrow-left">
    <a id="projects-btn-left" class="projects-btn-arrow"><svg class="svg arrowBtn" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path opacity="0.1"
                    d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z"
                    fill="#a5c5e6"></path>
                <path
                    d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z"
                    stroke="#a5c5e6" stroke-width="2"></path>
                <path d="M8 12L16 12" stroke="#a5c5e6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                </path>
                <path d="M11 9L8.08704 11.913V11.913C8.03897 11.961 8.03897 12.039 8.08704 12.087V12.087L11 15"
                    stroke="#a5c5e6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </g>
        </svg></a>
</div>
<div class="projects-container">
    <div class="flexbox projects-card card-center" id="project-card-1">
        <div class="flexbox projects-card-middle-div-left">
            <div class="flexbox projects-card-inner-div-left">
                <p class="agency projects-card-title">Blender Donut</p>
                <p class="twCen projects-card-text">Als ich meinen Computer frisch gebaut hatte, wollte ich alles
                    testen, was ich damit machen kann. Eines Abends stiess ich daher auf Blender. Ohne etwas über das
                    Programm oder 3D-Modellierung zu wissen entschied ich mich ein Tutorial auf YouTube anzuschauen und
                    das ganze selbst auszuprobieren. Zwei Tage später stand das Produkt und ich hätte mein erstes
                    Projekt in Blender umgesetzt.
                </p>
                <div class="flexbox projects-card-inner-content-bottom">
                    <a class="agency btn-projects-card" href="https://photos.app.goo.gl/Aiwfu6HDhAG4syoT8"
                        target="_blank">Bilder</a>
                </div>
            </div>
        </div>
        <div class="flexbox projects-card-middle-div-right">
            <div id="img_card_donut" class="projects-card-inner-div-right"></div>
        </div>
    </div>
    <div class="flexbox projects-card card-right" id="project-card-2">
        <div class="flexbox projects-card-middle-div-left">
            <div class="flexbox projects-card-inner-div-left">
                <p class="agency projects-card-title">Zeitfinder</p>
                <p class="twCen projects-card-text">Zeitfinder ist eine Webseite, welche ich erstellt habe, bei der man
                    eine Ortschaft eingeben kann und über eine API die
                    aktuelle Zeit dieser ausgegeben wird. Je nachdem, was für eine Uhrzeit zurückgegeben wird, verändert
                    die Webseite passend das Hintergrundbild.</p>
                <div class="flexbox projects-card-inner-content-bottom">
                    <a class="agency btn-projects-card" href="https://lominotimefinder.netlify.app/"
                        target="_blank">Webseite</a>
                </div>
            </div>
        </div>
        <div class="flexbox projects-card-middle-div-right">
            <div id="img_card_timefinder" class="projects-card-inner-div-right"></div>
        </div>
    </div>
    <div class="flexbox projects-card card-invisible" id="project-card-3">
        <div class="flexbox projects-card-middle-div-left">
            <div class="flexbox projects-card-inner-div-left">
                <p class="agency projects-card-title">Computerbau</p>
                <p class="twCen projects-card-text">Nach viel Planung und einigen Überredungsversuche hatte ich alles
                    zusammen und konnte so meinen ersten eigenen Computer zusammen bauen 🛠. Durch diesen konnte ich
                    mich an verschiedenen Programmen ausüben (z.B. Blender), wodurch mein Interesse für Informatik stieg.</p>
                <div class="flexbox projects-card-inner-content-bottom"></div>
            </div>
        </div>
        <div class="flexbox projects-card-middle-div-right">
            <div id="img_card_computerbuild" class="projects-card-inner-div-right"></div>
        </div>
    </div>
    <div class="flexbox projects-card card-invisible" id="project-card-4">
        <div class="flexbox projects-card-middle-div-left">
            <div class="flexbox projects-card-inner-div-left">
                <p class="agency projects-card-title">Random Fact</p>
                <p class="twCen projects-card-text">Die Random Fact Webseite, ist eine einfache, aber dennoch lustige
                    Webseite, bei der man sich entweder auf Deutsch oder Englisch unnütze Fakten mit einem dazu
                    passenden GIF
                    ausgeben kann.</p>
                <div class="flexbox projects-card-inner-content-bottom">
                    <a class="agency btn-projects-card" href="https://lomionsrandomfacts.netlify.app/"
                        target="_blank">Webseite</a>
                </div>
            </div>
        </div>
        <div class="flexbox projects-card-middle-div-right">
            <div id="img_card_randomfact" class="projects-card-inner-div-right"></div>
        </div>
    </div>
    <div class="flexbox projects-card card-invisible" id="project-card-5">
        <div class="flexbox projects-card-middle-div-left">
            <div class="flexbox projects-card-inner-div-left">
                <p class="agency projects-card-title">Laptop Reperatur</p>
                <p class="twCen projects-card-text">Nachdem eines Tages die SSD meines Laptops den Geist aufgab
                    kontaktierte ich den Support des Herstellers.
                    Irgendwie schaffte ich es den Mitarbeiter zu überreden mir eine neue Festplatte zu senden, statt das
                    ich meinen Laptop einsenden muss und so begann die eigentliche Herausforderung der Reparatur.
                    Nachdem ich die Schale des Laptops entfernte und das Innenleben zum Vorschein kam, merkte ich, dass es
                    doch gar nicht so unterschiedlich zu Desktop Computer ist und so konnte ich die Festplatte ohne
                    Zwischenfälle austauschen und meinen Laptop wieder zum Laufen bringen.</p>
                <div class="flexbox projects-card-inner-content-bottom"></div>
            </div>
        </div>
        <div class="flexbox projects-card-middle-div-right">
            <div id="img_card_laptoprepair" class="projects-card-inner-div-right"></div>
        </div>
    </div>
    <div class="flexbox projects-card card-left" id="project-card-6">
        <div class="flexbox projects-card-middle-div-left">
            <div class="flexbox projects-card-inner-div-left">
                <p class="agency projects-card-title">Number converter</p>
                <p class="twCen projects-card-text">Beim Number converter handelt es sich um eine Webseite, welche die
                    Möglichkeit bietet, Ganzzahlen
                    zwischen dem Dezimal-, Binär- und Hexadezimalsystem hin und her zu konvertieren. Der Benutzer kann
                    über eine Dropdown-Liste wählen, was für ein Input er eingeben möchte. Hat er diesen eingegeben und
                    per Knopfdruck bestätigt, wird die Zahl clientseitig umgerechnet. Zusätzlich zu den drei genannten
                    Systemen gibt es spasseshalber ein "Strichsystem". Dieses gibt
                    eingegebene Zahlen bis 1'000'000 mithilfe von Strichen aus.</p>
                <div class="flexbox projects-card-inner-content-bottom">
                    <a class="agency btn-projects-card" href="https://lominosnumberconverter.netlify.app/"
                        target="_blank">Webseite</a>
                </div>
            </div>
        </div>
        <div class="flexbox projects-card-middle-div-right">
            <div id="img_card_numberconverter" class="projects-card-inner-div-right"></div>
        </div>
    </div>
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
                <path d="M16 12L8 12" stroke="#a5c5e6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                </path>
                <path d="M13 15L15.913 12.087V12.087C15.961 12.039 15.961 11.961 15.913 11.913V11.913L13 9"
                    stroke="#a5c5e6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </g>
        </svg>
    </a>
</div>`;
}