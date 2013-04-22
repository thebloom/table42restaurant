function MapCtrl($scope, $http) {
  $http.get('tables.json').
  success(function(data) {
    console.log(data);
    $scope.tables = data.tables;
  });
  $scope.toggle = function(table) {
    table.open = !table.open;
  };
}

function ReservationCtrl($scope, $http) {
  $scope.predicate = 'time';
  $scope.up = "icon-chevron-up";
  $scope.down = "icon-chevron-down";
  $http.get('reservations.json').
  success(function(data) {
    console.log(data);
    $scope.reservations = data.reservations;
  });
  $scope.seat = function(reservation) {
    reservation.seated = !reservation.seated;
    $scope.incoming.push(reservation);
  }
  $scope.active = 'open';
  $scope.incoming = [];
}