
app.controller("BlogController",function($scope,$location,BlogService){
	$scope.saveBlogPost=function(){
		BlogService.saveBlogPost($scope.blog)
		.then(function(response)
				{
			$scope.successMessage="Your blog is posted successfully and it is waiting for approval from admin";
			$location.path('/getAllBlogs')
		},function(response){
			console.log(response.status)
			$location.path('/login')
		})
	}

$scope.blogPosts=BlogService.getBlogPosts() //this will be called automatically
.then(function(response){
console.log(response.status)
console.log(response.data)
$scope.blogPosts=response.data
},function(response){
console.log(response.status)
console.log(response.data)
})
})