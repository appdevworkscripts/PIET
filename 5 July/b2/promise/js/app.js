var app=angular.module('myapp',[]);



app.controller('Actrl',function($scope,$q,$http){
	
	
	
	
	
	
	var square=function(a){
		return a*a;
	}
	var asyncSquare=function(a){
		setTimeout(function(){
			console.log('Calculated');
			return a*a;
		},2000);
	}
	
	var promisedSquare=function(a){
		return $q(function(resolve,reject){			
			setTimeout(function(){
				if(a<0) reject('-ve not allowed');
				console.log('Calculated');				
				resolve(a*a);				
			},2000);			
		});
	}
	$http({
			url:'http://api.fixer.io/latest',
			params:{
				base:'INR',
				symbols:''
			}
	}).then(function(response){
		$scope.currencies=response.data.rates;
		console.log($scope.currencies);
	},function(response){
		console.log(response);
	});
	$scope.submitForm=function(){
		/*
		promisedSquare($scope.num).then(function(response){
			$scope.result=response;
		},function(response){
			$scope.result="Error " +response;
		});		
		*/
		/*
		$http({
			url:'http://api.fixer.io/latest'
		}).then(function(response){
			console.log(response.data.rates.INR);
			$scope.result=response.data.rates.INR*$scope.num;
		},function(response){
			console.log(response);
		});
		*/
		$scope.result=$scope.selectedCurrency*$scope.num;
	}
});

