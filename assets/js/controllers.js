function MapCtrl($scope, $http) {
  $http.get('tables.json').
  success(function(data) {
    console.log(data);
    $scope.tables = data.tables;
  });
  $scope.toggle = function(index) {
    $scope.tables[index].open = !$scope.tables[index].open;
  };
}

function ReservationCtrl($scope, $http) {
  $http.get('reservations.json').
  success(function(data) {
    console.log(data);
    $scope.reservations = data.reservations;
  });
  $scope.predicate = 'time';
  $scope.up = "icon-chevron-up";
  $scope.down = "icon-chevron-down";
}