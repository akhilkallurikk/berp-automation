/// <reference types="cypress-xpath"/>
class AdminPages{

   Link_AppAdmin(){
       return cy.get(':nth-child(2) > [ng-click="navigate(item, item.Route)"] > .menu-img')
   } 

   Link_ManagedItems(){
       return cy.get(':nth-child(2) > [ng-show="item.Expanded"] > :nth-child(3) > a > .menu-title')
   }
   
   Card_InventoryAccounts(){
       return cy.get('[title="Inventory Accounts"] > .miles-card')
   }

   Button_AddInventory(){
       return cy.get('[title="Inventory Accounts"] > .miles-card > .form-group > .fab-wrap > .btn')
   }

   Button_SaveInventory(){
       return cy.get('[title="Inventory Accounts"] > .miles-card > .form-group > .btn-success')
   }

   ButtonAdd_COGS(){
       return cy.get('[title="COGS Accounts"] > .miles-card > .form-group > .fab-wrap > .btn')
   }
   ButtonAdd_Revenue(){
       return cy.get('[title="Revenue Accounts"] > .miles-card > .form-group > .fab-wrap > .btn')
   }

   Input_COGS(){
       return cy.xpath('//body/div[1]/div[2]/div[1]/ui-view[1]/div[1]/div[2]/mt-list-item-component[4]/div[1]/div[1]/div[11]/div[1]/input[1]')
   }
   Input_Revenue(){
       return cy.get('input.form-control.ng-pristine.ng-untouched.ng-empty.ng-invalid.ng-invalid-required')
   }
   ButtonSave_COGS(){
       return cy.get('[title="COGS Accounts"] > .miles-card > .form-group > .btn-success')
   }

   ButtonSave_Revenue(){
       return cy.get('[title="Revenue Accounts"] > .miles-card > .form-group > .btn-success')
   }

Input_InventoryAccounts(){
    return cy.get('[title="Inventory Accounts"] > .miles-card > .form-group > :nth-child(13) > .input-group > .form-control')
}


   Card_RevenueAccount(){
       return cy.get('[title="Revenue Accounts"] > .miles-card')
   }

   Card_COGSAccount(){
       return cy.get('[title="COGS Accounts"] > .miles-card')
   }

Link_ExportSettings(){
    return cy.get(':nth-child(2) > [ng-show="item.Expanded"] > :nth-child(2) > a')
}
Input_PreorderMemo(){
    return cy.get(':nth-child(14) > .form-control')
}
Button_SaveExportSettings(){
    return cy.get('.miles-form > .btn')
}
}

export{AdminPages}