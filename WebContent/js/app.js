var phonecatApp = angular.module('phonecatApp', [ 'ngRoute',
		'associateWikiModule1' ]);

phonecatApp.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/empList', {
		templateUrl : 'partials/emp-list.html',
		controller : 'AssociateListCtrl'
	}).when('/empDetails', {
		templateUrl : 'partials/emp-detail.html',
		controller : 'AssociateDetailCtrl'
	}).otherwise({
		redirectTo : '/empList'
	});
} ]);