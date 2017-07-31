var app = angular.module('myapp', []);
app.constant('API_PREFIX', 'https://zenways-contact.herokuapp.com/api/');
app.constant('API_KEY', 'ABCD');
app.value('sum', function (a, b) { return a + b });

app.factory('ContactApi', function ($http, API_PREFIX, API_KEY) {
	return {
		getAllContacts: function () {
			return $http({
				url: API_PREFIX + 'contacts',
				headers: {
					key: API_KEY
				}
			})
		},
		createContact: function (contact) {
			return $http({
				url: API_PREFIX + 'contact',
				method: 'POST',
				headers: {
					key: API_KEY
				},
				data: contact
			})
		},
		square: function (a) {
			return a * a;
		},
		d: Math.random()
	}
});

app.service('ContactApiService', function ($http, API_PREFIX, API_KEY) {
	this.getAllContacts = function () {
		return $http({
			url: API_PREFIX + 'contacts',
			headers: {
				key: API_KEY
			}
		})
	};
	this.d=Math.random()
});

// my-directive
app.directive('myDirective',function(){
	return {
		template:'<span>Hello {{x}}</span>',
		restrict:'E',
		replace:true,
		scope:{
			x:'@'

		}
	}
});

app.directive('myDirective2',function(){
	return {
		templateUrl:'directives/mydirective2.html',
		restrict:'E',
		replace:true,
		scope:{
			contact:'=c'
		},
		controller:function($scope){
			$scope.show=function(){
				alert('Hello' + $scope.contact.name)
			}
		}
	}
});

app.controller('Actrl', function ($scope, sum, ContactApi) {
	console.log(sum(7, 8));
	$scope.x=1000;
	$scope.refresh = function () {
		ContactApi.getAllContacts().then(function (response) {
			console.log(response);
			if (response.data.status) {
				$scope.contacts = response.data.contacts;
			} else {
				alert('Data was not fetched');
			}
		}, function (response) {
			alert('Something went wrong')
		});
	}
	$scope.refresh();
	$scope.submitForm = function () {
		ContactApi.createContact($scope.contact).then(function (response) {
			console.log(response);
			if (response.data.status) {
				$scope.refresh();
				alert('Successfully Added');
				$scope.contact = {};
			} else {
				alert('Data was not fetched');
			}
		}, function (response) {
			alert('Something went wrong')
		});
	}
});