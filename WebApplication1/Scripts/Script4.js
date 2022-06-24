/// <reference path="angular.min.js" />



var myApp = angular
                .module("myModule", [])
                 .controller("myController", function ($scope) {
                     var employees =[ 
                         { firstName: "Ram", lastName: "kumar", gender: "Male", salary: 55000 },

                         { firstName: "Ajay", lastName: "S", gender: "Male", salary: 60000 },

                         { firstName: "Ganesh", lastName: "N", gender: "Male", salary: 58000 },

                         { firstName: "Naveen", lastName: "L", gender: "Male", salary: 70000 },

                         { firstName: "Vinoth", lastName: "kumar", gender: "Male", salary: 80000 },



                          ];
                     $scope.employees = employees;
                 });