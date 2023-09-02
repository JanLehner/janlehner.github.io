export function skillFunc() {
    const langBlock = document.getElementById("langBlock-div");
    const langBlock_all_btn = document.getElementsByClassName("langBlock-btn");
    const langBlock_description = document.getElementById("langBlock-description");
    const lang_img_class = document.getElementsByClassName('langBlock-icon-div');

    langBlock.addEventListener("mouseover", function () {
        langBlock_description.classList.add("hiddenSkill");
        for (let btn of langBlock_all_btn) {
            btn.classList.add("hoverEffect");
        }
        for (let img of lang_img_class){
            img.style.opacity = 1;
        }
    });
    langBlock.addEventListener("mouseout", function () {
        for (let btn of langBlock_all_btn) {
            btn.classList.remove("hoverEffect");
        }
        for (let img of lang_img_class){
            img.style.opacity = 0;
        }
        langBlock_description.classList.remove("hiddenSkill");
    });

    const toolsBlock = document.getElementById("toolsBlock-div");
    const toolsBlock_all_btn = document.getElementsByClassName("toolsBlock-btn");
    const toolsBlock_description = document.getElementById("toolsBlock-description");
    const tool_img_class = document.getElementsByClassName('toolBlock-icon-div');

    toolsBlock.addEventListener("mouseover", function () {
        toolsBlock_description.classList.add("hiddenSkill");
        for (let btn of toolsBlock_all_btn) {
            btn.classList.add("hoverEffect");
        }
        for (let img of tool_img_class){
            img.style.opacity = 1;
        }
    });
    toolsBlock.addEventListener("mouseout", function () {
        for (let btn of toolsBlock_all_btn) {
            btn.classList.remove("hoverEffect");
        }
        for (let img of tool_img_class){
            img.style.opacity = 0;
        }
        toolsBlock_description.classList.remove("hiddenSkill");
    });
}
