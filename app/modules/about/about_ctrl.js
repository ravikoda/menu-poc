/**
 * Created by rkoda on 2/9/2016.
 */
(function(){
    function AboutController($scope){
        $scope.message = "About controller"
    }

    AboutController.$inject = ['$scope'];
    angular.module('app').controller('AboutController',AboutController);


}());