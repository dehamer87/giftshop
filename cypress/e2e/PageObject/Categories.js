class Categories{
    get flowersandsweets() {
        return cy.get('[alt="categories.collection.key:flowers-and-sweets"]')
    }
    openFlowersandsweetsSection(){
        this.flowersandsweets.click()
    }
    
}
export const categories = new Categories();