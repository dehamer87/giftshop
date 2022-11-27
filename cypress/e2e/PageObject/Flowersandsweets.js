class Flwandswt{
    get kwd22() {
        return cy.get('[alt="Nuts & More Mix Damloj"]')
    }
    get kwd79() {
        return cy.get('[alt="Nuts & More Bee cell box tray"]')
    }
    get kwd43() {
        return cy.get('[alt="Nuts & More Chocolate Boxes"]')
    }
    get kwd59() {
        return cy.get('[alt="Nagwa Assorted Trio Boxes"]')
    }
    get kwd36() {
        return cy.get('[alt="Nagwa Assorted Duo Boxes"]')
    }
    get kwd18() {
        return cy.get('[alt="DOH! Dynamic Duo"]')
    }
    openkwd22(){
        this.kwd22.click()
    }
  

}
export const flwandswt = new Flwandswt();