import { portfolioClicked } from "../navBtnSelector.js";
import { portfoliosHtmlLoad } from "./portfolios_html_loader.js";

export function loadPortfolios() {
    portfoliosHtmlLoad();
    portfolioClicked();
}