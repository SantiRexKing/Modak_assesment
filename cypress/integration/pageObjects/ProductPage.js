class ProductPage {

    constructor () {
        this.paginationItem2 = '.comet-pagination-item-2 > a';
        this.hoverProduct = '.multi--similar--eFkEW53.rcmd-hover-more-action';
        this.buttonPrevi = 'span.multi--btn--3bWs9_p[title="Previsualizar"]';
        this.buttonAddToCart = 'button.comet-v2-btn.comet-v2-btn-primary.comet-v2-btn-large.add-to-cart--addtocart--RXmuNXk.comet-v2-btn-important';
        this.buttonCheckout = 'button.comet-v2-btn.comet-v2-btn-primary.comet-v2-btn-block.cart-summary-button.comet-v2-btn-important';
    }

    verifyUrlContains(text) {
        cy.url().should('include', text);
    }

    goToSecondPage() {
        cy.get(this.paginationItem2).scrollIntoView().wait(1000).click();
        cy.wait(3000);
    }

    previewSecondProduct() {
        cy.get(this.hoverProduct).eq(1).invoke('attr', 'style', 'display: block !important');
        cy.get(this.buttonPrevi).eq(1).trigger('mouseover').wait(2000).click({ force: true });
    }

    addToCart() {
        cy.get(this.buttonAddToCart).wait(2000).click();
    }

    proceedToCheckout() {
        cy.get(this.buttonCheckout).should('be.visible').click();
        cy.contains('Inicia sesión').should('be.visible');
    }
}

export default ProductPage;
