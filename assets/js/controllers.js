function MapCtrl($scope, $http) {
  $http.get('tables.json').
  success(function(data) {
    console.log(data);
    $scope.tables = data.tables;
  });
  $scope.toggle = function(e) {
  	var elem = angular.element(e.srcElement);
  	var self = this;
  	console.log($(elem.parent()).attr('id'));
  	if(elem.hasClass('open')) {
  		$(elem).removeClass('open');
  	}
  	else {
  		$(elem).addClass('open');
  	}
  };
}

function ReservationCtrl($scope, $http) {
  $http.get('reservations.json').
  success(function(data) {
    console.log(data);
    $scope.reservations = data.reservations;
  });
}