var myApp = angular.module('myApp',
	['ngRoute', 'firebase', 'appControllers']).constant('FIREBASE_URL', 'https://pettingzooportfolio.firebaseio.com/');

var appControllers = angular.module('appControllers', ['firebase']);

myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when ('/bio', {
			templateUrl:'views/bio.html',
			controller: 'BioController'
		}).
		when ('/shows', {
			templateUrl:'views/shows.html',
			controller: 'ShowController'
		}).
		when ('/songs', {
			templateUrl:'views/songs.html',
			controller: 'SongsController'
		}).
		when ('/updates', {
			templateUrl:'views/blog.html',
			controller: 'BlogController'
		}).
		when ('/login', {
			templateUrl:'views/login.html',
			controller: 'StatusController'
		}).
		when ('/admin', {
			templateUrl:'views/admin_console.html',
			controller: 'AdminController'
		}).  
		otherwise({
			redirectTo: '/bio'
		});
}]);