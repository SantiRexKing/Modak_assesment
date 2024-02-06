class ProductPage {
    verifyUrlContains(text) {
        cy.url().should('include', text);
    }

    goToSecondPage() {
        cy.get('.comet-pagination-item-2 > a').scrollIntoView().wait(1000).click();
        cy.wait(3000);
    }

    previewSecondProduct() {
        cy.get('.multi--similar--eFkEW53.rcmd-hover-more-action').eq(1).invoke('attr', 'style', 'display: block !important');
        cy.get('span.multi--btn--3bWs9_p[title="Previsualizar"]').eq(1).trigger('mouseover').wait(2000).click({ force: true });
    }

    addToCart() {
        cy.get('button.comet-v2-btn.comet-v2-btn-primary.comet-v2-btn-large.add-to-cart--addtocart--RXmuNXk.comet-v2-btn-important').wait(2000).click();
    }

    proceedToCheckout() {
        cy.get('button.comet-v2-btn.comet-v2-btn-primary.comet-v2-btn-block.cart-summary-button.comet-v2-btn-important').should('be.visible').click();
        cy.contains('Inicia sesión').should('be.visible');
    }
}

export default ProductPage;
