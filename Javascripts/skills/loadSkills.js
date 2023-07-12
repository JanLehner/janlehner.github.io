const main = document.querySelector('main');

export function loadSkills() {
    main.innerHTML = `<div class="skillBlockType">
    <p class="skillBockTitle">Programmiersprachen</p>
    <div class="skillContainerIcons">
        <a class="iconSkillsHolder" href="#"><img class="iconSkills" src="./Images/html5.png" alt="#"></a>
        <a class="iconSkillsHolder" href="#"><img class="iconSkills" src="./Images/html5.png" alt="#"></a>
        <a class="iconSkillsHolder" href="#"><img class="iconSkills" src="./Images/html5.png" alt="#"></a>
        <a class="iconSkillsHolder" href="#"><img class="iconSkills" src="./Images/html5.png" alt="#"></a>
        <a class="iconSkillsHolder" href="#"><img class="iconSkills" src="./Images/html5.png" alt="#"></a>
        <a class="iconSkillsHolder" href="#"><img class="iconSkills" src="./Images/html5.png" alt="#"></a>
    </div>
</div>
<div class="skillBlockType">
    <p class="skillBockTitle">Modellierungssprachen</p>
    <div class="skillContainerIcons">
        <p>test</p>
    </div>
</div>`;
}