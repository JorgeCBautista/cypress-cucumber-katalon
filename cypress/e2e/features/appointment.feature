Feature: Complete the Appoinment form

        Scenario: Complete form about Facility
            Given I logging with my credentials "John Doe" and "ThisIsNotAPassword"
             When I select "Hongkong CURA Healthcare Center"
              And I select for apply for hospital readmission
              And I select the option for Medicaid
              And I select the visit date "11/11/2025"
              And I write "Necesito una revisión medica por favor"
              And I click on the button Book Appoinment
             Then I should see the Appointment Confirmation
                  | facility                        | apply | program  | date       | comment                                |
                  | Hongkong CURA Healthcare Center | Yes   | Medicaid | 11/11/2025 | Necesito una revisión medica por favor |

        Scenario: Complete form and see on the history
            Given I logging with my credentials "John Doe" and "ThisIsNotAPassword"
             When I select "Seoul CURA Healthcare Center"
              And I select for apply for hospital readmission
              And I select the option for Medicaid
              And I select the visit date "22/04/2027"
              And I write "Pido reservar mi cita para otra ocasión"
              And I click on the button Book Appoinment
              And I click on the button Go to Homepage
              And I click on the History submenu
             Then I should see the Appointment Confirmation on History Page
                  | facility                     | apply | program  | comment                                 |
                  | Seoul CURA Healthcare Center | Yes   | Medicaid | Pido reservar mi cita para otra ocasión |