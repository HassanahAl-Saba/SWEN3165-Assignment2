
context('Calculator tests with Cypress', function (){
    describe('Calculator tests', function (){
        beforeEach(()=>{
            cy.visit("../../index.html");
        })
        it('should add 7 and 8', () => {
            //add function
            // cy.get('button[id="seven"]').should('contain','7').click()
            cy.get("button[value='7']").should('contain','7').click()
            cy.get("button[value='+']").should('contain',"+").click()
            cy.get("button[value='8']").should('contain','8').click()
            cy.get("button[value='=']").should('contain','=').click()
            cy.get(".display").should('have.value','15')
        });

        it('should subtract 3 and 1', () => {
            //add function
            // cy.get('button[id="seven"]').should('contain','7').click()
            cy.get("button[value='3']").should('contain','3').click()
            cy.get("button[value='-']").should('contain',"-").click()
            cy.get("button[value='1']").should('contain','1').click()
            cy.get("button[value='=']").should('contain','=').click()
            cy.get(".display").should('have.value','2')
        });

        it('should multiply 3 by 1', () => {
            //add function
            // cy.get('button[id="seven"]').should('contain','7').click()
            cy.get("button[value='3']").should('contain','3').click()
            cy.get("button[value='*']").should('contain',"*").click()
            cy.get("button[value='1']").should('contain','1').click()
            cy.get("button[value='=']").should('contain','=').click()
            cy.get(".display").should('have.value','3')
        });

        it('should divide 3 by 1', () => {
            //add function
            // cy.get('button[id="seven"]').should('contain','7').click()
            cy.get("button[value='3']").should('contain','3').click()
            cy.get("button[value='/']").should('contain',"/").click()
            cy.get("button[value='1']").should('contain','1').click()
            cy.get("button[value='=']").should('contain','=').click()
            cy.get(".display").should('have.value','3')
        });
    })

})

    