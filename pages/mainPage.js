const puppeteer = require("puppeteer");

class mainPage {
  async waitForSelector(page, selector) {
    await page.waitForSelector(selector);
  }
}

module.exports = mainPage;
