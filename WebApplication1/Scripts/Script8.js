/// <reference path="angular.min.js" />
var myApp = angular
                .module("myModule", [])
                 .controller("myController", function ($scope) {
                     var tblemployee = [
    { name: "Naveen",  dateofbirth: new Date("November 6,1990"), gender: "Male", salary: 25000 },
    {name: "Krishna",  dateofbirth: new Date("April 12,2000"), gender: "Male", salary: 350000 },
    { name: "Vinoth", dateofbirth: new Date("March 23,1988"), gender: "Male", salary: 45070 },
    {name: "Ganesh",  dateofbirth: new Date("May 14,2000"), gender: "Male", salary: 55000 },
    { name: "Vijay", dateofbirth: new Date("December 17,1999"), gender: "Male", salary: 65000 }
                     ];
                     $scope.tblemployee = tblemployee;
                     $scope.rowlimit = 3;
                 });