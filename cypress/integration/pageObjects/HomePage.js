class HomePage {
    visit() {
        cy.visit('/');
        this.closePopupIfVisible();
    }

    closePopupIfVisible() {
        cy.get('body').then(($body) => {
            if ($body.find('.pop-close-btn').length) {
                cy.get ('.pop-close-btn').click({force: true});
            }
        });
    }

    searchForProduct(productName) {
         cy.get('.search--keyword--15P08Ji').click({force: true}).clear().type(productName);
         cy.get('.search--submit--2VTbd-T').click({ force: true });
    }
}

export default HomePage;