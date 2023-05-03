/// <reference types="Cypress" />

import { InventoryManagement } from "../support/PageObjects/InventoryManagement"
import { ProductManagement } from "../support/PageObjects/ProductManagement"
import { ShowManagement } from "../support/PageObjects/ShowManagement"

describe('data cleaning', function(){
    let sm=new ShowManagement()
    let im=new InventoryManagement()
    let pm=new ProductManagement()
    
    before(function(){
        cy.login('akhilkalluri','Testing123')
    })
    beforeEach(function(){
        
        Cypress.Cookies.preserveOnce('session_id', 'remember_token')
        cy.fixture('testdata.json').then( (fdata)=>{
           
           this.data=fdata           
        })
    })

    it('deleting Menu created', function(){

        pm.Link_ProductManagement().click()
        pm.Link_Menu().click()
        cy.wait(2000)
        pm.SearchBar_Menu().type(this.data.CreateMenu_Name)
        cy.wait(1000)
        cy.scrollTo('bottom')
        pm.BtnMenu_Delete().click()
        cy.wait(1000)
        pm.BtnMenu_ConfirmDelete().click()


    })

    it('deleting created kit', function(){
        pm.Link_kits().click()
        cy.wait(2000)
        pm.SearchBar_Menu().type(this.data.CreateKit_Name)
        cy.wait(1000)
        pm.BtnMenu_Delete().click()
        cy.wait(1000)
        pm.BtnMenu_ConfirmDelete().click()
    })

    it('deleting created Good', function(){
        pm.Link_Goods().click()
        cy.wait(1000)
        pm.SearchBar_Menu().type(this.data.CreateGood_Name) 
        cy.wait(1000)
        pm.BtnMenu_Delete().click()
        cy.wait(1000)
        pm.BtnMenu_ConfirmDelete().click()
    })

    
})