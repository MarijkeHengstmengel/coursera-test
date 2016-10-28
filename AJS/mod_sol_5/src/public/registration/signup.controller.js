(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['registrationService'];
function SignUpController(registrationService){
  var signUp = this;
 signUp.started = false;

  signUp.submit = function (){
    var menu;
    signUp.started = true;
    registrationService.addInfo(signUp.user)
 };
 signUp.message = function() {
   var err = registrationService.getMessage();
   return err;
 };

 signUp.completed = function() {
   var stat = registrationService.getStatus();
   return stat;
 };


}


})();


//
// (function () {
// "use strict";
//
// angular.module('public')
// .controller('SignUpController', SignUpController);
//
// SignUpController.$inject = ['registrationService', 'MenuService','$q'];
// function SignUpController(registrationService, MenuService,$q){
//   var signUp = this;
// //  signUp.error="";
//   signUp.err="";
//   signUp.submit = function (){
//    //check short-name menu
//     var menu;
//     console.log("SignUpController user menu short name" +signUp.user.menu);
//     signUp.started = true;
//     registrationService.addInfo(signUp.user)
//   //  $q.all([registrationService.addInfo(signUp.user).$promise])
//   //           .then(function (result) {
//   //               signUp.completed = true;
//   //               signUp.menuOK = true;
//   //               console.log("mmmmmmmmmmmmm" + result);
//    //
//   //           });
//
//   //  registrationService.addInfo(signUp.user).then(function(response) {
//   //     console.log(responser);
//   //     signUp.completed = true;
//   //   })
//   //   .catch(function (error) {
//   //     menu_error = "No such menu number exists."
//
//   //     signUp.menuOK = true;
//   //   });
//   //  signUp.error = registrationService.getError();
//     //  console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" + signUp.error);
//    };
//     signUp.error = function() {
//          var err = registrationService.getError();
//          console.log ("qqqqqqqqqqqqqqqqqqq" + err);
//          return err;
//     };
//     signUp.completed = function() {
//          var stat = registrationService.getStatus();
//          console.log ("stat: " + stat);
//          return stat;
//     };
// //signUp.error = registrationService.getError();
//   signUp.user = {
//     firstname: "",
//     lastname: "",
//     email: "",
//     phonenumber: "",
//     menu: ""
//   };
//
//
// 
// }
//
//
// })();
