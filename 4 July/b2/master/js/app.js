var app=angular.module('myapp',[]);



app.controller('Actrl',function($scope){
	$scope.state=1;
	$scope.students=[];
	$scope.submitForm=function(){
		$scope.state==1&&$scope.students.push($scope.student);		
		$scope.student={};
		$scope.state=1;
	}
	$scope.deleteStudent=function(index){
		confirm('are you sure')&&$scope.students.splice(index,1);
	}
	$scope.editStudent=function(student){
		$scope.student=student;
		$scope.state=2;
	}
});

