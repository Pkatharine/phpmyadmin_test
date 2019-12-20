class FillColumn {
    constructor() {
        this._name = '#table_columns > tbody > tr:nth-child(2) > td:first-child';
        this._saveButton = '#page_content > form > fieldset > input[type=submit]:last-child';
    }

    nameClick = ( async function(page){
       await page.click(this.name);
    });

    nameType = (async function(page){
        await page.keyboard.type('randomname');
    });

    saveButtonClick = ( async function(page){
        await page.click(this.saveButton);
    });

    get name() {
        return this._name;
    }

    get saveButton() {
        return this._saveButton;
    }
}

module.exports = FillColumn;