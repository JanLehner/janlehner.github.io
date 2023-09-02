const main = document.querySelector('main');
const styleDiv = document.getElementById('stylesheetContainer');

export function skillsHtmlLoad(){
    styleDiv.innerHTML = `<link rel="stylesheet" href="./Stylesheets/skills.css">`;
    main.innerHTML = `<div class="block-div" id="toolsBlock-div">
    <a id="toolsBlock-btn-1" class="toolsBlock-btn block-btn btn-border-top-left"></a>
    <a id="toolsBlock-btn-2" class="toolsBlock-btn block-btn"></a>
    <a id="toolsBlock-btn-3" class="toolsBlock-btn block-btn btn-border-top-right"></a>
    <a id="toolsBlock-btn-4" class="toolsBlock-btn block-btn"></a>
    <a id="toolsBlock-btn-5" class="toolsBlock-btn block-btn"></a>
    <a id="toolsBlock-btn-6" class="toolsBlock-btn block-btn"></a>
    <a id="toolsBlock-btn-7" class="toolsBlock-btn block-btn btn-border-bottom-left"></a>
    <a id="toolsBlock-btn-8" class="toolsBlock-btn block-btn"></a>
    <a id="toolsBlock-btn-9" class="toolsBlock-btn block-btn btn-border-bottom-right"></a>
    <p class="agency blockDescription" id="toolsBlock-description">Sprachen</p>
</div>

<div class="block-div" id="langBlock-div">
    <a id="langBlock-btn-1" class="langBlock-btn block-btn btn-border-top-left"></a>
    <a id="langBlock-btn-2" class="langBlock-btn block-btn"></a>
    <a id="langBlock-btn-3" class="langBlock-btn block-btn btn-border-top-right"></a>
    <a id="langBlock-btn-4" class="langBlock-btn block-btn"></a>
    <a id="langBlock-btn-5" class="langBlock-btn block-btn"></a>
    <a id="langBlock-btn-6" class="langBlock-btn block-btn"></a>
    <a id="langBlock-btn-7" class="langBlock-btn block-btn btn-border-bottom-left"></a>
    <a id="langBlock-btn-8" class="langBlock-btn block-btn"></a>
    <a id="langBlock-btn-9" class="langBlock-btn block-btn btn-border-bottom-right"></a>
    <p class="agency blockDescription" id="langBlock-description">Tools</p>
</div>`;
}