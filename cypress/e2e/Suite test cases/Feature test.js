
describe("first try",() => {
    beforeEach(() => {
        cy.visit('/',{
            onBeforeLoad:(contentWindow) => {
            },
        });
        cy.intercept({resourceType: /xhr|fetch/}, {log: false});
        });
        Cypress.on('uncaught:exception', (err, runnable) => {
            
            return false;
          });
        it('close the pop up', () => {
        
        cy.wait(10000)
        .then(() => {
        cy.get('.pop-close-btn').then(($btn) => {
            if ($btn.is(':visible')) {
                $btn.click({force: true});
            }
        });
        cy.get ('.pc-header--logoImg--mDbiT4k').should('be.visible');
        cy.get ('.search--keyword--15P08Ji').click({force: true}).clear().type("instax mini");
        cy.get ('.search--submit--2VTbd-T').click({force: true});
        cy.url().should('include', '/wholesale-instax-mini');
        cy.get('a[data-spm-anchor-id="a2g0o.productlist.0.0"]').scrollIntoView().click();
        cy.get ('.multi--titleText--nXeOvyr').click();
    });
});
});