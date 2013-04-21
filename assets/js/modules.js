angular.module('table42', [])
.config(['$routeProvider', '$compileProvider', function($routeProvider, $compileProvider) {
	$compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|app|file):/);
    $routeProvider.
      when('/map', {templateUrl: 'views/map.html',   controller: MapCtrl}).
      when('/reservation', {templateUrl: 'views/reservation.html',   controller: ReservationCtrl}).
      otherwise({redirectTo: '/map'});
}]);


