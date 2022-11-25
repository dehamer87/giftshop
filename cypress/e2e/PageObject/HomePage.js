class HomePage{
    get kuwaitFlag() {
        return cy.get('li:nth-child(1) [data-testid="TestId__CountryListItemAnchor"]')
    }
    get saudiArabiaFlag() {
        return cy.get('li:nth-child(2) [data-testid="TestId__CountryListItemAnchor"]')
    }
    get omanFlag() {
        return cy.get('li:nth-child(3) [data-testid="TestId__CountryListItemAnchor"]')
    }
    get qatarFlag() {
        return cy.get('li:nth-child(4) [data-testid="TestId__CountryListItemAnchor"]')
    }
    get bahrainFlag() {
        return cy.get('li:nth-child(5) [data-testid="TestId__CountryListItemAnchor"]')
    }
    get unitedArabEmiratesFlag() {
        return cy.get('li:nth-child(6) [data-testid="TestId__CountryListItemAnchor"]')
    }
    get unitedKingdomFlag() {
        return cy.get('li:nth-child(7) [data-testid="TestId__CountryListItemAnchor"]')
    }
    get jordanFlag() {
        return cy.get('li:nth-child(8) [data-testid="TestId__CountryListItemAnchor"]')
    }
    get egyptFlag() {
        return cy.get('li:nth-child(9) [data-testid="TestId__CountryListItemAnchor"]')
    }
    
    openKuwaitSection(){
        this.kuwaitFlag.click()
    }
    openHomePage(){
        cy.visit('https://floward.com/')
    }
   
}
export const homePage = new HomePage();