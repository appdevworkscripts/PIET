var app=angular.module('myapp',[]);



app.controller('Actrl',function($scope,$rootScope){
	$scope.myclick=function(){
		alert('Hello');
	}
	//$scope.x=500;
	$rootScope.x=1000;
	console.log('Controller called');
});


app.run(function($rootScope){
	$rootScope.testClick=function(){
		alert('Test Click Called');
	}
	$rootScope.x=100;
	console.log('Run called');
});