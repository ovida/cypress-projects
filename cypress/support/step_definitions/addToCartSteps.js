import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Then ('I should see the cart badge with \"1\"', () => {
    cy.get('[data-test="shopping-cart-badge"]').contains('1');
});

Then ('the Add to Cart button for the product should change to remove', () =>{
    cy.get('[data-test="remove-sauce-labs-backpack"]').contains("Remove");
});

Given ('I click on a product, I go to product overview page', () => {
    cy.get('[data-test="item-0-title-link"] > [data-test="inventory-item-name"]').click();
});

Then('the cart badge shouldnt display number', () => {
    cy.get('[data-test="shopping-cart-badge"]').should('not.exist');
});