export function skillFunc() {
    var toolsBlock = document.getElementById("toolsBlock-div");
    var toolsBlock_all_btn = document.getElementsByClassName("toolsBlock-btn");
    var toolsBlock_description = document.getElementById("toolsBlock-description");

    var langBlock = document.getElementById("langBlock-div");
    var langBlock_all_btn = document.getElementsByClassName("langBlock-btn");
    var langBlock_description = document.getElementById("langBlock-description");

    toolsBlock.addEventListener("mouseover", function () {
        toolsBlock_description.classList.add("hidden");
        for (let btn of toolsBlock_all_btn) {
            btn.classList.add("hoverEffect");
        }
    });
    toolsBlock.addEventListener("mouseout", function () {
        for (let btn of toolsBlock_all_btn) {
            btn.classList.remove("hoverEffect");
        }
        toolsBlock_description.classList.remove("hidden");
    });

    langBlock.addEventListener("mouseover", function () {
        langBlock_description.classList.add("hidden");
        for (let btn of langBlock_all_btn) {
            btn.classList.add("hoverEffect");
        }
    });
    langBlock.addEventListener("mouseout", function () {
        for (let btn of langBlock_all_btn) {
            btn.classList.remove("hoverEffect");
        }
        langBlock_description.classList.remove("hidden");
    });
}
