/**
 * Created by THE INGRO on 22/06/2015.
 */
(function(){
    "use strict";

   var myApp = angular.module('bookMarks',
        [
        ])

       .controller("mainController", function($scope){
            $scope.name = 'Cesar Cadavid';
            $scope.categories = ['cesar','java','sql', 'angularJS'];
            $scope.listaDatos = [
                {id:1, name:'cesar', url:'https://www.facebook.com/THE.INGRO', category:'faceBook'},
                {id:2, name:'java', url:'https://www.oracle.com/javaone/index.html?src=OW-J1-CE-JCOM-07292014-WWMK11054264MPP001C079', category:'java' },
                {id:3, name: "sql", url:'http://www.w3schools.com/sql/sql_dates.asp', category:'sql' },
                {id:4, name: "angularJS", url:'http://www.w3schools.com/sql/sql_dates.asp', category:'AJS' }
           ];

           $scope.currentCategory = 'cesar';

           $scope.setCurrentCategory = function(category){
               $scope.currentCategory = category;
           }

           $scope.isCurrentCategory = function(category){
                return $scope.currentCategory === category;
           }
        })

})();