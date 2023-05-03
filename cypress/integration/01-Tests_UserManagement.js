import { UserManagement } from "../support/PageObjects/UserManagement"
import { ClientPage } from '../support/PageObjects/ClientPage'
/// <reference types="cypress-xpath"/>

describe.skip('Testing users Management', function(){

    let clientpage=new ClientPage()
    let UserM= new UserManagement()
    before(function(){
        cy.login('akhilkalluri','Testing123')
    })

    beforeEach(function(){
        
        Cypress.Cookies.preserveOnce('session_id', 'remember_token')
        cy.fixture('testdata').as('data').then( (data)=>{
           
           this.data=data
            
            

        })
    })

   

    //  successful creation of a POS User
    it.skip('creation of PosUser', function(){

        UserM.Link_UserManagement().click()
        UserM.Link_POSUsers().click()
        cy.wait(2000)
        UserM.Button_UserAdd().click()
        UserM.input_POSFirstName().type(this.data.PosFirstName)
        UserM.input_POSLastName().type(this.data.PosLastName)
        UserM.input_POSUserName().type(this.data.PosUserName)
        UserM.input_POSPin().type(this.data.PosPin)
        UserM.Button_CreatePOS().click()
        cy.wait(2000)
        cy.get('.toast-message')
        .should('be.visible')
        .and('have.text', 'PosUser Created Successfully')
    
    })
// successful creation of user role
it('creating user role',function(){
   // UserM.Link_UserManagement().click()
    UserM.Link_UserRoles().click()
    cy.wait(2000)
    UserM.Button_UserAdd().click()
    UserM.Input_UserRoleName().type(this.data.UserRoleName)
    UserM.Button_UserCreate().click()
    cy.get('.toast-message')
    .should('be.visible')
    .and('have.text', 'Role Created Successfully')
    
})
//
// assigning permissions to user role
it('user role permissions',function(){

    cy.contains('Application Settings Access').trigger('mouseover')
    UserM.EditPermissions_ApplicationSettings().click()
    UserM.ApplicationSettings_FullAccess().click()
    cy.wait(2000)
    cy.contains('Clients Access')
    .trigger('mouseover')
    UserM.EditPermissions_ClientAccess().click()
    UserM.clientAccess_Full().click()
    cy.scrollTo(0,2000)
    UserM.Button_saveRole().click()
    cy.get('.toast-message')
    .should('be.visible')
    .and('have.text', 'Role Saved Successfully')

})

// successful creation of user with user role created
it('user creation',function(){
    
    UserM.Link_UsersPage().click()
    cy.wait(2000)
    UserM.Button_UserAdd().click()
    UserM.User_FirstName().type(this.data.UserFirstName)
    UserM.User_LastName().type(this.data.UserLastName)
    UserM.User_Email().type(this.data.UserEmail+'@gmail.com')
    UserM.User_UserName().type(this.data.createUserName)
    UserM.User_Password().type(this.data.UserPassword)
    UserM.User_ConfirmPass().type(this.data.UserPassword)
    UserM.User_UserRole()
    .select(this.data.UserRoleName)
    UserM.Button_UserCreate().click()
    cy.get('.toast-message')
    .should('be.visible')
    .and('have.text', 'User Created Successfully')
})



// user should not be able to login with "Automatically whitelist" as NO
it('user cannot login with whitelist as NO',function(){
    UserM.LogoutToggle().click()
    UserM.Button_Logout().click()
    cy.visit('https://berp.staging.milesapp.com/#/login')
    cy.get(':nth-child(1) > .form-control').type(this.data.createUserName)
    cy.get(':nth-child(2) > .form-control').type(this.data.UserPassword)
    cy.get('.btn').click()
    cy.get('.toast-message').contains('You cannot access this site from your current IP address')
})

// user should be able to login with "Automatically whitelist" as Yes
it('user should login with whitelist as Yes',function(){
    cy.reload()
    cy.login('akhilkalluri','Testing123')
    UserM.Link_UserManagement().click()
    UserM.Link_UsersPage().click()
    cy.wait(2000)
    cy.get('#input').type(this.data.UserFirstName+' '+this.data.UserLastName)
   cy.wait(2000)
    cy.xpath('//tbody/tr[1]/td[1]').trigger('click')
    cy.get('user-portal-access-component.ng-isolate-scope > .miles-editable').trigger('mouseover')
    cy.get('user-portal-access-component.ng-isolate-scope > .miles-editable > h4 > .pull-right > .fa').click()
    cy.get('#automaticallywhitelist').click()
    cy.get(':nth-child(4) > .btn-success').click()
    cy.get('.toast-message')
     .should('be.visible')
     .and('have.text', 'User Saved Successfully')
     UserM.LogoutToggle().click()
     UserM.Button_Logout().click()
    cy.get(':nth-child(1) > .form-control').type(this.data.createUserName)
    cy.get(':nth-child(2) > .form-control').type(this.data.UserPassword)
    cy.get('.btn').click()
    cy.title().should('eq','BERP - Manage Clients')
    cy.screenshot()
    

  
 
})

// updating user info
it('successfully updating user info', function(){
    cy.get('.info > a').click()
cy.xpath('//body/div[1]/div[2]/div[1]/ui-view[1]/div[2]/div[1]/div[1]/user-basic-info-component[1]/div[1]').trigger('mouseover')
cy.xpath('//body/div[1]/div[2]/div[1]/ui-view[1]/div[2]/div[1]/div[1]/user-basic-info-component[1]/div[1]/h4[1]/span[1]/i[1]').click()
UserM.User_FirstName().trigger('mouseover').click().clear().type(this.data.UserFirstName+'test')
UserM.User_LastName().trigger('mouseover').click().clear().type(this.data.UserLastName+'T')
UserM.User_Email().trigger('mouseover').click().clear().type(this.data.UserEmail+'test'+'@gmail.com')
cy.xpath('//body/div[1]/div[2]/div[1]/ui-view[1]/div[2]/div[1]/div[1]/user-basic-info-component[1]/form[1]/button[1]').click()
cy.get('.toast-message')
.should('be.visible')
.and('have.text', 'User Saved Successfully')
UserM.LogoutToggle().click()
      UserM.Button_Logout().click()
})




})