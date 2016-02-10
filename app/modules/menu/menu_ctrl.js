/**
 * Created by rkoda on 2/9/2016.
 */
(function(){
    function MenuController($scope,$http){

        $http.get("js/menus.json")
            .then(function(response){
                $scope.menus = response.data;
            });

    }

    MenuController.$inject = ['$scope','$http'];
    angular.module('app').controller('MenuController',MenuController);

}());