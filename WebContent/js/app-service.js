
var associateWikiModule2 = angular.module('associateWikiModule2', []);

associateWikiModule2.service('empDataProvider', function() {

	this.setDetails = function(param) {
		this.empDetails = param;
	};

	this.getDetails = function() {
		return this.empDetails;
	};

});
