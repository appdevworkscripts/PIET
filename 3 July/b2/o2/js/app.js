var app=angular.module('myapp',[]);



app.controller('Actrl',function($scope){
	$scope.arr=[4,7,2,9,1];
	$scope.submitForm=function(){
		console.log($scope.contact);
	}
	$scope.students=[
		{name:'Pqr',roll:4},
		{name:'Xyz',roll:1},
		{name:'Mno',roll:5},
		{name:'abc',roll:7},
		{name:'rst',roll:3},
		{name:'Efg',roll:2},
	];
});

