(function () {
'use strict';

angular.module('public')
.service( 'registrationService', registrationService);

 registrationService.$inject = ['MenuService']
 function registrationService(MenuService) {
    var service = this;
    var user;
    var menu_item;
    var menu_message;
    var saved_status = false;

    service.getInfo = function()
    {
     if (user)
        return user;
    };

    service.addInfo = function (userinfo) {
      menu_message="";
      saved_status = false;
      var menu_promise = MenuService.getMenuItem(userinfo.menu);
      menu_promise.then(function (response) {
        menu_item=response;
        user = {
          firstname: userinfo.firstname,
          lastname: userinfo.lastname,
          email: userinfo.email,
          phonenumber: userinfo.phonenumber,
          menu: userinfo.menu
        };
        menu_message="Your information has been saved";
        saved_status = true;
      },
      function (error_respons)
      {
        menu_message = "No such menu number exists."
        saved_status = false;
      });

    };

    service.getMessage = function ()
    {
        return menu_message;
    }


    service.getStatus = function ()
    {
      return saved_status;
    }

    service.getMenuItem = function()
    {
        return menu_item;
    };

  }


})();
