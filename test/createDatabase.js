const puppeteer = require("puppeteer");
const ServerDatabase = require("../pages/serverDatabase");
const LeftPanel = require("../pages/leftPanel");

var serverDatabase = new ServerDatabase();
var leftPanel = new LeftPanel();

(async () => {
    const brower = await puppeteer.launch({
        "headless": false
    });
    const page = await brower.newPage();
    await page.goto("http://localhost/phpmyadmin/");
    
    await leftPanel.addDatabase(page);
    await serverDatabase.typeDatabaseName(page, "newtable");
    await serverDatabase.clickSubmit(page);
    const selected =  leftPanel.getSelectedDatabase(page);
    await console.log(selected);

})