var app = angular.module('table42', []);
app.config(['$routeProvider', '$compileProvider', function($routeProvider, $compileProvider) {
	$compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|app|file):/);
    $routeProvider.
      when('/map', {templateUrl: 'views/map.html',   controller: MapCtrl}).
      when('/reservation', {templateUrl: 'views/reservation.html',   controller: ReservationCtrl}).
      otherwise({redirectTo: '/map'});
}]);

app.factory('cap', function($http) {
	var capacityService = {};
	var cap = 0;
	$http.get('tables.json').
	success(function(data) {
	    $.each(data.tables, function(i, item) {
	      if(item.open) {
	        cap += item.capacity;
	      }
	    });
	    console.log(cap);
	});
	capacityService.changeCapacity = function(item) {
		if(item.open) {
			cap += item.capacity;
		}
		else {
			cap -= item.capacity;
		}
		console.log(cap);
	}
	capacityService.capacity = function() {
		return cap;
	}
    // var items = [];
    // var myBasketService = {};

    // myBasketService.addItem = function(item) {
    //     items.push(item);
    // };
    // myBasketService.removeItem = function(item) {
    //     var index = items.indexOf(item);
    //     items.splice(index, 1);
    // };
    // myBasketService.items = function() {
    //     return items;
    // };

    return capacityService;
});


