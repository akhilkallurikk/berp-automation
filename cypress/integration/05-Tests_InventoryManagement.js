/// <reference types="cypress-xpath"/>
import{InventoryManagement} from '../support/PageObjects/InventoryManagement'
import{ClientPage} from '../support/PageObjects/ClientPage'
describe('Testing Inventory management pages', function(){
    let im = new InventoryManagement()
    let cp = new ClientPage()
    before(function(){
        cy.login('akhilkalluri','Testing123')
    })
    beforeEach(function(){
        
        Cypress.Cookies.preserveOnce('session_id', 'remember_token')
        cy.fixture('testdata.json').then( (fdata)=>{
           
           this.data=fdata
            
            

        })
    })
 // addition of orders to venue
    it('addition of orders to Venue', function(){

        im.Link_InventoryManagement().click()
        im.Link_ManageOrders().click()
        cy.wait(2000)
        im.BtnAdd_Order().click()
        cy.wait(2000)
        im.ListOrder_Venue().select(this.data.VenueName)
        im.ListOrder_Vendor().select(this.data.vendorName)
        im.InputOrder_good().clear().type('1')
        im.BtnSave_Order().click()
        cy.get('.toast-message')
    .should('be.visible')
    .and('have.text', 'Order Created Successfully')
    cy.wait(1000)
    im.InputOrder_Ref().type(this.data.OrderReference)
    im.BtnOrder_post().click()
    cy.wait(2000)
    im.BtnPost_confirmation().click()
    

    cy.get('.toast-message')
    .should('be.visible')
    .and('have.text', 'Posted Successfully')

    })
    ///over riding of good quantities 
    it('good quantity can be overridden in inventory reconcilliation', function(){

        im.Link_InventoryReconcilliation().click()
        im.ListOrder_Venue().select(this.data.VenueName)
        im.InputReconcilliation_QTY().should('be.visible')
        cy.wait(1000)
        im.InputReconcilliation_QTY().click().clear()
        .type('5')
        im.InputReconcilliation_QTY().should('have.value','5')
        im.BtnReconcilliation_Next().click()
        cy.wait(2000)
        im.BtnReconcilliation_Save().click()
        cy.get('.toast-message')
    .should('be.visible')
    .and('have.text', 'Set Inventory Successfully!')
    })

    // goods transfer from venue to sales location
    it('inventory transfer from venue to sales location', function(){
        im.Link_InventoryTransfers().click()
        cy.wait(2000)
        im.BtnAdd_Order().click()
        im.DropDownInventoryTransfers_From().select(this.data.VenueName)
        cy.wait(2000)
        im.ListTrasfers_venues().select(this.data.VenueName)
        im.DropdownInventoryTransfer_To().select(this.data.salesName)
        cy.wait(2000)
        im.ListTransfers_salesLocation().select(this.data.salesName)
        im.InputTransfers_QTY().should('be.visible').click()
        cy.wait(1000)
        im.InputTransfers_QTY().click().clear().type('2')
        im.BtnSave_Order().click()
        cy.get('.toast-message')
        .should('be.visible')
        .and('have.text', 'Transfer Created Successfully')
    })

    // addition of menu to venue

    it.skip('adding menu to created venue', function(){

        cp.Link_clients().click()
       
        cp.InputSearch_clients().type(this.data.Client_Name)
        cy.wait(1000)
        cp.Btn_ClientTree().click()
        cy.get('span.pointer.nowrap.ng-binding').contains('Venue:'+' '+this.data.VenueName).click()
        cp.CardVenueP_Menu().trigger('mouseover')
        cp.BtnVenueP_EditMenu().click()
        cp.ListVenueP_SelectMenu().select(this.data.CreateMenu_Name)
        cp.BtnVenueP_SaveMenu().click()
        cy.get('.toast-message')
        .should('be.visible')
        .and('have.text', 'Venue Saved Successfully')
        cy.go('back')
        cy.wait(1000)
        cy.get('span.pointer.nowrap.ng-binding')
        .contains('Sales Location:'+' '+this.data.salesName).click()
        cp.CardSalesLocation_Menu().trigger('mouseover')
        cp.BtnSalesLocationP_editMenu().click()
        cp.CheckBoxSalesLocation_defaultMenu().click()
        cy.wait(1000)
        cp.BtnSalesLocation_SaveMenu().click()
        cy.get('.toast-message')
        .should('be.visible')
        .and('have.text', 'Sales Location Saved Successfully')
        cy.logout()
    })

  
     

})