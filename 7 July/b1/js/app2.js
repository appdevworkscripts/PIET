
app.controller('formController',function($scope,$rootScope){
	$scope.state=1;
	$scope.myfunction=function(){
		console.log($scope.contact);
	}
	$scope.submitForm=function(){
		$scope.state=2;
		console.log($scope.contact);
		$rootScope.state=2;
		$rootScope.contact=$scope.contact;
	}
});