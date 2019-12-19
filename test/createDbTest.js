const assert = require("assert");
const puppeteer = require("puppeteer");
const ServerDatabase = require("../pages/serverDatabase");
const LeftPanel = require("../pages/leftPanel");
const { expect } = require("chai");
const Database = require("../database/utils");

var browser;
var page;
before(async () => {
  browser = await puppeteer.launch({
    headless: false
  });
  page = await browser.newPage();
});

describe("create database", function() {
  it("adds new database to list of databases in left panel", async () => {
    var serverDatabase = new ServerDatabase();
    var leftPanel = new LeftPanel();
    await page.goto("http://localhost/phpmyadmin/");

    await leftPanel.addDatabase(page);
    await leftPanel.waitForSelector(page, "#text_create_db");

    await serverDatabase.typeDatabaseName(page, "new");
    await serverDatabase.clickSubmit(page);
    await serverDatabase.waitForSelector(page, "li.database.selected");

    const selected = leftPanel.getSelectedDatabase(page);
    await selected;
    selected.then(function(value) {
      expect(value).to.eql("new");
    });

    //done();
  }).timeout(20000);
});

after(async () => {
  var database = new Database();
  database.connect("new");
  database.deleteDb("new");
  database.endConnection();

  await browser.close();
});
