/**
 * Created by rkoda on 2/9/2016.
 */
(function(){
    function HomeController($scope){
        $scope.message = "HomeController controller"
    }

    HomeController.$inject = ['$scope'];
    angular.module('app').controller('HomeController',HomeController);
}());
