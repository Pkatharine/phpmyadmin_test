class Page{
    constructor(page){
        this.page = page;
    }

    async visit(url){
        await this.page.goto(url,
            {
                waitUntil:'load'
            });
    }
}
module.exports = Page;