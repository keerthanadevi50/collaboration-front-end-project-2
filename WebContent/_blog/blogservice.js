app.factory('BlogService',function($http){
	var blogService={}
	var BASE_URL="http://localhost:8070/project2-backend(restfulcrud)/"
	
	blogService.saveBlogPost=function(blog){
		return $http.post(BASE_URL + "/saveBlogPost",blog)
	}	
	blogService.getBlogPosts=function(){
		return $http.get('http://localhost:8070/project2-backend(restfulcrud)/list')
		}

		
	return blogService;
})
