var app=angular.module("myApp",['ngRoute'])
app.config(function($routeProvider){
	console.log('entering configuration')
	$routeProvider
	.when('/login',{
		controller:'UserController',
		templateUrl:'_user/login.html'
	})
	.when('/home',{
		templateUrl:'_home/home.html'
	})
	.when('/register',{
		controller:'UserController',
		templateUrl:'_user/register.html'
	})
	.when('/postJob',{
		controller:'JobController',
		templateUrl:'_job/createJob.html'
	})
	
	.when('/getAllJobs',{
		controller:'JobController',
		templateUrl:'_job/jobTitles.html'
			
	})
})

