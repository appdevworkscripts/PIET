var app=angular.module('myapp',[]);

app.constant('API_PREFIX','https://zenways-contact.herokuapp.com/api/');
app.value('square',function(a){
	return a*a;
});

app.factory('MyMath',function($http,API_PREFIX){
	return {
		square:function(a){
			return a*a;
		},
		cube:function(a){
			return a*a*a;
		}
	}
});

app.service('MyMathService',function(){
	this.square=function(a){
		return a*a;
	}
	this.cube=function(a){
		return a*a*a;
	}
	
});

// {{input | rev}}
app.filter('rev',function(square){
	return function(input){
		console.log(square(7));
		return input.split("").reverse().join("");
	}
});


app.controller('Actrl',function($scope,$q,$http,API_PREFIX,MyMath){
	
	$scope.refresh=function(){
		$http({
			url:API_PREFIX+'contacts',
			headers:{
				key:'ABCD'
			}
		}).then(function(response){
			console.log(response);
			if(response.data.status){
				$scope.contacts=response.data.contacts;
			}else{
				alert(response.data.error);
			}
		},function(response){
			console.log(response);
			alert('Something went wrong!');
		});
	}
	
	$scope.refresh();
	$scope.num=7634785.773568734;
	$scope.amt=7634785.773568734;
	$scope.submitForm=function(){
		$http({
			url:API_PREFIX+'contact',
			headers:{
				key:'ABCD'
			},
			data:$scope.contact,
			method:'POST'
		}).then(function(response){
			if(response.data.status){
				alert('User was successfully Inserted');
				$scope.refresh();
				$scope.contact={};
			}else{
				alert(response.data.error);
			}
		},function(response){
			console.log(response);
			alert('Something went wrong!');
		});
	}
});

