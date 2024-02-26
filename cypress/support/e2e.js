Cypress.on('uncaught:exception', (err, runnable) => {
   
    if (err.message.includes('ResizeObserver loop limit exceeded') || err.message.includes('ResizeObserver loop completed with undelivered notifications')) {
        return false; 
    }
   
    return true;
});


require('./commands'); 

import 'cypress-mochawesome-reporter/register';
