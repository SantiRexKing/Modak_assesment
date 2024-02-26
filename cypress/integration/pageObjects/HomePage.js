class HomePage {

    constructor() {
        this.popUp = '.pop-close-btn';
        this.searchInput = '.search--keyword--15P08Ji';
        this.buttonSearch = '.search--submit--2VTbd-T';
    } 

    visit() {
        cy.visit('/');
        this.closePopupIfVisible();
    }

    closePopupIfVisible() {
        cy.get('body').then(($body) => {
            if ($body.find(this.popUp).length) {
                cy.get (this.popUp).click({force: true});
            }
        });
    }

    searchForProduct(productName) {
         cy.get(this.searchInput).click({force: true}).clear().type(productName);
         cy.get(this.buttonSearch).click({ force: true });
    }
}

export default HomePage;