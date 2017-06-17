app.factory('BlogService',function($http){
	var blogService={}
	var BASE_URL="http://localhost:8070/project2_backend/"
	
	blogService.saveBlogPost=function(blog){
		return $http.post(BASE_URL + "/saveBlogPost",blog)
	}	
	blogService.getBlogPosts=function(){
		return $http.get('http://localhost:8070/project2_backend/list')
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
	/*blogService.getAllBlogsForApproval=function(blogPostId){
		return $http.get(BASE_URL + "/getAllBlogsForApproval/"+blogPostId)
	}*/
	blogService.updateApproval=function(blogPost){
		return $http.put(BASE_URL + "/updateApproval",blogPost)
	}
	/*blogService.updateApproval=function(blogPost){
		return $http.put(BASE_URL + "/approvedBlogPosts",blogPost)
	}*/
	blogService.notApprovedPost=function(blogPost){
		return $http.put(BASE_URL + "/notapprovedBlogPosts",blogPost)
	}
	blogService.approvedPost=function(blogPost){
		return $http.put(BASE_URL + "/approvedBlogPosts",blogPost)
	}
	
		
	return blogService;
})
