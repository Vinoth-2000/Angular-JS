/// <reference path="angular.min.js" />



var myApp = angular.module("myModule", []);

myApp.controller("myController", function ($scope) {
    var employee = {
        firstName: "Ram",
        lastName: "Kumar",
        gender: "Male"
    };
    $scope.employee = employee;
});