let userdata;

Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('ResizeObserver loop completed with undelivered notifications')) {
        return false; 
    }
    return true;
});

describe("first try", function() {
    beforeEach(() => {
        cy.visit('/', {
            onBeforeLoad: (window) => {
              window.onload = null; // Trata de anular el evento de carga, aunque esto puede no ser efectivo para todos los casos de uso.
            }
        });
    });

    it('search the element in the page web', () => {
        cy.wait(20000); // Espera para asegurarse de que cualquier pop-up haya tenido tiempo de aparecer completamente.

        // Intenta cerrar el pop-up. Asegúrate de que el selector CSS es correcto.
        cy.get('.image-poplayer-modal .pop-close-btn').click({force: true});

        // Ahora procede con la búsqueda o cualquier otra acción que necesites realizar.
        // Asegúrate de tener el XPath correcto o usa un selector más simple si es posible.
        // cy.get('input[type="search"]._3vN3V').clear().type("instax mini");
        // Alternativamente, si necesitas usar XPath:
        // cy.xpath('//input[@type="search" and @class="_3vN3V"]').clear().type("instax mini");
    });
});
