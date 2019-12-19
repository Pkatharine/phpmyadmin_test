const puppeteer = require("puppeteer");
const mainPage = require("../pages/mainPage");

class leftPanel extends mainPage {
  async addDatabase(page) {
    await page.click("#pma_navigation_tree_content a.hover_show_full");
  }

  async getSelectedDatabase(page) {
    var selectedDatabase = await page.$eval(
      "li.database.selected",
      element => element.innerText
    );
    return selectedDatabase;
  }
}

module.exports = leftPanel;
