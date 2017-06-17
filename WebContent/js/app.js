var app=angular.module("app",['ngRoute','ngCookies'])

app.config(config)
app.run(run);
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
	.when('/',{
		templateUrl:'_home/home.html'
	})
	.when('/home',{
		templateUrl:'_home/home.html'
	})
	.when('/OurStory',{
		templateUrl:'_home/pug.html'
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
.when('/getAllBlogs',{
controller:'BlogController',
templateUrl:'_blog/blogList.html'
})
.when('/getBlogDetail/:id',{
controller:'BlogDetailController',
templateUrl:'_blog/getBlogDetail.html'
})
/*.when('/getBlogForApproval/:id',{
    	templateUrl:'_blog/getBlogForApproval.html',
    	controller:'BlogDetailController'
    })*/
    /*.when('/getAllUsers',{
    	templateUrl:'_friend/userslist.html',
    	controller:'FriendController'
    })
    .when('/pendingRequests',{
    	templateUrl:'_friend/pendingRequests.html',
    	controller:'FriendController'
    })*/

.when('/profilepicture',{
		templateUrl:'_user/profilepicture.html'
	})
	.when('/edituser',{
    	templateUrl:'_user/edituserform.html',
    	controller:'EditController'
    })
    .when('/getAllUsers',{
    	templateUrl:'_friend/userslist.html',
    	controller:'FriendController'
    })
     .when('/pendingRequests',{
    	templateUrl:'_friend/pendingrequest.html',
    	controller:'FriendController'
    })
     
    .when('/listoffriends',{
    	templateUrl:'_friend/friendlist.html',
    	controller:'FriendController'
    })
}

run.$inject = ['$rootScope', '$cookieStore', 'UserService', '$location'];
function run($rootScope,$cookieStore,UserService,$location){
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
}