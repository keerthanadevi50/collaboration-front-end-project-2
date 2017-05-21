app.factory('BlogService',function($http){
	var blogService={}
	var BASE_URL="http://localhost:8070/project2-backend(restfulcrud)/"
	
	blogService.saveBlogPost=function(blog){
		return $http.post(BASE_URL + "/saveBlogPost",blog)
	}	
	blogService.getBlogPosts=function(){
		return $http.get('http://localhost:8070/project2-backend(restfulcrud)/list')
		}
	blogService.getBlogDetail=function(id){
		return $http.get(BASE_URL +"/get/"+id) 
	}
	blogService.addBlogComment=function(blogComment){
		return $http.post(BASE_URL + "/addComment",blogComment)
	}
	
	blogService.getBlogComments=function(blogPostId){
		return $http.get(BASE_URL + "/getBlogComments/"+blogPostId)
	}
	blogService.updateApproval=function(blogPost){
		return $http.put(BASE_URL + "/updateApproval",blogPost)
	}
	
		
	return blogService;
})
