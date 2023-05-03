
class InventoryManagement{

    // Links 

    Link_InventoryManagement(){
        return cy.get(':nth-child(8) > [ng-click="navigate(item, item.Route)"] > .menu-img')
    }

    Link_ManageOrders(){
        return cy.get(':nth-child(8) > [ng-show="item.Expanded"] > :nth-child(2) > a > .menu-title')
    }

    Link_InventoryReconcilliation(){
        return cy.get(':nth-child(6) > [ng-show="item.Expanded"] > :nth-child(3) > a > .menu-img')
    }

    Link_InventoryTransfers(){
        return cy.get(':nth-child(8) > [ng-show="item.Expanded"] > :nth-child(1) > a > .menu-img')
    }

    Link_ManageSales(){
        return cy.get(':nth-child(6) > [ng-show="item.Expanded"] > :nth-child(4) > a > .menu-title')
    }

    //Buttons

    BtnAdd_Order(){
        return cy.get('.fab-wrap-b-r > .btn')
    }

    BtnSave_Order(){
        return cy.get('.btn-success')
    }

    BtnOrder_post(){
        return cy.get('.col-md-2 > .btn')
    }
    BtnPost_confirmation(){
        return cy.get('.btn-primary')
    }

    BtnReconcilliation_Next(){
        return cy.get('.btn-success')
    }

    BtnReconcilliation_Save(){
        return cy.get('.row > .btn-success')
    }

    //Lists

    ListOrder_Venue(){
        return cy.get('#venue')
    }
    ListOrder_Vendor(){
        return cy.get('#vendor')
    }

    ListTrasfers_venues(){
        return cy.get(':nth-child(1) > .form-group > .ui-select-container > .ui-select-choices')
    }
    ListTransfers_salesLocation(){
        return cy.get(':nth-child(2) > .form-group > .ui-select-container > .ui-select-choices')
    }

    DropDownInventoryTransfers_From(){
        return cy.get(':nth-child(1) > .form-group > .ui-select-container > .ui-select-match > .btn-default')
    }

    DropdownInventoryTransfer_To(){
        return cy.get(':nth-child(2) > .form-group > .ui-select-container > .ui-select-match > .btn-default')
    }
    ListManageSalesP_Venue(){
        return cy.get('.col-lg-10 > :nth-child(1) > .form-control')
    }
    ListManageSalesP_SalesLocation(){
        return cy.get('.col-lg-10 > :nth-child(2) > .form-control')
    }
    DropdManageSales_kit(){
        return cy.get('.ui-select-match > .btn-default')
    }
    ListManageSalesP_Kit(){
        return cy.get('.ui-select-choices')
    }

    ListManageSales_SelectShow(){
        return cy.get('[ng-show="vm.venue.Id > 0  && vm.salesLocation.Id > 0 && vm.getSubTotal() > 0 ? true : false"][style=""] > :nth-child(2) > .form-control')
    }
    
    ListManageSales_paymentType(){
        return cy.get(':nth-child(3) > .form-control')
    }




    // Inputs

    InputOrder_good(){
        return cy.get('[style="background-color: white;"] > .row > .col-sm-4 > .form-control')
    }

    InputOrder_Ref(){
        return cy.get(':nth-child(1) > .col-md-3 > .input-group > .form-control')
    }
    InputReconcilliation_QTY(){
        return cy.get('.ng-scope > .form-control')
    }

    InputTransfers_QTY(){
        return cy.get('.transfer-qty > .form-group > .form-control')
    }
    InputManageSalesP_KitQTY(){
        return cy.get('.table-card > .row > :nth-child(2) > .form-control')
    }

    InputManagesales_Date(){
        return cy.get('[ng-show="vm.venue.Id > 0  && vm.salesLocation.Id > 0 && vm.getSubTotal() > 0 ? true : false"][style=""] > :nth-child(1) > .form-control')
    }



}

export {InventoryManagement}