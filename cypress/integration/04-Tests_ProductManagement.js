/// <reference types="cypress-xpath"/>
import{ProductManagement} from '../support/PageObjects/ProductManagement'
import {AdminPages} from '../support/PageObjects/AdminPages'
describe('Testing product management pages', function(){

    let Pm= new ProductManagement()
    let adminp= new AdminPages()
    before(function(){
        cy.login('akhilkalluri','Testing123')
    })
    beforeEach(function(){
        
        Cypress.Cookies.preserveOnce('session_id', 'remember_token')
        cy.fixture('testdata.json').then( (fdata)=>{
           
           this.data=fdata
            
            

        })
    })

    it('creation of vendor', function(){

        Pm.Link_ProductManagement().click()
        Pm.Link_Vendors().click()
        cy.wait(2000)
        Pm.Button_AddVendor().click()
        
        Pm.Input_VendorName().type(this.data.vendorName)
        Pm.Button_Create().click()
        cy.get('.toast-message')
    .should('be.visible')
    .and('have.text', 'Vendor Created Successfully')
    })

 // adding/removing goods to vendor

    it('adding/removing goods to vendor',function(){
        // Pm.Link_ProductManagement().click()
        // Pm.Link_Vendors().click()
        // cy.wait(2000)
        // cy.get('#input').type('Marc Amazon corporates')
        // cy.wait(2000)
        // cy.xpath('//tbody/tr[1]/td[1]').click()


       Pm.Card_GoodInfo().trigger('mouseover')
       Pm.Edit_GoodInfo().click()
       cy.wait(1000) 
       Pm.List_Available().select(this.data.good1)
       Pm.Arrow_MoveToSelected().click()            
       Pm.SaveBtn_GoodInfo().click()
       Pm.Card_GoodInfo().trigger('mouseover')
       Pm.Edit_GoodInfo().click()
       cy.get('.row > :nth-child(1) > .ng-valid').select(this.data.good2)
       Pm.Arrow_MoveToSelected().click()
       Pm.SaveBtn_GoodInfo().click()
       Pm.Card_GoodInfo().trigger('mouseover')
       Pm.Edit_GoodInfo().click()
       Pm.List_Selected().select(this.data.good1).should('be.visible')     
       Pm.Arrow_MoveToAvailable().click()      
       Pm.SaveBtn_GoodInfo().click()
       Pm.Card_GoodInfo().trigger('mouseover')
       Pm.Edit_GoodInfo().click()
       cy.get('.row > :nth-child(3) > .ng-valid')       
       .should('not.be.empty').select(this.data.good2).should('be.visible')
      // cy.get('.row > :nth-child(1) > .ng-valid').select(this.data.good1).should('be.visible')

    })
// vendor details should be available in assigned good detail page 
    it('verifying vendor detail in good details page', function(){

        Pm.Link_Goods().click()
        cy.wait(1000)
        Pm.Input_GoodsSearch().type(this.data.good2)
        cy.wait(2000)
        cy.get('body.skin-blue.ng-scope.sidebar-open.sidebar-mini:nth-child(2) div.wrapper:nth-child(1) div.container-fluid.content-wrapper div.ng-scope:nth-child(1) ui-view.ng-scope div.ng-scope:nth-child(2) table.table.table-hover.table-striped:nth-child(4) tbody:nth-child(2) > tr.ng-scope.ng-isolate-scope')
        .contains('td', this.data.good2)
        .click()
        cy.get('good-vendor-info-component.ng-isolate-scope > .miles-form > .btn').click()
        cy.wait(2000)
        cy.get('body.skin-blue.ng-scope.sidebar-open.sidebar-mini:nth-child(2) div.wrapper:nth-child(1) div.container-fluid.content-wrapper div.ng-scope:nth-child(1) ui-view.ng-scope div.ng-scope:nth-child(2) > table.table.table-hover.table-striped:nth-child(3)')
        .contains('td', this.data.vendorName)
        .should('be.visible')
    })
// items added in Managed items should be available while adding a good and good should be added successfully
    it('addition of Good', function(){
        
        adminp.Link_AppAdmin().click()
        adminp.Link_ManagedItems().click()
        cy.scrollTo('bottom')
        cy.wait(3000)
        adminp.Card_COGSAccount().trigger('mouseover')
        adminp.ButtonAdd_COGS().click()
        cy.wait(2000)
        adminp.Input_COGS().click().clear().type(this.data.InputCOGS)
        
        adminp.ButtonSave_COGS().click()
        adminp.Card_RevenueAccount().trigger('mouseover')
        adminp.ButtonAdd_Revenue().click()
        cy.wait(1000)
        adminp.Input_Revenue().type(this.data.InputRevenue)
        cy.wait(1000)
        adminp.ButtonSave_Revenue().click()
        // adminp.Card_InventoryAccounts().trigger('mouseover')
        // adminp.Button_AddInventory().click()
        // cy.wait(1000)
        // adminp.Input_InventoryAccounts().type(this.data.InputInventory)
        // cy.wait(1000)
       // adminp.Button_SaveInventory().click()
// link for product management should be removed when running all together
     
        Pm.Link_Goods().click()
        cy.wait(1000)
        Pm.BtnAdd_Goods().click()
        Pm.Input_GoodName().type(this.data.CreateGood_Name)
        Pm.ListGood_Category().select(this.data.CreateGood_Category)
        Pm.ListGood_ItemType().select(this.data.CreateGood_Itemtype)
        Pm.ListGood_RevenueType().select(this.data.InputRevenue)
        .should('be.visible')
        Pm.ListGood_COGSType().select(this.data.InputCOGS)
        .should('be.visible')
        Pm.ListGood_InventoryType().select(this.data.InputInventory)
        .should('be.visible')
        Pm.BtnCreate_Good().click()
        cy.get('.toast-message')
    .should('be.visible')
    .and('have.text', 'Good Created Successfully')
    })

    // updating cost for a Good in Update standard cost page

    it('update standard cost', function(){

        Pm.Link_updateStandardCost().click()
        cy.wait(2000)
        Pm.Input_searchUpdateSC().type(this.data.good2)
        cy.xpath('//body[1]/div[1]/div[2]/div[1]/ui-view[1]/div[2]/div[2]/div[1]/table[1]/tbody[1]/tr[1]/td[2]/div[1]/input[1]')
        .click().clear().type('15')
        Pm.BtnSave_updateStandardCost().click()
        cy.get('.toast-message')
    .should('be.visible')
    .and('have.text', 'Standard Costs for this page were successfully saved')
    })

    it('successful addition of kit', function(){
       Pm.Link_kits().click()
       cy.wait(1000)
       Pm.BtnAdd_Kits().click()
       Pm.Input_KitName().type(this.data.CreateKit_Name) 
       Pm.ListKit_AddCategory().select(this.data.CreateKit_Category)
       Pm.ListKit_GoodsAvailable().select(this.data.CreateGood_Name)
       Pm.ArrowKit_GoodsAvailable().click()
       Pm.BtnCreate_kit().click()
       cy.get('.toast-message')
    .should('be.visible')
    .and('have.text', 'Kit Created Successfully')
    })
    
    // all the goods and kits created should be available while creating a Menu
    it('addition of Menu', function(){

        Pm.Link_Menu().click()
        cy.wait(2000)
        Pm.BtnAdd_Menu().click()
        Pm.Input_MenuName().type(this.data.CreateMenu_Name)
        cy.wait(3000)
        Pm.ListManu_KitsAvailable().select(this.data.CreateKit_Name)
        Pm.BtnAddKit_Menu().click()
        Pm.BtnCreate_Menu().click()
        cy.get('.toast-message')
    .should('be.visible')
    .and('have.text', 'Menu Created Successfully')
        
        Pm.Card_MenuKitInfo().trigger('mouseover')
        Pm.BtnMenuEdit_Kitinfo().click()
        Pm.Btn_AddKitToAvailable().click()
        cy.wait(2000)
        Pm.InputMenuP_AddKitName().type(this.data.CreateKit_Name+'Menukit')
        Pm.ListMenu_KitGoodAvailable().select('LifeSavers')
        Pm.ArrowMenu_AddGoodToKit().click()
        cy.scrollTo('bottom')
        Pm.BtnMenu_createkit().click()
        cy.wait(1000)
        Pm.Card_MenuKitInfo().trigger('mouseover')
        Pm.BtnMenuEdit_Kitinfo().click()
        Pm.ArrowMenu_AddkitsDropdown().click()
        cy.wait(2000)
        Pm.ListMenu_Addkits().select(this.data.CreateKit_Name+'Menukit').should('be.visible')
        Pm.BtnMenu_kitsAddbutton().click()
        Pm.ListMenu_Addkits().select(this.data.CreateKit_Name+'Menukit').should('be.visible')
        Pm.BtnMenu_kitsAddbutton().click()
        Pm.BtnMenu_save().click()
        cy.get('.toast-message')
    .should('be.visible')
    .and('have.text', 'Menu Saved Successfully')
    

        //cy.logout()
    })

    it('logout from berp', function(){
        cy.logout()
    })



     })