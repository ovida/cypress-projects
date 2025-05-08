Feature: Adding the product to the cart

Scenario: User is able to add a product to the cart from the products page
Given I am logged in
When I add a product to the cart
Then I should see the cart badge with "1"
And the Add to Cart button for the product should change to remove

Scenario: User is able to go into the desired product and add it to the cart
Given I am logged in
And I click on a product, I go to product overview page
When I click on "Add to cart" button
Then I should see the cart badge with "1"

Scenario: User should be able to remove the product from the cart
Given I am logged in
And I add a product to the cart
When I go to the cart
And I click on "Remove" button
Then the cart badge shouldnt display number