class appoinmentPage {
    elements = {
        comboFacility: () => cy.get('[name="facility"]'),
        checkApplyRead: () => cy.get('[name="hospital_readmission"]'),
        radioButton: () => cy.get('[name="programs"]'),
        datepicker:() => cy.get('.input-group.date'),
        comment:()=> cy.get('#txt_comment'),
        bookAppoinmentButton:()=> cy.get('[type="submit"]'),
        confirmationFacility:()=>cy.get('#facility'),
        confirmationApply:()=>cy.get('#hospital_readmission'),
        confirmationProgram:()=>cy.get('#program'),
        confirmationVisitDate:()=>cy.get('#visit_date'),
        confirmationComment:()=>cy.get('#comment'),
        buttonGoToHomePage:()=>cy.get('.btn.btn-default')
    }

    selectFacility(facility){
        this.elements.comboFacility().select(facility);
        this.elements.comboFacility()
                            .should('have.value', facility);
    }

    selectChecBox(){
        this.elements.checkApplyRead().click();
    }

    selectRadioButton(){
        this.elements.radioButton().eq(1).click();
    }

    selectDate(date){
    this.elements.datepicker().type(`${date}{esc}`);
    }

    writeComment(description){
        this.elements.comment().type(description);
    }

    clickButtonAppointment(){
        this.elements.bookAppoinmentButton().click();
    }

    appointmentConfirmation(Datatable){
        Datatable.hashes().forEach((row) => {
            this.elements.confirmationFacility().should('contain', row.facility);
            this.elements.confirmationApply().should('contain', row.apply);
            this.elements.confirmationProgram().should('contain', row.program);
            this.elements.confirmationVisitDate().should('contain', row.date);
            this.elements.confirmationComment().should('contain', row.comment);
          });
    }

    historyAppointmentConfirmation(Datatable){
        Datatable.hashes().forEach((row) => {
            this.elements.confirmationFacility().should('contain', row.facility);
            this.elements.confirmationApply().should('contain', row.apply);
            this.elements.confirmationProgram().should('contain', row.program);
            this.elements.confirmationComment().should('contain', row.comment);
          });
    }

    clickGoToHomePage(){
        this.elements.buttonGoToHomePage().click();
    }

}
export default new appoinmentPage();