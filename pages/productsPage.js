const productDetailPage = require('./productDetailPage.js')
class productsPage {
    get productsList(){
        return $$("//a[@class='product_img_link']")   
    }    
    
    
    //action
    
    clickOnProduct(productId){
        productId="id_product="+productId;
        for(let i=0;i<=this.productsList.length-1;i++) {
            const href = this.productsList[i].getAttribute("href");
            if(href.includes(productId)){
                browser.execute("arguments[0].click()", this.productsList[i]);
                break;
            }
        }
        return productDetailPage;
    }
}

module.exports = new productsPage();
