
class AddDbPage {
    constructor(page){
        this.page = page;
    }

    async verifyOpeningDbCreateForm(){
        this.page.waitForFunction('document.querySelector("#page_content h2").innerText == "Databases"');
        var text1 = await this.page.$eval(openCreateDbFormLabel,
                element=> element.innerText);
    }
}