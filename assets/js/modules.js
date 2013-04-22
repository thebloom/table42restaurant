var app = angular.module('table42', ['ngDragDrop']);
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
	});
	capacityService.changeCapacity = function(item) {
		if(item.open) {
			cap += item.capacity;
		}
		else {
			cap -= item.capacity;
		}
	}
	capacityService.capacity = function() {
		return cap;
	}
    return capacityService;
});


