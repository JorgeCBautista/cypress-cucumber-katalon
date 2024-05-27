import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import loginPage from "../pages/login-page";

Given("I enter on CURA Healthcare Service web page", () => {
    loginPage.openLoginPage();
    cy.wait(1000);
  });

  When("I click on the dropdown menu", () => {
    loginPage.clickMenuDropdownButton();
    cy.wait(300);
  });

  And("I click on the Login submenu", () => {
    loginPage.clickSubMenuLogin();
    cy.wait(300);
  });

  And("I write my username {string} and my Password {string}", (username,password) => {
    loginPage.writeCredentials(username,password);
  });

  And("I click on the Login button", () => {
    loginPage.clickLoginButton();
  });

  Then("I see Make Appointment section", () => {
    loginPage.showSectionAppointment();
  });


  And("I click on the Logout submenu", () => {
    loginPage.clickMenuDropdownButton();
    loginPage.clickSubMenuLogout();
    cy.wait(300);
  });

  Then("I see the principal page", () => {
    loginPage.showPrincipalPage();
  });

  Given("I logging with my credentials {string} and {string}", (usernameL,passwordL) => {
    loginPage.loggingFast(usernameL,passwordL);
    loginPage.clickLoginButton();
  });