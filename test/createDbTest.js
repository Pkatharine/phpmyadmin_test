const assert = require("assert");
const puppeteer = require("puppeteer");
const LeftPanel = require("../pages/leftPanel");
const { expect } = require("chai");
const Database = require("../database/utils");
const ServerDatabase = require("../pages/serverDatabase");

var browser;
var page;

before(async () => {
  browser = await puppeteer.launch({
    headless: false
  });
  page = await browser.newPage();
});

describe("create database", function() {
  
  it("adds new database to list of databases in left panel", async()=> {
  
    var leftPanel = new LeftPanel();
    var serverDatabase = new ServerDatabase();
    await page.goto("http://localhost/phpmyadmin/");

    await leftPanel.addDatabase(page);
    await leftPanel.waitForSelector(page, "#text_create_db");
    await serverDatabase.typeDatabaseName(page, "new");

    await serverDatabase.clickSubmit(page);

    await leftPanel.waitForSelector(page, "li.database.selected");

    const selected = leftPanel.getSelectedDatabase(page);
    await selected;
    
    var promiseB = selected.then(function(selected) {
      return expect(selected).to.deep.eql("new");
   });
   return promiseB;
  }).timeout(20000);
});

after(async () => {
  var database = new Database();
  database.connect("new");
  database.deleteDb("new");
  database.endConnection();

  await browser.close();
});
