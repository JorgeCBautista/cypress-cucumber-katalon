Feature: Login on CURA Healthcare Service

        Scenario: Login with valid credentials
            Given I enter on CURA Healthcare Service web page
             When I click on the dropdown menu
              And I click on the Login submenu
              And I write my username "John Doe" and my Password "ThisIsNotAPassword"
              And I click on the Login button
             Then I see Make Appointment section

        Scenario: Logout from my account
            Given I enter on CURA Healthcare Service web page
             When I click on the dropdown menu
              And I click on the Login submenu
              And I write my username "John Doe" and my Password "ThisIsNotAPassword"
              And I click on the Login button
              And I click on the Logout submenu
             Then I see the principal page