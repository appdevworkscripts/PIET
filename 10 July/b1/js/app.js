var app=angular.module('myapp',[]);

app.controller('FormController',function($scope){
	$scope.submitForm=function(){
		
		console.log($scope.contact);
	}
});