const puppeteer = require("puppeteer");

class leftPanel {
    async addDatabase(page){
        await page.click("//li[@class='first new_database italics']/div[2]/a");
    }

    async getSelectedDatabase(page){
        var selectedDatabase = await page.$eval("#pm_navigation_tree_content ul li.selected", 
                        element => element.innerText);
        return selectedDatabase;
    }
}

module.exports = leftPanel;