myApp.controller('SongsController', 
	function($scope, $location, $http){

	var json = $http.get('js/json/songs.json').success(function(data) {
			$scope.songs = data;
	});
	
}); //RegistrationController