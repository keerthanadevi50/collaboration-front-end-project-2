app.controller('BlogDetailController',function($routeParams,$scope,BlogService){
var id=$routeParams.id
//instead of writing function and calling explicitly, we can call the service function directly
$scope.blogPost=BlogService.getBlogDetail(id) //calling service function directly
.then(function(response){
console.log(response.data);
console.log(response.status)
$scope.blogPost=response.data;
},function(response){
console.log(response.status)
})
$scope.addBlogComment=function(){
	$scope.blogComment.blogPost=$scope.blogPost;
	BlogService.addBlogComment($scope.blogComment)
	.then(function(response){
		console.log(response.status);
		$scope.blogComment.body=''
	},function(response){
		console.log(response.status)
	})
	
}

$scope.getBlogComments=function(blogPostId){
	$scope.showcomments=true;
	$scope.blogComments=BlogService.getBlogComments(blogPostId)
	.then(function(response){
		$scope.blogComments=response.data;
	},function(response){
		console.log(response.status);
	})
}
$scope.updateApproval=function(){
	BlogService.updateApproval($scope.blogPost)
	.then(function(response){
		$location.path("/getAllBlogs")
	},function(response){
		console.log(response.status);
	})
}


})