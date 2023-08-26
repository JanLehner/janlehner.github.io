import { Router } from './Javascripts/router.js';
import { loadCV } from './Javascripts/cv/loadCV.js';
import { loadProjects } from './Javascripts/projects/loadProjects.js'
import { loadSkills } from './Javascripts/skills/loadSkills.js';
import { loadPortfolios } from './Javascripts/portfolios/loadPortfolios.js';
import { cvClicked, portfolioClicked, projectClicked, skillClicked } from './Javascripts/navBtnSelector.js';

const main = document.querySelector('main');

const routes = {
    cv: { hash: '#cv', function: loadCV },
    projects: { hash: '#projects', function: loadProjects },
    skills: { hash: '#skills', function: loadSkills },
    portfolios: { hash: '#portfolios', function: loadPortfolios },
    error: { function: renderNotFound },
};
let router = new Router(routes);

router.urlResolve();

function renderNotFound() {
    main.innerHTML = `
  <h1>404 | Not found</h1>
  <a class="nav-btn" href="#">Return to home</a>`;
}