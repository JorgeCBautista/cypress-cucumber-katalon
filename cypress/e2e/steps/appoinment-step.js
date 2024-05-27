import {When, And, Then } from "cypress-cucumber-preprocessor/steps";
import appoinmentPage from "../pages/appoinment-page";
import loginPage from "../pages/login-page";

When("I select {string}", (facility) => {
    appoinmentPage.selectFacility(facility)
  });

And("I select for apply for hospital readmission", () => {
    appoinmentPage.selectChecBox();
  });

  And("I select the option for Medicaid", () => {
    appoinmentPage.selectRadioButton();
  });

  And("I select the visit date {string}", (date) => {
    appoinmentPage.selectDate(date);
  });

  And("I write {string}", (description) => {
    appoinmentPage.writeComment(description);
  });

  And("I click on the button Book Appoinment", () => {
    appoinmentPage.clickButtonAppointment();
  });

  Then("I should see the Appointment Confirmation", (Datatable) => {
    appoinmentPage.appointmentConfirmation(Datatable);
  });

  And("I click on the button Go to Homepage", () => {
    appoinmentPage.clickGoToHomePage();
  });

  And("I click on the History submenu", () => {
    loginPage.clickSubMenuHistory();
  });

  Then("I should see the Appointment Confirmation on History Page", (Datatable) => {
    appoinmentPage.historyAppointmentConfirmation(Datatable);
  });

