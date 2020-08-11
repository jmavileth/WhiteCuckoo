const expect = require('chai').expect;
const loginPage = require('../pages/loginPage.js');
const homePage = require('../pages/homePage.js');
const getConfigData = require('../libraries/utilities.js');


describe("loginScript", function(){
    
   before("loginToApp", function(){
       loginPage.loginToApp(getConfigData("appURL"), getConfigData("username"), getConfigData("password"))
    });
    
    it("Verify selected product is displayed in the OrderPage", function(){
        let productsPage = homePage.clickOnDresses();
        let productDetailPage = productsPage.clickOnProduct("3")
        let orderPage = productDetailPage.addItemToCartAndClose(2);
        expect(browser.getTitle()).to.not.include("Order");
    });
    
    after("before", function(){
        homePage.logoutFromApp();
    });
});


