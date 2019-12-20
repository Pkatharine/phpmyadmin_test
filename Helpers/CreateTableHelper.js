const CreateTablePage = require('../pages/createTablePage.js');
const FillColumn = require('../pages/fillColumn');
class CreateTableHelper{
    constructor() {
    }

    async startTableHelper(page) {
        let tableHelper = new CreateTablePage();
        await tableHelper.clickTable(page);
        await tableHelper.typeTableName(page);
        await tableHelper.clickColumn(page);
        await tableHelper.clickColumn(page)
            .then(() => page.keyboard.press('Backspace'))
            .then(() => tableHelper.typeColumn(page));
        await tableHelper.clickGo(page);
        return new FillColumn();
    }
}

module.exports = CreateTableHelper;