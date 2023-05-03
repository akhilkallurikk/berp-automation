/// <reference types="Cypress" />
import { InventoryManagement } from '../support/PageObjects/InventoryManagement'
import{ShowManagement} from '../support/PageObjects/ShowManagement'
describe('Testing show management pages', function(){
    let sm=new ShowManagement()
    let im=new InventoryManagement()
    before(function(){
        cy.login('akhilkalluri','Testing123')
    })
    beforeEach(function(){
        
        Cypress.Cookies.preserveOnce('session_id', 'remember_token')
        cy.fixture('testdata.json').then( (fdata)=>{
           
           this.data=fdata           

        })
    })

    // creating a show

    it('creation of a show', function(){
        sm.Link_ShowManagement().click()
        sm.Link_Shows().click()
        cy.wait(2000)
        sm.Btn_AddShow().click()
        sm.Input_ShowName().type(this.data.showName)
        sm.Btn_CreateShow().click()
        cy.get('.toast-message')
    .should('be.visible')
    .and('have.text', 'Show Created Successfully')

    })

    // scheduling a show to created theatre
    it('successful scheduling of a show', function(){
        sm.Link_Schedule().click()
        sm.List_Theatres().select(this.data.TheatreName)
        sm.Slot_schedule().click()
        cy.wait(1000)
        sm.ListScheduleP_Show().select(this.data.showName)
        .should('be.visible')
        cy.scrollTo('bottom')
        sm.BtnSave_Schedule().click()
        cy.get('.toast-message')
        .should('be.visible')
        .and('have.text', 'Show Event Created Successfully')
    })

    // 
    it('copying to next week',function(){
        sm.Btn_CopytoNextWeek().click()
        cy.wait(2000)
        cy.get('.toast-message')
        .should('be.visible')
        .and('have.text', 'Week Copied Successfully')
    })

   // Managing sales manually

   it('Manage sales manually', function(){

    im.Link_ManageSales().click()
    im.ListManageSalesP_Venue().select(this.data.VenueName)
    cy.wait(1000)
    im.ListManageSalesP_SalesLocation().select(this.data.salesName)
    cy.wait(2000)
    im.DropdManageSales_kit().click()
    im.ListManageSalesP_Kit().select(this.data.CreateKit_Name)
    im.InputManagesales_Date().type('27/05/2022')
    im.ListManageSales_SelectShow().type(this.data.showName)
    im.ListManageSales_paymentType().select('Cash')
    im.BtnSave_ManageSales().click()
    

 })

    

})