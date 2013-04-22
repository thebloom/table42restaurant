function MapCtrl($scope, $http, cap) {
  $scope.cap = cap;
  $http.get('tables.json').
  success(function(data) {
    console.log(data);
    $scope.tables = data.tables;
  });
  console.log($scope.capacity);
  $scope.toggle = function(table) {
    table.open = !table.open;
    cap.changeCapacity(table);
  };
  
  // $scope.capacity = function() {
  //   $scope.cap = 0;
  //   $.each($scope.tables, function(i, item) {
  //     if(item.open) {
  //       $scope.cap += item.capacity;
  //     }
  //   });
  // }
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