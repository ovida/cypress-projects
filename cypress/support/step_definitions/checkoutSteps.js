import {When, Then, DataTable} from "@badeball/cypress-cucumber-preprocessor"

const fieldSelectors = {
    "First Name": '[data-test="firstName"]',
    "Last Name" : '[data-test="lastName"]',
    "Postal Code" : '[data-test="postalCode"]'
}

When('I fill in the below information', (DataTable) => {
    const data = DataTable.rowsHash();
    for (const field in data) {
        const value = data[field];
        const selector = fieldSelectors[field];
        cy.get(selector).type(value);
    }
})

Then('I get a message {string}', (message) => {
    cy.get('[data-test="complete-header"]').should('contain', message);
  });

Then('I see a Back Home button', () =>{
    cy.get('button').should('contain', 'Back Home')
});  

Then('I should see a error message {string}', (errormessage) => {
    cy.get(`.error-message-container`).should('contain', errormessage);
});  