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
})
})
