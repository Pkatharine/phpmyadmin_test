const puppeteer = require('puppeteer');
var assert = require('chai').assert;

function randomName(){

    var name;
    var table = "table";
    var digit = Math.floor(Math.random() * Math.floor(10));
    name = table + digit;
    return name;

}

async function createTableTest() {

    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('http://localhost/phpmyadmin/db_structure.php?server=1&db=fefef');
    await page.setViewport({width: 1000, height: 1000});
    await page.click('#create_table_form_minimal > fieldset:nth-child(1) > div:nth-child(5)');

    const setDigit = (async function () {
       return {
           typeTableName:   await page.keyboard.type('randomname()'),
           typeColumnCount: await page.keyboard.press('Tab')
               .then(() => page.keyboard.press('Backspace'))
               .then(() => page.keyboard.type('1')),
           submit: await page.click('#create_table_form_minimal > fieldset.tblFooters > input[type=submit]')
       }
    });

    await setDigit();
    const tapSave = ( async function () {
            return {
                typeColumnName: await page.click('#table_columns > tbody > tr:nth-child(2) > td:first-child')
                    .then(() => page.keyboard.type('randomname()')),
                tap: await page.click('#page_content > form > fieldset > input[type=submit]:last-child')
            }
    });

    await page.waitForNavigation();
    await tapSave();
    await page.waitForNavigation();
    await page.screenshot({path: './screens/createTableTest.png'});

    var expected = 'randomname()';
    const searchValue = await page.$eval('#row_tbl_1 > th > a', el => el.textContent);
    assert.equal(expected, searchValue.trim());
    await page.waitForNavigation();
    await browser.close();
}

createTableTest();