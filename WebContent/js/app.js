var app=angular.module("app",['ngRoute','ngCookies'])

app.config(config)

config.$inject = ['$routeProvider'];

function config($routeProvider){
	$routeProvider
	.when('/register',{
		templateUrl:'_user/registerUser.html',
		controller:'UserController',
		
	})
	.when('/login',{
		templateUrl:'_user/login.html',
		controller:'UserController'
	})
	.when('/home',{
		templateUrl:'_home/home.html'
	})
	.when('/addJob',{
    	templateUrl:'_job/jobform.html',
    	controller:'JobController'
    })
    .when('/getAllJobs',{
    	templateUrl:'_job/jobtitles.html',
    	controller:'JobController'
    })
.when('/blogform',{
controller:'BlogController',
templateUrl:'_blog/blogform.html'
})
.when('/getBlogDetail/:id',{
controller:'BlogDetailController',
templateUrl:'_blog/getBlogDetail.html'
})
}


app.run(function($rootScope,$cookieStore,UserService,$location){
	console.log('entering run method ')
	console.log($rootScope.currentUser)
	if($rootScope.currentUser==undefined){
		$rootScope.currentUser=$cookieStore.get("currentUser")
		console.log($rootScope.currentUser)
	}
	$rootScope.logout=function(){
		console.log('logout function')
		delete $rootScope.currentUser;
		$cookieStore.remove('currentUser')
		UserService.logout()
		.then(function(response){
			console.log("logged out successfully..");
			$rootScope.message="Loggedout Successfully"
			$location.path('/login')
		},
		function(response){
			console.log(response.status);
		})
	}
})