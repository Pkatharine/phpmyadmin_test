const puppeteer = require("puppeteer");
const mainPage = require("../pages/mainPage")

class serverDatabase extends mainPage{
    async typeDatabaseName(page, text){
        await page.type("#text_create_db", text);
    }
    async clickSubmit(page){
        await page.click("#buttonGo");
    }
}

module.exports = serverDatabase;