var associateWikiModule1 = angular.module('associateWikiModule1',
		[ 'associateWikiModule2' ]);

associateWikiModule1.controller('AssociateListCtrl', [ 'empDataProvider',
		'$scope', '$http', '$location',

		function(empDataProvider, $scope, $http, $location) {

			$scope.onRowclick = function(param) {
				empDataProvider.setDetails(param);

				$location.path('/empDetails');
			};

			$scope.persons = [ {
				id : '12',
				firstName : 'Vinod',
				lastName : 'Santhanam',
				emailId : 'vinod1.s@tcs.com',
				phoneNumber : 1234567891,
				location : 'Chennai'
			}, {
				id : 12,
				firstName : 'Ram',
				lastName : 'Vilas',
				emailId : 'vinod1.s@tcs.com',
				phoneNumber : 1234567891,
				location : 'Chennai'
			}, {
				id : 12,
				firstName : 'Ram',
				lastName : 'Christoper',
				emailId : 'vinod1.s@tcs.com',
				phoneNumber : 1234567891,
				location : 'Chennai'
			}, {
				id : 12,
				firstName : 'Seetha',
				lastName : 'James',
				emailId : 'vinod1.s@tcs.com',
				phoneNumber : 1234567891,
				location : 'Chennai'
			}, {
				id : 12,
				firstName : 'Hanuman',
				lastName : 'Christee',
				emailId : 'vinod1.s@tcs.com',
				phoneNumber : 1234567891,
				location : 'Chennai'
			}, {
				id : 12,
				firstName : 'Krishna',
				lastName : 'Thomas',
				emailId : 'vinod1.s@tcs.com',
				phoneNumber : 1234567891,
				location : 'Chennai'
			}, {
				id : 12,
				firstName : 'Bheema',
				lastName : 'Sopin',
				emailId : 'vinod1.s@tcs.com',
				phoneNumber : 1234567891,
				location : 'Chennai'
			}, {
				id : 12,
				firstName : 'Arjun',
				lastName : 'Kamal',
				emailId : 'vinod1.s@tcs.com',
				phoneNumber : 1234567891,
				location : 'Chennai'
			} ];

			/*
			 * $http.get('phones/phones.json').success(function(data) {
			 * $scope.phones = data; });
			 */

			$scope.orderProp = 'age';
		} ]);

associateWikiModule1.controller('AssociateDetailCtrl', [
		'empDataProvider',
		'$scope',
		'$routeParams',
		'$location',
		function(empDataProvider, $scope, $routeParams, $location) {
			$scope.showError = false;
			$scope.successMsg = false;
			$scope.assocaiateDetails = empDataProvider.getDetails();

			$scope.closeAlert = function() {
				$scope.showError = false;
				$scope.successMsg = false;
			};

			$scope.cancelClick = function() {
				if (confirm('Are you sure you want to close the window 1')) {
					$location.path('/empList');
				} else {
					// Do nothing!
				}

				
			};
			$scope.successMsg=false;
			$scope.showError=false;
			$scope.doSubmit = function() {
				alert("Details : " + angular.toJson($scope.assocaiateDetails));
				/*$http.post("http://52.4.159.148/helloslim.php/saveData/",
						angular.toJson($scope.assocaiateDetails)).success(
						function(response) { // alert("success "+ response);
							$scope.associateList = response;
							$scope.successMsg = true;
						}).error(function(response) {
					alert("error " + response);
					$scope.showError = true;
				});*/
				$scope.successMsg = true;
				alert ("Error Msg" +$scope.showError);
			};

		} ]);
