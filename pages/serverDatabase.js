const puppeteer = require("puppeteer");
const mainPage = require("../pages/mainPage");

class serverDatabase extends mainPage {
  async typeDatabaseName(page, text) {
    await page.type("#text_create_db", text);
  }
  async clickSubmit(page) {
    await page.click("#buttonGo");
  }

  async clickSql(page) {
    await page.click("#topmenu li:nth-child(2) a.tab img.icon");
  }
}

module.exports = serverDatabase;
