myApp.controller('AdminController', 
	function($scope, $http, $location, $firebase, FIREBASE_URL){

	var ref = new Firebase(FIREBASE_URL + '/shows'); //firebase ref plus shows
	var showsList = $firebase(ref).$asArray();
	$scope.shows = showsList;

	$scope.addShow = function() {
		var showObj = $firebase(ref);

		var myData = {
			name: $scope.show.name,
			date: $scope.show.date,
			details: $scope.show.details,
			number: $scope.show.number,
			link: $scope.show.link
		};

		showObj.$push(myData);
		$location.reload;
	}//addShow

}); //ShowController