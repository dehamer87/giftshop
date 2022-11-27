import { buttons } from "./PageObject/buttons"
import { categories, Categories } from "./PageObject/Categories"
import { flowersandsweets, flwandswt } from "./PageObject/flowersandsweets"
import { homePage } from "./PageObject/HomePage"

describe('ProductPage+addtocard', function () {
    it('Open category', function () {
        homePage.openHomePage()
        homePage.openKuwaitSection()
        categories.openFlowersandsweetsSection()
        cy.get('[data-testid="TestId__ProductBtn"]').first().click({force: true})
        cy.get('[data-testid="TestId__Container"] > .fui-py-4').contains('Add on something to make it extra special!')
        cy.get('.fui-flex > [data-testid="TestId__Button"]').click()
        cy.get('.fui-fixed > [data-testid="TestId__Button"]').click()
        cy.get('.fui-items-start > :nth-child(1) > [data-testid="TestId__InputField"]').type('dehamer88@gmail.com')
        cy.get('.fui-items-start > :nth-child(2) > [data-testid="TestId__InputField"]').type('123456789')
        cy.get('.fui-sticky > [data-testid="TestId__Button"]').click()
        cy.wait(10000)
        cy.get('[data-testid="TestId__RecipientName"]').type('Friend')
        cy.get('[data-testid="TestId__RecipientPhone"]').type('676706230')
        cy.get(':nth-child(4) > [data-testid="TestId__CheckboxInputField"]').click()
        cy.get('[data-testid="TestId__Button"]').click()
        cy.get(':nth-child(1) > [data-testid="TestId__DeliveryDateItem"] > [data-testid="TestId__DeliveryDateInput"]').click()
        cy.get(':nth-child(4) > [data-testid="TestId__CustomSlotElement"] > .fui-flex').click()
        cy.get('[data-testid="TestId__Button"]').click()
        cy.get(':nth-child(2) > [data-testid="TestId__PaymentMethodElement"] > .fui-h-full').click()
        


        
})
})
