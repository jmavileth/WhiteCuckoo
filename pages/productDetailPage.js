const orderPage = require('./orderPage.js')

class productDetailPage {
    get plusBtn(){
        return $("//i[contains(@class,'icon-plus')]")
    }
    
    get minusBtn(){
        return $("//i[contains(@class,'icon-minus')]")
    }
    
    get addToCart(){
        return $("[name='Submit']")
    }
    
    get proceedToCheckout(){
        return $("//a[@title='Proceed to checkout']")
    }
    
    get closeIcon() {
        return $('.cross');
    }
    
    //actions
    addItemToCartAndClose(quantity=1,plus=true) {
        let btn;
        if(plus) {
            btn = this.plusBtn;
        } else {
            btn = this.minusBtn;
        }
        
        for(let i=1;i<quantity;i++){
            btn.click();
            browser.pause(2000)
        }
        this.addToCart.click();
        this.closeIcon.click();
    }
    
    //actions
    addItemToCart(quantity=1,plus=true) {
        let btn;
        if(plus) {
            btn = this.plusBtn;
        } else {
            btn = this.minusBtn;
        }
        
        for(let i=1;i<quantity;i++){
            btn.click();
            browser.pause(2000)
        }
        
        this.addToCart.click();
        this.proceedToCheckout.click();
        return orderPage;
    }   
}
module.exports = new productDetailPage();