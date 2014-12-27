myApp.factory('Authentication', function($firebase, $firebaseSimpleLogin, 
	FIREBASE_URL, $location, $rootScope){

	var ref = new Firebase(FIREBASE_URL);
	var simpleLogin = $firebaseSimpleLogin(ref);

	var myObject = {
		login: function (user) {
			var userRef = new Firebase(FIREBASE_URL + '/users/' + user.uid);
			var userObj = $firebase(userRef).$asObject();

			userObj.$loaded().then(function(){
				$rootScope.currentUser = userObj;
			});

			return simpleLogin.$login('password', {
				email: user.email,
				password: user.password
			});
		},//login

		logout: function() {
			return simpleLogin.$logout();
		},//logout

		signedIn: function() {
			return simpleLogin.user != null;
		},//signedIn

	}//myObject

	//add function to root scope

	$rootScope.signedIn = function() {
		return myObject.signedIn();
	}

	return myObject;
});