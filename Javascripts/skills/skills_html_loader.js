const main = document.querySelector('main');
const styleDiv = document.getElementById('stylesheetContainer');

export function skillsHtmlLoad() {
    styleDiv.innerHTML = `<link rel="stylesheet" href="./Stylesheets/skills.css">`;
    main.innerHTML = `<div class="block-div" id="langBlock-div">
    <a class="langBlock-btn block-btn btn-border-top-left">
        <div class="langBlock-icon-div" id="langBlock-img-1"></div>
    </a>
    <a class="langBlock-btn block-btn">
        <div class="langBlock-icon-div" id="langBlock-img-2"></div>
    </a>
    <a class="langBlock-btn block-btn btn-border-top-right">
        <div class="langBlock-icon-div" id="langBlock-img-3"></div>
    </a>
    <a class="langBlock-btn block-btn">
        <div class="langBlock-icon-div" id="langBlock-img-4"></div>
    </a>
    <a class="langBlock-btn block-btn">
        <div class="langBlock-icon-div" id="langBlock-img-5"></div>
    </a>
    <a class="langBlock-btn block-btn">
        <div class="langBlock-icon-div" id="langBlock-img-6"></div>
    </a>
    <a class="langBlock-btn block-btn btn-border-bottom-left">
        <div class="langBlock-icon-div" id="langBlock-img-7"></div>
    </a>
    <a class="langBlock-btn block-btn">
        <div class="langBlock-icon-div" id="langBlock-img-8"></div>
    </a>
    <a class="langBlock-btn block-btn btn-border-bottom-right">
        <div class="langBlock-icon-div" id="langBlock-img-9"></div>
    </a>
    <p class="agency blockDescription" id="langBlock-description">Sprachen</p>
</div>

<div class="block-div" id="toolsBlock-div">
    <a class="toolsBlock-btn block-btn btn-border-top-left">
        <div class="toolBlock-icon-div" id="toolBlock-img-1"></div>
    </a>
    <a class="toolsBlock-btn block-btn">
        <div class="toolBlock-icon-div" id="toolBlock-img-2"></div>
    </a>
    <a class="toolsBlock-btn block-btn btn-border-top-right">
        <div class="toolBlock-icon-div" id="toolBlock-img-3"></div>
    </a>
    <a class="toolsBlock-btn block-btn">
        <div class="toolBlock-icon-div" id="toolBlock-img-4"></div>
    </a>
    <a class="toolsBlock-btn block-btn">
        <div class="toolBlock-icon-div" id="toolBlock-img-5"></div>
    </a>
    <a class="toolsBlock-btn block-btn">
        <div class="toolBlock-icon-div" id="toolBlock-img-6"></div>
    </a>
    <a class="toolsBlock-btn block-btn btn-border-bottom-left">
        <div class="toolBlock-icon-div" id="toolBlock-img-7"></div>
    </a>
    <a class="toolsBlock-btn block-btn">
        <div class="toolBlock-icon-div" id="toolBlock-img-8"></div>
    </a>
    <a class="toolsBlock-btn block-btn btn-border-bottom-right">
        <div class="toolBlock-icon-div" id="toolBlock-img-9"></div>
    </a>
    <p class="agency blockDescription" id="toolsBlock-description">Tools</p>
</div>
`;
}