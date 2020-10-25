describe('Open Site', () => {
    it('test', () => {
        //   cy.visit()
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Layouts').click()

    })
    it('inline Form', () => {
        cy.get('[placeholder="Jane Doe"]').type('Ahmad Falah Sabila')
        cy.get('[type="text"][placeholder="Email"]')
            .type('falahahmad883@gmail.com')
        cy.contains('Remember me').first().click()
        // cy.contains('Inline form').get('[class="custom-checkbox"]').should('be.checked')
    });

    it('using the Grid', () => {
        cy.get('[data-cy="imputEmail1"]').type('falahahmad883@gmail.com')
        cy.get('#inputPassword2').type('falahhh')
        cy.contains('Option 1').click()
        // cy.contains('Option 2').click()

    });
    
    it('Basic Form', () => {
        cy.get('#exampleInputEmail1').type('falahahmad883@gmail.com')
        cy.get('#exampleInputPassword1').type('falahhh')
        cy.contains('Check me out').click()
    });

    it('Form without labels', () => {
        cy.get('[placeholder="Recipients"]').type('Falah')
        cy.get('[placeholder="Subject"]').type('Ahmad')
        cy.get('[placeholder="Message"]').type('Sabila')
    });

    it('Block Form', () => {
        cy.get('#inputFirstName').type('Falah')
        cy.get('#inputLastName').type('Ahmad')
        cy.get('#inputEmail').type('falahahmad883@gmail.com')
        cy.contains('Website').type('hndr91.github.io/demo-ui/')
    });

    it('Horizontal Form', () => {
        cy.get('#inputEmail3').type('falahahmad883@gmail.com')
        cy.get('#inputPassword3').type('falahhh')
        cy.get('.custom-checkbox').last().click()
    });
})