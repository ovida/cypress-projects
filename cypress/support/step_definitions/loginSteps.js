import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I visit the login page", () => {
    cy.visit("https://www.saucedemo.com/");
});

When ("I enter a valid username and password", () => {
    cy.get('input[data-test="username"]').type("standard_user");
    cy.get('input[data-test="password"]').type("secret_sauce");
    cy.get('input[data-test="login-button"]').click();

});

Then ("I should see a welcome message", () => {
    cy.get('.app_logo').contains('Swag Labs');

});

When ("I enter a invalid username and password", () => {
    cy.get('input[data-test="username"] ').type("admin");
    cy.get('input[data-test="password"]').type("secret_sauce");
    cy.get('input[data-test="login-button"]').click();
});

Then ("I should see an error message", () => {
    cy.get('h3').contains("Epic sadface: Username and password do not match any user in this service")
});
