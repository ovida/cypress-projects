import { Given, When, And} from "@badeball/cypress-cucumber-preprocessor";

const buttons = {
    "Checkout" : "checkout",
    "Continue" : "continue",
    "Finish" : "finish",
    "Add to cart": "add-to-cart",
    "Continue Shopping" :"continue-shopping",
    "Remove": "remove-sauce-labs-backpack"
}
Given ("I am logged in", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get('input[data-test="username"]').type("standard_user");
    cy.get('input[data-test="password"]').type("secret_sauce");
    cy.get('input[data-test="login-button"]').click();
});

When ('I add a product to the cart', () =>{
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click(); 
});

When("I go to the cart", () => {
    cy.get(`[data-test="shopping-cart-link"]`).click();
});

When('I click on {string} button', (buttonText) => {
    const id = buttons[buttonText]
    cy.get(`[data-test="${id}"]`).click();
})
