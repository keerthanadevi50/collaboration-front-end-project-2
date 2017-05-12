app.factory('UserService',function($http){
	var userService={}
	var BASE_URL="http://localhost:8070/project2-backend(restfulcrud)/"
	
	userService.registerUser=function(user){
		return $http.post(BASE_URL+"/register",user);
	}
	
	userService.login=function(user){
		return $http.post(BASE_URL + "/login",user)
	}
	
	userService.updateUser=function(user){
		return $http.put(BASE_URL + "/update",user)
	}
	
	return userService;
})