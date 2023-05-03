/// <reference types="cypress-xpath"/>
class ProductManagement{
// links

    Link_ProductManagement(){
        return cy.get(':nth-child(5) > [ng-click="navigate(item, item.Route)"] > .menu-img')
    }
    Link_Goods(){
        return cy.get(':nth-child(5) > [ng-show="item.Expanded"] > :nth-child(2) > a > .menu-title')
    }

    Link_Vendors(){
        return cy.get(':nth-child(5) > [ng-show="item.Expanded"] > :nth-child(1) > a > .menu-title')
    }
    Link_kits(){
        return cy.get(':nth-child(5) > [ng-show="item.Expanded"] > :nth-child(4) > a > .menu-title')
    }

    Link_updateStandardCost(){
        return cy.get(':nth-child(5) > [ng-show="item.Expanded"] > :nth-child(3) > a > .menu-title')
    }

    Link_Menu(){
        return cy.get('[ng-show="item.Expanded"] > :nth-child(5) > a > .menu-title')
    }


    //Buttons

    Button_AddVendor(){
        return cy.get('.fab-wrap-b-r > .btn > .fa')
    }
   
    Button_Create(){
    return  cy.get('.btn-success')
    }
    BtnAdd_Goods(){
    return cy.get('.fab-wrap-b-r > .btn')
    }

    SaveBtn_GoodInfo(){
        return cy.get('vendor-good-component.ng-isolate-scope > .miles-form > .btn-success')
    }
    Edit_GoodInfo(){
        return cy.get('vendor-good-component.ng-isolate-scope > .miles-card > h4 > .pull-right > .fa')
     }

     BtnCreate_Good(){
         return cy.get('[ng-click="save(form, good, saveAndReturn)"]')
     }

     BtnAdd_Kits(){
         return cy.get('.fab-wrap-b-r > .btn')
     }
     BtnCreate_kit(){
         return cy.get('[ng-click="save(form, kit, saveAndReturn)"]')
     }
     BtnSave_updateStandardCost(){
         return cy.get(':nth-child(4) > .btn')
     }

     BtnAdd_Menu(){
         return cy.get('.fab-wrap-b-r > .btn')
     }

     BtnCreate_Menu(){
         return cy.get('[ng-click="vm.save(form, vm.menu, vm.saveAndReturn)"]')
     }
     BtnAddKit_Menu(){
     return cy.get('[ng-click="vm.moveItem(vm.available, vm.kits, vm.selected)"]')
     }

     BtnMenuEdit_Kitinfo(){
        return cy.get('menu-kit-component.ng-isolate-scope > .miles-editable > h4 > .pull-right > .fa')
     }
     Btn_AddKitToAvailable(){
         return cy.get('.col-md-12 > .btn-default')
     }
     BtnMenu_createkit(){
         return cy.get('.ng-dirty.ng-valid-min > .btn-success')
     }
     BtnMenu_kitsAddbutton(){
         return cy.get('[ng-click="$ctrl.moveItem(available, $ctrl.kits, $ctrl.menu.MenuKits)"]')
     }
     BtnMenu_save(){
         return cy.get('.ng-submitted > .btn-success')
     }
     BtnMenu_Delete(){
         return cy.get('.btn-danger')
     }
     BtnMenu_ConfirmDelete(){
         return cy.get('.ngdialog-buttons > .btn-danger')
         
     }


// input fields

    Input_VendorName(){
    return cy.get('#first')
    }

    Input_GoodName(){
        return cy.get('#nme')
    }
    Input_KitName(){
        return cy.get('#nme')
    }
    
    Input_GoodsSearch(){
        return cy.get('#input')
    }
    
