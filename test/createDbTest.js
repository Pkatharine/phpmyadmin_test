const assert = require('assert')
const puppeteer = require('puppeteer')
const ServerDatabase = require("../pages/serverDatabase");
const LeftPanel = require("../pages/leftPanel");

var browser;
var page;
before(async () => {
     browser = await puppeteer.launch({
        "headless": false
    });
     page = await browser.newPage()
  })

describe('create database', function()  {
    it('adds new database to list of databases in left panel', async()=> {
        //this.timeout(20000)
        var serverDatabase = new ServerDatabase();
        var leftPanel = new LeftPanel();
        await page.goto("http://localhost/phpmyadmin/");
    
        await leftPanel.addDatabase(page);
        await leftPanel.waitForSelector(page, "#text_create_db"); 
    
        await serverDatabase.typeDatabaseName(page, "140");
        await serverDatabase.clickSubmit(page);
        await serverDatabase.waitForSelector(page, "li.database.selected");
    
        const selected =  leftPanel.getSelectedDatabase(page);
        await selected;
        selected.then(function(value) {
            assert('140', value);
           });
   }).timeout(20000)
 })

 after(async () => {
    await browser.close()
  })