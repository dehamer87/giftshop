class Categories{
    get flowersandsweets() {
        return cy.get('[alt="categories.collection.key:flowers-and-sweets"]')
    }
    get flowersandcake() {
        return cy.get('[alt="merchandisingCategories.lvl4:cakes-dessert-bars AND attributes.food-type.id:437"]')
    }
    openFlowersandsweetsSection(){
        this.flowersandsweets.click()
    }
    openFlowersandcakeSection(){
        this.flowersandcake.click()
    }
    
}
export const categories = new Categories();