myApp.controller('ShowController', 
	function($scope, $http, $location, $firebase, FIREBASE_URL){

	var ref = new Firebase(FIREBASE_URL + '/shows'); //firebase ref plus shows
	var showsList = $firebase(ref).$asArray();
	$scope.shows = showsList;

	/*if (showsList.length < 1) {
		document.getElementById("shows").innerHTML = "<p>No shows currently! Shows coming soon.</p>";
	} else {
		return;
	}*/

	$scope.addShow = function() {
		var showObj = $firebase(ref);

		var myData = {
			name: $scope.show.name,
			date: $scope.show.date,
			details: $scope.show.details
		};

		showObj.$push(myData);
		$location.reload;
	}//addShow

}); //ShowController