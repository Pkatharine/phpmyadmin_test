const FillColumn = require('../pages/fillColumn');
class FillTableHelper{
    constructor() {
    }

    async startFillTableHelper(page) {
        let fillTableColumn = new FillColumn();
        await fillTableColumn.nameClick(page);
        await fillTableColumn.nameType(page);
        await fillTableColumn.saveButtonClick(page);
    }
}

module.exports = FillTableHelper;