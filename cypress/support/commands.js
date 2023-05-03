/// <reference types="cypress-xpath"/>

Cypress.Commands.add('login', (username,password)=>{
    cy.visit('https://berp.staging.milesapp.com/#/login')
    cy.get(':nth-child(1) > .form-control').type(username)
    cy.get(':nth-child(2) > .form-control').type(password)
    cy.get('.btn').click()
    
})

Cypress.Commands.add('logout',function(){
    cy.get('a.dropdown-toggle').click()
    cy.get('button.btn.btn-warning.btn-flat').click()
})

Cypress.Commands.add('qbologin',(username,password)=>{
cy.visit('https://app.sandbox.qbo.intuit.com/app/login?deeplinkcompanyid=4620816365177287280')
cy.get('#iux-identifier-first-international-email-user-id-input').type('akalluri@milestechnologies.com')
cy.get('div.app-shell div.shell-view div.main div.body-container div.body:nth-child(1) div.login-wrapper div.contentContainer div.rail-wrapper div.loginWidgetContainer div.iusWidgetContainer.noRightRail div.leftRail div.ius-sbg-style div.Bookends__StyledDiv-sc-163uul4-0.eLTIbB div.Bookends__NonStyledDiv-sc-163uul4-3.iIehHF div.styledComponents__StyledWidgetContainer-sc-12vb80e-14.styledComponents__BorderlessStyledWidgetContainer-sc-12vb80e-15.lcEcRk.hxcWHU.ius div.IdentifierFirstUnknown__StyledContainer-sc-1pqtykm-0.fOdUvC form.IdentifierFirstUnknown__StyledForm-sc-1pqtykm-1.khNNhu:nth-child(3) > button.Button-button-7f86796.Button-quickbooks-34bb65f.Button-light-fccd8cf.Button-size-large-4489b59.IuxButton__StyledButton-ktqsri-0.kYNrzU.Button-full-a35671c').click()
cy.wait(3000)
cy.get('#iux-password-confirmation-password').type('Akhil@k1')
cy.get('div.app-shell div.shell-view div.main div.body-container div.body:nth-child(1) div.login-wrapper div.contentContainer div.rail-wrapper div.loginWidgetContainer div.iusWidgetContainer.noRightRail div.leftRail div.ius-sbg-style div.Bookends__StyledDiv-sc-163uul4-0.eLTIbB div.Bookends__NonStyledDiv-sc-163uul4-3.iIehHF div.styledComponents__StyledWidgetContainer-sc-12vb80e-14.styledComponents__BorderlessStyledWidgetContainer-sc-12vb80e-15.lcEcRk.hxcWHU.ius div.PasswordVerification__StyledContainer-sc-1povxx4-0.dAnIHS form.IuxForm__StyledForm-sc-10pry6-0.kSwFFj > button.Button-button-7f86796.Button-quickbooks-34bb65f.Button-light-fccd8cf.Button-size-medium-345f4c3.IuxButton__StyledButton-ktqsri-0.kYNrzU.Button-full-a35671c:nth-child(6)').click()
})
