/// <reference types="Cypress" />
import { AdminPages } from "../support/PageObjects/AdminPages"
import { UserManagement } from "../support/PageObjects/UserManagement"
describe.skip('Admin pages testing', function(){
    let Admin=new AdminPages()
    
    before(function(){
        cy.login('akhilkalluri','Testing123')
    })

    beforeEach(function(){
        cy.fixture('testdata').as('data').then( (data)=>{
           
           this.data=data
            
            

        })
    })

// successful addition of Managed items
it('addition of managed items', function(){
Admin.Link_AppAdmin().click()
Admin.Link_ManagedItems().click()
cy.scrollTo('bottom')
cy.wait(2000)
      Admin.Card_InventoryAccounts().trigger('mouseover')
      Admin.Button_AddInventory().click()
      
      Admin.Input_InventoryAccounts().type(this.data.InputInventory)
     
      Admin.Button_SaveInventory().click()
      cy.get('.toast-message')
    .should('be.visible')
    .and('have.text', 'Inventory Accounts Updated Successfully!')
    cy.scrollTo('top')
    cy.wait(2000)
})

// updating and saving export settings
it('updating/saving export settings',function(){
    
   
    Admin.Link_ExportSettings().click()
    cy.scrollTo(0,300)
    Admin.Input_PreorderMemo().trigger('mouseover').click().clear().type('order')
    cy.scrollTo('bottom')
    cy.wait(2000)
    Admin.Button_SaveExportSettings().click()
    cy.logout()

})

})