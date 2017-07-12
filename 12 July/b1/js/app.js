var app=angular.module('myapp',[]);
app.controller('Actrl',function($scope,$q,$http){
	var square=function(a){
		return a*a;
	}
	var asyncSquare=function(a){
		setTimeout(function(){
			console.log('calculated');
			return a*a;
		},1000);
	}
	
	
	var promisedSquare=function(a){
		return $q(function(resolve,reject){
			setTimeout(function(){
				if(a<0) reject('-ve not allowed');
				console.log('calculated');
				resolve(a*a);
			},1000);
		});
	}
	
	$scope.submitForm=function(){
		//console.log(asyncSquare($scope.num));
		//$scope.result=asyncSquare($scope.num);
		promisedSquare($scope.num).then(function(response){
			console.log(response);
			$scope.result=response;
		},function(response){
			alert(response);
		});
		
		$http({
			url:'http://api.fixer.o/latest'
		}).then(function(response){
			console.log(response.data);
		},function(response){
			console.log(response);
		});
	}
});