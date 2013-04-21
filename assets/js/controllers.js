function MapCtrl($scope) {
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

function ReservationCtrl($scope) {

}