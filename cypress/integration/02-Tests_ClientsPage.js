/// <reference types="Cypress" />
import { ClientPage } from '../support/PageObjects/ClientPage'
import { UserManagement } from "../support/PageObjects/UserManagement"

describe('client pages test', function(){
    let clientpage=new ClientPage()
let log = new UserManagement()
    before(function(){
        
        cy.login('akhilkalluri','Testing123')
       
        
    })

    beforeEach(function(){
        cy.fixture('testdata').as('data').then( (data)=>{
           
           this.data=data
            
            

        })
    })

   

  
// TC - Successful addition of client

it('client creation', function(){
    
    
clientpage.AddButton().click()
clientpage.NameField().type(this.data.Client_Name)
clientpage.DescriptiionField().type(this.data.Client_Description)
clientpage.ClientType().select(this.data.clientType)
clientpage.createButton().click()
cy.wait(2000)
clientpage.clientHeaderName().contains(this.data.Client_Name)
    
})

// TC - Successful addition of venues to client

it('venues creation', function(){
clientpage.VenueSeeAll().click()
clientpage.VenueAddButton().click()
cy.wait(2000)
clientpage.VenueName().type(this.data.VenueName)
clientpage.venueTax().select(this.data.VenueTaxRate)
clientpage.VenueCreateButton().click()
cy.wait(1000)
clientpage.VenueHeaderName().contains(this.data.VenueName)

})

// TC - Successful addition of theatre

it('creation of theatre',function(){

   
    clientpage.TheatreSeeAllButton().click()
    clientpage.TheatreAddButton().click()
    cy.wait(2000)
    clientpage.TheatreName().type(this.data.TheatreName)
    clientpage.TheatreQBName().type(this.data.TheatreQBName)
    clientpage.TheatreQBClassName().type(this.data.TheatreQBClassName)
    clientpage.TheatrecreateButton().click()
    clientpage.TheatreHeaderName().contains(this.data.TheatreName)
})

// TC - Successful creation of SalesLocation
it('creation of sales location', function(){
    
clientpage.SalesSeeAll().click()
clientpage.salesAddButton().click()
cy.wait(2000)
clientpage.SalesName().type(this.data.salesName)
clientpage.salescreateButton().click()
clientpage.saleHeaderName().contains(this.data.salesName)
log.LogoutToggle().click()
log.Button_Logout().click()
})
})