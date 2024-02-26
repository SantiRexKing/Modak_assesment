import HomePage from '../pageObjects/HomePage';
import ProductPage from '../pageObjects/ProductPage';

describe('Product Search and Add to Cart Test', () => {
    const homePage = new HomePage();
    const productPage = new ProductPage();
    

    it('should search for a product, preview it, add to cart, and proceed to checkout', () => {
        homePage.visit();
        homePage.searchForProduct('instax mini');
        productPage.verifyUrlContains('/wholesale-instax-mini');
        productPage.goToSecondPage();
        productPage.previewSecondProduct();
        productPage.addToCart();
        productPage.proceedToCheckout();
    });
});
