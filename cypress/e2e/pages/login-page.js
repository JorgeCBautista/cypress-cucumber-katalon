class loginPage {
    elements = {
        menuDropdownButton: () => cy.get('#menu-toggle'),
        subMenu: () => cy.get('ul.sidebar-nav li a'),
        inputUsername: () => cy.get('#txt-username'),
        inputPassword: () => cy.get('#txt-password'),
        loginButton: () => cy.get('[type="submit"]'),
        textMakeAppointment: () => cy.get('.col-sm-12.text-center h2')
    }


    openLoginPage(){
        cy.visit("/");
    }

    clickMenuDropdownButton(){
        this.elements.menuDropdownButton().should('be.visible').click();
    }

    clickSubMenuLogin(){
        cy.wait(200)
        this.elements.subMenu()
                     .eq(2)
                     .should('have.text', 'Login')
                     .click();
        cy.url().should("include", "/profile.php#login");
    }

    writeCredentials(username,password){
        this.elements.inputUsername()
                     .should('be.visible')
                     .type(username,{ delay: 200 })

        this.elements.inputPassword()
                     .should('be.visible')
                     .type(password,{ delay: 100 })
    }

    clickLoginButton(){
        this.elements.loginButton().should('be.visible').click();
    }

    showSectionAppointment(){
        cy.wait(200)
        this.elements.textMakeAppointment()
                     .should('have.text', 'Make Appointment')
                     .click();
        cy.url().should("include", "/#appointment");   
    }

    clickSubMenuLogout(){
        cy.wait(200)
        this.elements.menuDropdownButton().should('be.visible').click(); 
        cy.url().should("include", "/#appointment");
        this.elements.subMenu()
                     .eq(4)
                     .should('have.text', 'Logout')
                     .click({force: true});
    }

    showPrincipalPage(){
        const expectedUrl = Cypress.config('baseUrl');
        cy.wait(200)
        cy.url().should('eq', expectedUrl);
    }

    loggingFast(usernameL,passwordL){
        cy.visit("/");
        this.elements.menuDropdownButton().should('be.visible').click();
        this.elements.subMenu()
                     .eq(2)
                     .should('have.text', 'Login')
                     .click();
        this.elements.inputUsername()
                     .should('be.visible')
                     .type(usernameL)

        this.elements.inputPassword()
                     .should('be.visible')
                     .type(passwordL)
    }

    clickSubMenuHistory(){
        this.elements.menuDropdownButton().should('be.visible').click();
        this.elements.subMenu().eq(2).click();
    }
}
export default new loginPage();