/// <reference path="angular.min.js" />
var myApp = angular
                .module("myModule", [])
                 .controller("myController", function ($scope) {
                     var Technologies = [
                         { name: "C#", likes: 0, dislikes: 0 },
                         { name: "Asp.Net", likes: 0, dislikes: 0 },
                         { name: "Sql Server", likes: 0, dislikes: 0 },
                         { name: "AngularJs", likes: 0, dislikes: 0 },
                     ];

                     $scope.Technologies = Technologies;
                     $scope.incrementlikes = function (Technology) {
                         Technology.likes++;

                     }

                      $scope.incrementdislikes = function (Technology) {
                         Technology.dislikes++;

                     }
                 });