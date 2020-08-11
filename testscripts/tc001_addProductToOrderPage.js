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
        let orderPage = productDetailPage.addItemToCart(5);
        orderPage.isProductDisplayed("3");
        expect(orderPage.isProductDisplayed("3")).to.be.true;
    });
    
    after("before", function(){
        homePage.logoutFromApp();
    });
});


