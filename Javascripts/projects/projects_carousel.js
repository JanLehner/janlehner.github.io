const projects_card_1 = document.getElementById('project-card-1');
const projects_card_2 = document.getElementById('project-card-2');
const projects_card_3 = document.getElementById('project-card-3');
const projects_card_4 = document.getElementById('project-card-4');
const projects_card_5 = document.getElementById('project-card-5');
const projects_card_6 = document.getElementById('project-card-6');
const projects_btn_left = document.getElementById('projects-btn-left');
const projects_btn_right = document.getElementById('projects-btn-right');

const projects_cards = [projects_card_1, projects_card_2, projects_card_3, projects_card_4, projects_card_5, projects_card_6,];
const projects_length = (projects_cards.length - 1);

export function addCarouselFunction() {
    projects_btn_left.addEventListener('click', projectsBtnLeftClicked);
    projects_btn_right.addEventListener('click', projectsBtnRightClicked);
}

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