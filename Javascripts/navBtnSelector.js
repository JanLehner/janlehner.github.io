const cv_btn = document.getElementById('cv-btn');
const portfolio_btn = document.getElementById('portfolio-btn');
const project_btn = document.getElementById('project-btn');
const skill_btn = document.getElementById('skill-btn');

export function cvClicked(){
    portfolio_btn.classList.remove('nav-btn-selected');
    project_btn.classList.remove('nav-btn-selected');
    skill_btn.classList.remove('nav-btn-selected');
    cv_btn.classList.add('nav-btn-selected');
}

export function portfolioClicked(){
    cv_btn.classList.remove('nav-btn-selected');
    project_btn.classList.remove('nav-btn-selected');
    skill_btn.classList.remove('nav-btn-selected');
    portfolio_btn.classList.add('nav-btn-selected');
}

export function projectClicked(){
    cv_btn.classList.remove('nav-btn-selected');
    portfolio_btn.classList.remove('nav-btn-selected');
    skill_btn.classList.remove('nav-btn-selected');
    project_btn.classList.add('nav-btn-selected'); 
}

export function skillClicked(){
    cv_btn.classList.remove('nav-btn-selected');
    portfolio_btn.classList.remove('nav-btn-selected');
    project_btn.classList.remove('nav-btn-selected'); 
    skill_btn.classList.add('nav-btn-selected');
}