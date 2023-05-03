class ClientPage
{
    AddButton(){
        return cy.get('.fab-wrap-b-r > .btn > .fa')
    }

    NameField(){
        return cy.get('#first')
    }

    DescriptiionField(){
        return cy.get('#last')
    }

    ClientType(){
        return cy.get(':nth-child(4) > .form-control')
    }

    createButton(){
       return cy.get('.btn-success')
    }

    clientHeaderName(){
        return cy.get('.col-md-7 > .ng-binding')
    }

    VenueSeeAll(){
       return cy.get('client-venue-info-component.ng-isolate-scope > .miles-card > .pull-right')
    }

    VenueAddButton(){
        return cy.get('.fab-wrap-b-r > .btn')
    }

   VenueName(){
   return cy.get('#nme').invoke('show')
   }

   venueTax(){
       return cy.get('select.form-control.ng-pristine.ng-untouched.ng-empty.ng-invalid.ng-invalid-required')
   }

   VenueCreateButton(){
       return cy.get('.btn-success')
   }

   VenueHeaderName(){
       return cy.get('.col-md-7 > .ng-binding')
   }

   TheatreSeeAllButton(){
       return cy.get('venue-theatre-info-component.ng-isolate-scope > .miles-card > .pull-right')
   }

   TheatreAddButton(){
       return cy.get('.fab-wrap-b-r > .btn')
   }

   TheatreName(){
       return cy.get('#nme')
   }

   TheatreQBName(){
       return cy.get('#qbnme')
   }
 
   TheatreQBClassName(){
       return cy.get('#qbclnme')
   }

   TheatrecreateButton(){
       return cy.get('.btn-success')
   }

   TheatreHeaderName(){
       return cy.get('.col-md-7 > .ng-binding')
   }
   SalesSeeAll(){
       return cy.get('theatre-sales-location-info-component.ng-isolate-scope > .miles-form > .btn')
   }

   salesAddButton(){
       return cy.get('.fab-wrap-b-r > .btn')
   }

   SalesName(){
       return cy.get('#nme')
   }
   saleHeaderName(){
       return cy.get('.col-md-7 > .ng-binding')
   }
   salescreateButton(){
       return cy.get('.btn-success')
   }

   Link_clients(){
       return cy.get('.sidebar-menu > :nth-child(4) > a > .menu-title')
   }

   InputSearch_clients(){
       return cy.get('#input')
   }
   Btn_ClientTree(){
       return cy.get('.ng-scope > :nth-child(1) > a > .fa')
   }
   CardVenueP_Menu(){
       return cy.get('venue-menu-info-component.ng-isolate-scope > .miles-editable')
   }

   BtnVenueP_EditMenu(){
       return cy.get('.ng-binding > h4 > .pull-right > .fa')
   }
   ListVenueP_SelectMenu(){
       return cy.get('venue-menu-info-component.ng-isolate-scope > .miles-form > .form-group > .form-control')
   }
   BtnVenueP_SaveMenu(){
       return cy.get('venue-menu-info-component.ng-isolate-scope > .miles-form > .btn-success')
   }
   CardSalesLocation_Menu(){
       return cy.get('sales-location-menu-info-component.ng-isolate-scope > .miles-editable')
   }

   BtnSalesLocationP_editMenu(){
       return cy.get('.ng-binding > h4 > .pull-right > .fa')
   }

   CheckBoxSalesLocation_defaultMenu(){
       return cy.get('sales-location-menu-info-component.ng-isolate-scope > .miles-form > :nth-child(3) > label')
   }
   BtnSalesLocation_SaveMenu(){
       return cy.get('sales-location-menu-info-component.ng-isolate-scope > .miles-form > .btn-success')
   }
   
}

export {ClientPage}