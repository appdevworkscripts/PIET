var app=angular.module('myapp',['externalModule','ui.bootstrap']);
var myModule=angular.module('externalModule',[]);
myModule.factory('Test',function(){
	return {
		square:function(a){
			return a*a;
		}
	}
});
app.run(function($rootScope,Test){
	console.log(Test.square(7));
	$rootScope.arr=[1,2,3,5,6,4];
})
// xYzA  -> X-YZ-A
// my-directive
app.directive('myDirective',function(){
	return {
		template:'<span>Hello {{4+5}}</span>',
		restrict:'E',
		replace:true
	}
});

app.controller('Actrl',function($scope){
	$scope.myvar=500;
	$scope.c1={
		phone:'3457345',
		email:'a@k.cm'
	}
	$scope.opt={
		 minDate: new Date()
	}
});
//sudo npm install --global http-server
app.directive('myTest',function(){
	return {
		templateUrl:'directives/my-test.html',
		restrict:'E',
		replace:true,
		scope:{
			 x:'@name',
			 contact:'=myContact'
		},
		controller:function($scope,$rootScope,$http){
			$scope.testFn=function(){
				alert($scope.x);
			}
		}
	}
});