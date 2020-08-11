const homePage = require('./homePage.js')
class loginPage {
    
    //Locators
    get username() {
        return $('#email')
    }
    
    get password() {
        return $('#passwd')
    }
    
    get loginButton() {
        return $('#SubmitLogin')
    }
    
    //actions
    loginToApp(appURL, un, pwd){
        browser.url(appURL);
        this.username.setValue(un);
        this.password.setValue(pwd);
        this.loginButton.click();
        return homePage;
    }
}

module.exports = new loginPage();