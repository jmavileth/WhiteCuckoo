class orderPage {
    get productsList() {
        return $$("//tbody//td[@class='cart_product']/a")
    }
    
    //actions
    isProductDisplayed(productId) {
        productId="id_product="+productId;
        for(let i=0;i<=this.productsList.length-1;i++) {
            const href = this.productsList[i].getAttribute("href");
            if(href.includes(productId)){
                return true;
            }
        }
        return false;
    }
    
    deleteSelectedProduct(productId){
        this.isProductDisplayed(productId);
        let xpath = "//tr[@id='product_"+productId+"_13_0_332777']//i[@class='icon-trash']";
        $(xpath).click();
    }
}
module.exports = new orderPage();