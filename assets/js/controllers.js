function MapCtrl($scope, $http, cap) {
  // map part
  $scope.cap = cap;
  $http.get('tables.json').
  success(function(data) {
    $scope.tables = data.tables;
  });
  $scope.toggle = function(table) {
    table.open = !table.open;
    cap.changeCapacity(table);
  };
  // sidebar part
  $scope.predicate = 'time';
  $scope.up = "icon-chevron-up";
  $scope.down = "icon-chevron-down";
  $http.get('reservations.json').
  success(function(data) {
    $scope.reservations = data.reservations;
  });
  $scope.seat = function(reservation) {
    reservation.seated = !reservation.seated;
    $scope.incoming.push(reservation);
  }
  $scope.active = 'open';
  $scope.incoming = [];
}

function ReservationCtrl($scope, $http, cap) {
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
  $scope.cap = cap;
}