const puppeteer = require("puppeteer");

class serverDatabase {
    async typeDatabaseName(page, text){
        await page.type("#text_create_db", text);
    }
    async clickSubmit(page){
        await page.click("#buttonGo");
    }
}

module.exports = serverDatabase;