myApp.controller('BlogController', 
	function($scope, $http, $location, $firebase, FIREBASE_URL){

	var ref = new Firebase(FIREBASE_URL + '/blog/posts'); //firebase ref plus shows
	
	var blogPosts = $firebase(ref)
	var blogPostArray = $firebase(ref).$asArray();
	var blogPostObj = $firebase(ref).$asObject();
	$scope.posts = blogPostArray;

	$scope.addBlogPost = function() {
		blogPosts.$push({
			title: $scope.blog.title,
			date: Firebase.ServerValue.TIMESTAMP,
			content: $scope.blog.content
		});
	}//Add blog post

	$scope.removePost = function(id) {
		blogPosts.$remove(id);
	}//Remove blog post

}); //BlogController