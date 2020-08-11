const loginPage = require('./loginPage.js')
const productsPage = require('./productsPage.js')

class homePage {
    
    //Locators
    get logout() {
        return $('.logout')
    }

    get dresses() {
        return $("(//a[text()='Dresses'])[2]")
    }
    
    //Actions
    
    clickOnDresses() {
        this.dresses.click();
        return productsPage;
    }
    
    logoutFromApp() {
        this.logout.click();
        return loginPage;
    }   
}

module.exports = new homePage();