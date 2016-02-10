/**
 * Created by rkoda on 2/9/2016.
 */
(function(){
    function ContactController($scope){
        $scope.message = "ContactController controller"
    }

    ContactController.$inject = ['$scope'];
    angular.module('app').controller('ContactController',ContactController);
}());
