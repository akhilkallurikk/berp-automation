/// <reference types="cypress-xpath"/>
import{InventoryManagement} from '../support/PageObjects/InventoryManagement'
describe('Testing Inventory management pages', function(){
    let im = new InventoryManagement()
    before(function(){
        cy.login('akhilkalluri','Testing123')
    })
    beforeEach(function(){
        
        Cypress.Cookies.preserveOnce('session_id', 'remember_token')
        cy.fixture('testdata.json').then( (fdata)=>{
           
           this.data=fdata  

        })
    })

    it('Addition of Managed Order', function(){
        im.Link_InventoryManagement().click()
        im.Link_ManageOrders().click()
        cy.wait(2000)
        im.BtnAdd_Order().click()
        cy.wait(2000)
        im.ListOrder_Venue().select(this.data.VenueName)
        im.ListOrder_Vendor().select(this.data.vendorName)
        im.InputOrder_good().clear().type('5')
        im.BtnSave_Order().click()
        cy.wait(4000)
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

    it('Deletion of Managed order before posting', function(){
       
        im.Link_ManageOrders().click()
        cy.wait(2000)
        im.BtnAdd_Order().click()
        cy.wait(2000)
        im.ListOrder_Venue().select(this.data.VenueName)
        im.ListOrder_Vendor().select(this.data.vendorName)
        im.InputOrder_good().clear().type('5')
        im.BtnSave_Order().click()
        cy.wait(4000)
        cy.get('.toast-message')
    .should('be.visible')
    .and('have.text', 'Order Created Successfully')
    cy.wait(1000)
    cy.get('.btn-danger').click()
    cy.wait(2000)
    cy.get('body.skin-blue.ng-scope.sidebar-open.sidebar-mini.ngdialog-open:nth-child(2) div.ngdialog.ngdialog-theme-default.ng-scope:nth-child(5) div.ngdialog-content div.ngdialog-buttons:nth-child(3) > button.ngdialog-button.btn-danger.ng-binding:nth-child(2)').click()
    cy.get('.toast-message')
    .should('be.visible')
    .and('have.text', 'Received Order Deleted')
    })

    it('Inventory transfer', function(){
      
        im.Link_InventoryTransfers().click()
        cy.wait(2000)
        im.BtnAdd_Order().click()
        cy.wait(2000)
        cy.xpath('//body/div[1]/div[2]/div[1]/ui-view[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/span[1]').click()
        cy.xpath('//body/div[1]/div[2]/div[1]/ui-view[1]/div[2]/div[1]/div[1]/div[1]/div[1]/ul[1]/li[1]/div[6]/a[1]/div[1]/span[1]').click()
        cy.xpath('//body/div[1]/div[2]/div[1]/ui-view[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/span[1]').click()
        cy.xpath('//body/div[1]/div[2]/div[1]/ui-view[1]/div[2]/div[1]/div[2]/div[1]/div[1]/ul[1]/li[1]/div[7]/a[1]/div[1]/span[2]').click()
        cy.xpath('//tbody/tr[2]/td[3]/div[1]/input[1]').click().clear().type(5)
        cy.get('.btn-success').click()
        cy.wait(3000)
        cy.get('.toast-message')
        .should('be.visible')
        .and('have.text', 'Transfer Created Successfully')
        cy.logout()
    })


})