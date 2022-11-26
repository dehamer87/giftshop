import { categories, Categories } from "./PageObject/Categories"
import { homePage } from "./PageObject/HomePage"

describe('Open category', function () {
    it('Open category', function () {
        homePage.openHomePage()
        homePage.openKuwaitSection()
        categories.openFlowersandsweetsSection()
    })
})