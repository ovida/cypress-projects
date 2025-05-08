Feature: Login Functionality

Scenario: Successful Login with valid credentials
Given I visit the login page
When I enter a valid username and password
Then I should see a welcome message

Scenario: Unsuccessful login with invalid credentials
Given I visit the login page
When I enter a invalid username and password
Then I should see an error message