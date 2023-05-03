class ShowManagement{

  // Links
  Link_ShowManagement(){
      return cy.get(':nth-child(7) > [ng-click="navigate(item, item.Route)"] > .menu-img')
  }
    Link_Shows(){
        return cy.get(':nth-child(7) > [ng-show="item.Expanded"] > :nth-child(1) > a > .menu-title')

    }
    Link_Schedule(){
        return cy.get(':nth-child(7) > [ng-show="item.Expanded"] > :nth-child(2) > a > .menu-title')
    }

    //Buttons

    Btn_AddShow(){
        return cy.get('.fab-wrap-b-r > .btn')
    }
    Btn_CreateShow(){
        return cy.get('.btn-success')
    }
    BtnSave_Schedule(){
        return cy.get('.ignore-ng-animate')
    }
    Btn_CopytoNextWeek(){
        return cy.get(':nth-child(1) > :nth-child(5) > .btn')
    }
    BtnSave_ManageSales(){
        return cy.get('.col-md-8 > .btn')
    }

    // Inputs

    Input_ShowName(){
        return cy.get('#showName')
    }
    Slot_schedule(){
        return cy.get(':nth-child(13) > :nth-child(1) > .calendar_default_cell > .calendar_default_cell_inner')
    }
    SlotSelected_schedule(){
        return cy.get('.calendar_default_event_inner')
    }
    

    // Lists

    List_Theatres(){
        return cy.get('#theatre')
    }
    ListScheduleP_Show(){
        return cy.get('#show')
    }

}
export{ShowManagement}