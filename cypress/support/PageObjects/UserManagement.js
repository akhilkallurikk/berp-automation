class UserManagement
{
  Link_UserManagement(){
    return cy.get(':nth-child(3) > [ng-click="navigate(item, item.Route)"] > .menu-img')
  }

  Link_UsersPage(){
      return cy.get(':nth-child(3) > [ng-show="item.Expanded"] > :nth-child(1) > a > .menu-title')
  }

  Button_UserAdd(){
      return cy.get('.fab-wrap-b-r > .btn')
  }

  User_FirstName(){
      return cy.get('#first')
  }

  User_LastName(){
      return cy.get('#last')
  }

  User_Email(){
      return cy.get('#email')
  }

  User_UserName(){
      return cy.get('#username')
  }

  User_Password(){
      return cy.get('#pass')
  }

  User_ConfirmPass(){
      return cy.get('#conf')
  }

  User_UserRole(){
      return cy.get('select.form-control.ng-pristine.ng-untouched.ng-empty.ng-invalid.ng-invalid-required')
  }


  Link_UserRoles(){
      return cy.get(':nth-child(3) > [ng-show="item.Expanded"] > :nth-child(3) > a')
  }

  Input_UserRoleName(){
      return cy.get('#name')
  }
Button_UserCreate(){
    return cy.get('.btn-success')  
}

Link_POSUsers(){
    return cy.get(':nth-child(3) > [ng-show="item.Expanded"] > :nth-child(2) > a > .menu-title')
}

input_POSFirstName(){
    return cy.get('#firstname')
}

input_POSLastName(){
    return cy.get('#lastname')
}

input_POSUserName(){
    return cy.get('#username')
}
input_POSPin(){
    return cy.get('#pin')
}
Button_CreatePOS(){
    return cy.get('[ng-click="save(form, posUser, saveAndReturn)"]')
}
EditPermissions_ApplicationSettings(){
    return cy.get(':nth-child(1) > info-card.ng-isolate-scope > .miles-editable > :nth-child(1) > .ng-binding > .pull-right > .fa')
}
ApplicationSettings_FullAccess(){
    return cy.get('[ng-repeat="type in claimsObj"][style=""] > info-card.ng-isolate-scope > .miles-form > [ng-repeat="claim in $ctrl.orig.Values"][style=""] > .row > .col-xs-4 > .ng-pristine')
}
Button_saveRole(){
    return cy.get('[ng-click="saveClaims()"]')
}
EditPermissions_ClientAccess(){
    return cy.get(':nth-child(2) > info-card.ng-isolate-scope > .miles-editable > :nth-child(1) > .ng-binding > .pull-right > .fa')
}
clientAccess_Full(){
    return cy.get(':nth-child(2) > info-card.ng-isolate-scope > .miles-form > [ng-repeat="claim in $ctrl.orig.Values"][style=""] > .row > .col-xs-4 > .ng-pristine')
}

LogoutToggle(){
    return cy.get('a.dropdown-toggle')
}

Button_Logout(){
    return cy.get('button.btn.btn-warning.btn-flat')
}
User_portalAccess(){
    return cy.get('user-portal-access-component.ng-isolate-scope > .miles-editable')
}

}
export {UserManagement}