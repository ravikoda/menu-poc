var app = angular.module('app',['ngRoute']);

app.provider("MenuConfig", function() {
    var menuItems = [];
    this.getMenuItems = function(){
        return menuItems;
    }
    this.$get = function() {
        var q = jQuery.ajax({
            type: 'GET', url: 'js/menus.json', cache: false, async: false, contentType: 'application/json', dataType: 'json'
        });
        if (q.status === 200) {
            menuItems =  angular.fromJson(q.responseText);
        }
        return menuItems;
    };
});

app.config(['MenuConfigProvider','$routeProvider',function(MenuConfigProvider,$routeProvider){

    var menuProvider = MenuConfigProvider.$get();
    for(var menu in menuProvider){
        $routeProvider
            .when(menuProvider[menu].url, {
                templateUrl : menuProvider[menu].templateUrl,
                controller  : menuProvider[menu].controller
            })
    }


}]);



























