Feature: Checkout process

Scenario: User completes the checkout process successfully
Given I am logged in
And I add a product to the cart
When I go to the cart
And I click on "Checkout" button
And I fill in the below information
| First Name        | Tom    |
| Last Name         | Harris |
| Postal Code   | 21345  |
And I click on "Continue" button
And I click on "Finish" button
Then I get a message "Thank you for your order!"
And I see a Back Home button

Scenario: User tries to checkout with empty firstName field
Given I am logged in
And I add a product to the cart
When I go to the cart
And I click on "Checkout" button
And I fill in the below information
| Last Name         | Harris |
| Postal Code   | 21345  |
And I click on "Continue" button
Then I should see a error message "Error: First Name is required"