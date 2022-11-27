class Buttons{
    get addtocard() {
        return cy.get('#__next > main > div > div > div.fui-w-full.fui-py-4.md\:fui-w-2\/5.md\:fui-pt-6.ltr\:md\:fui-pl-30px.rtl\:md\:fui-pr-30px > div > div:nth-child(6) > button')
    }
    clickaddtocard(){
        this.addtocard.click()
    }
    
    
}
export const buttons = new Buttons();