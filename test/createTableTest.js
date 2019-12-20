const puppeteer = require('puppeteer');
let assert = require('chai').assert;
const createTableHelper = require('../Helpers/CreateTableHelper.js');
const FillTableHelper = require('../Helpers/FillTableHelper');


(async function createTableTest() {

    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('http://localhost/phpmyadmin/db_structure.php?server=1&db=fefef');
    await page.setViewport({width: 1000, height: 1000});
    (async function () {
        (await (new createTableHelper()).startTableHelper(page));
    })();

    await page.waitForNavigation();

    (async function () {
        (await (new FillTableHelper()).startFillTableHelper(page));
    })();

    var expected = 'randomname';
    var searchValue = page.querySelector('#tablestructure > tbody > tr > th > label');
    var actual = (searchValue.innerText || searchValue.textContent);
    await page.waitForNavigation();
    assert.equal(expected, actual);
    await page.waitForNavigation();
    await page.screenshot({path: './screens/createTableTest.png'});
    await browser.close();
})();