    Input_searchUpdateSC(){
        return cy.get('#input')
    }
    Input_MenuName(){
        return cy.get('#nme')
    }
    InputMenuP_AddKitName(){
        return cy.xpath('//body/div[1]/div[2]/div[1]/ui-view[1]/div[2]/div[2]/div[1]/menu-kit-component[1]/div[2]/div[1]/div[1]/div[2]/menu-kit-add-component[1]/form[1]/div[1]/div[1]/div[1]/div[1]/input[1]')
    }
    SearchBar_Menu(){
        cy.get('#input')
    }


// Lists/dropdowns

List_Available(){
    return cy.get('.row > :nth-child(1) > .ng-pristine')
    
}

List_Selected(){
    return cy.get('.row > :nth-child(3) > .ng-pristine')
}

ListGood_Category(){
    return cy.xpath('//body/div[1]/div[2]/div[1]/ui-view[1]/div[2]/form[1]/div[1]/div[1]/div[1]/div[4]/select[1]')
}

ListGood_ItemType(){
    return cy.xpath('//body/div[1]/div[2]/div[1]/ui-view[1]/div[2]/form[1]/div[1]/div[1]/div[1]/div[5]/select[1]')
}

ListGood_RevenueType(){
    return cy.xpath('//body/div[1]/div[2]/div[1]/ui-view[1]/div[2]/form[1]/div[1]/div[1]/div[1]/div[6]/select[1]')
}

ListGood_COGSType(){
    return cy.xpath('//body/div[1]/div[2]/div[1]/ui-view[1]/div[2]/form[1]/div[1]/div[1]/div[1]/div[7]/select[1]')
}

ListGood_InventoryType(){
    return cy.xpath('//body/div[1]/div[2]/div[1]/ui-view[1]/div[2]/form[1]/div[1]/div[1]/div[1]/div[8]/select[1]')
}

ListKit_AddCategory(){
    return cy.get(':nth-child(4) > .form-control')
}

ListKit_GoodsAvailable(){
    return cy.get('.col-md-4 > .ng-pristine')
}

ListManu_KitsAvailable(){
    return cy.get(':nth-child(4) > .col-md-6 > .ng-pristine')
}
ListMenu_AddKitCategory(){
    return cy.get('body.skin-blue.ng-scope.sidebar-open.sidebar-mini.modal-open:nth-child(2) div.wrapper:nth-child(1) div.container-fluid.content-wrapper div.ng-scope:nth-child(1) ui-view.ng-scope div.ng-scope div.row:nth-child(2) div.col-md-10 menu-kit-component.ng-isolate-scope div.modal.fade.in div.modal-dialog div.modal-content div.modal-body menu-kit-add-component.ng-isolate-scope form.ng-pristine.ng-invalid.ng-invalid-required div.row:nth-child(1) div.col-md-12 div.miles-form.padded.ng-isolate-scope div.form-group:nth-child(4) > select.form-control.ng-pristine.ng-valid.ng-empty.ng-animate.ng-touched-add.ng-untouched-remove.ng-touched.ng-touched-add-active.ng-untouched-remove-active:nth-child(2)')
}
ListMenu_KitGoodAvailable(){
    return cy.get(':nth-child(2) > .col-md-6 > .ng-pristine')
}
ListMenu_Addkits(){
    return cy.get('.col-md-12 > .btn-link')
}

// Others

Card_GoodInfo(){
    return cy.get('vendor-good-component.ng-isolate-scope > .miles-card')
}

Arrow_MoveToSelected(){
    return cy.get('[ng-click="$ctrl.moveItem(available, $ctrl.goods, $ctrl.vendor.VendorGoods)"] > .fa')
}
Arrow_MoveToAvailable(){
    return cy.get('[ng-click="$ctrl.moveItem(selectedGood, $ctrl.vendor.VendorGoods, $ctrl.goods)"] > .fa')
}

ArrowKit_GoodsAvailable(){
    return cy.get('[ng-click="moveItem(available, goods, selected)"]')
}

Card_MenuKitInfo(){
    return cy.get('menu-kit-component.ng-isolate-scope > .miles-editable')
}
ArrowMenu_AddGoodToKit(){
    return cy.get('[ng-click="$ctrl.moveItem($ctrl.available, $ctrl.goods, $ctrl.selected)"]')
}
ArrowMenu_AddkitsDropdown(){
    return cy.get('.col-md-12 > .btn-link')
}

}

export {ProductManagement}