myApp.controller('StatusController', function(
	$scope, $rootScope, $firebaseSimpleLogin, $firebase, $location, Authentication, FIREBASE_URL) {

	$scope.logout = function() {
		Authentication.logout();
		$location.path('/login');
	}

	$scope.login = function() {
		Authentication.login($scope.user).then(function(user){
			$location.path('/updates');
		}, function (error) {
			$scope.message = error.toString();
		});
	}//login

	$rootScope.$on('$firebaseSimpleLogin:login', function(evt, authUser) {
		var ref = new Firebase(FIREBASE_URL + '/users/' + authUser.uid);
		var user = $firebase(ref).$asObject();

		user.$loaded().then(function(){
			$rootScope.currentUser = user;
		});
	});//$firebaseSimpleLogin:login

	$rootScope.$on('$firebaseSimpleLogin:logout', function(evt, authUser) {
		$rootScope.currentUser = null;
	});//$firebaseSimpleLogin:logout */
});//StatusController