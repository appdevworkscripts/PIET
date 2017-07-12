var app=angular.module('myapp',[]);

app.controller('FormController',function($scope){
	$scope.arr=[3,6,8,9,10,11,34,23];
	$scope.students=[
		{name:'Pqr',roll:4},
		{name:'Xyz',roll:1},
		{name:'Mno',roll:5},
		{name:'abc',roll:7},
		{name:'rst',roll:3},
		{name:'Efg',roll:2},
	];
	
	$scope.x={
		a:1,
		b:4,
		c:'hello',
		d:'bye'
	}
	
});