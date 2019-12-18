const puppeteer = require("puppeteer");
const ServerDatabase = require("../pages/serverDatabase");
const LeftPanel = require("../pages/leftPanel");

var serverDatabase = new ServerDatabase();
var leftPanel = new LeftPanel();

(async () => {
    const browser = await puppeteer.launch({
        "headless": false
    });
    const page = await browser.newPage();
    await page.goto("http://localhost/phpmyadmin/");
    
    await leftPanel.addDatabase(page);
    await leftPanel.waitForSelector(page, "#text_create_db"); 

    await serverDatabase.typeDatabaseName(page, "142");
    await serverDatabase.clickSubmit(page);
    await serverDatabase.waitForSelector(page, "li.database.selected");

    const selected =  leftPanel.getSelectedDatabase(page);
    await selected;
    selected.then(function(value) {
        console.log(value); 
       });
    await browser.close();

})();