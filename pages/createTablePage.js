const FillColumn = require('../pages/fillColumn');

class CreateTablePage {
    constructor() {
        this._tableName = '#create_table_form_minimal > fieldset:first-child > div:nth-child(5)';
        this._numberOfColumns = '#create_table_form_minimal > fieldset:first-child > div:nth-child(6) > input[type=number]';
        this._go = '#create_table_form_minimal > fieldset.tblFooters > input[type=submit]';
    }

    clickTable = (async function(page){
         await page.click(this.tableName);
    });

     typeTableName = (async function(page){
         await page.keyboard.type('randomname');
     });

     typeColumn = (async function (page) {
        await page.keyboard.type('1');
     });

     clickColumn = (async function(page){
         await page.click(this.numberOfColumns);
     });

     clickGo = (async function (page) {
         await page.click(this.go);
         return new FillColumn();
     })

    get tableName() {
        return this._tableName;
    }

    get numberOfColumns() {
        return this._numberOfColumns;
    }


     get go() {
         return this._go;
     }
 }

module.exports = CreateTablePage;

