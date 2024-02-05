
describe("first test",() => {
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

        it('Test and select element', () => {
        
        cy.wait(2000)
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
        cy.get('.comet-pagination-item-2 > a').scrollIntoView().wait(1000).click();
        cy.wait(3000);
        cy.get('.multi--similar--eFkEW53.rcmd-hover-more-action').eq(1).invoke('attr', 'style', 'display: block !important');
        cy.get('span.multi--btn--3bWs9_p[title="Previsualizar"]')
        //cy.get('.multi--similar--eFkEW53.rcmd-hover-more-action')
        .eq(1)
        .trigger('mouseover') 
        .wait(2000)
        .should('be.visible')
        .click({force: true});

        //cy.get(':nth-child(2) > .multi--outWrapper--SeJ8lrF > .multi--container--1UZxxHY > .multi--image--2bIiWPB > .images--multiImage--25mi-3K > .images--hover--1N5tJXp').trigger('mouseover');
        //cy.get('span.multi--btn--3bWs9_p[data-spm-anchor-id="a2g0o.productlist.main.i1.49a82fd8TfOdtw"]')
        //.should('be.visible')
        //.invoke('removeAttr', 'target','_self')
        //.click();
    });
});
});