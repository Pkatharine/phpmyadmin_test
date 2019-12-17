const locators = require('../locators');

class HomePage {
    constructor(page){
        this.page = page;
    }

    async clickAddDatabase(){
        const [newDbButton] = (await this.page.$x(addDbButton));
        if (newDbButton) {
            await newDbButton.click();
        }
    }
}