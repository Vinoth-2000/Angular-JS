/// <reference path="angular.min.js" />



var myApp = angular
                .module("myModule", [])
                 .controller("myController", function ($scope) {
                     var employee = {
                         firstName: "Ram",
                         lastName: "kumar",
                         gender: "Male"
                     };
                     $scope.employee = employee;
});