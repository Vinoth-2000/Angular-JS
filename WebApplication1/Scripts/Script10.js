/// <reference path="angular.min.js" />



var myApp = angular
                .module("myModule", [])
                 .controller("myController", function ($scope) {
                     var tblemployees = [
        { name: "Krishna", gender: "Male", salary: 35000, city: "London" },
        { name: "Naveen", gender: "Male", salary: 25000.788, city: "Chennai" },
        { name: "Vinoth", gender: "Male", salary: 45000, city: "London" },
        { name: "Ganesh", gender: "Male", salary: 55000, city: "Chennai" },
        { name: "Vijay", gender: "Male", salary: 65000, city: "London" },
                     ];

                     $scope.tblemployees = tblemployees;
                 });