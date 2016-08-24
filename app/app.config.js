angular.
	module('choresApp').
	config(['$locationProvider', '$routeProvider', 
		function config($locationProvider, $routeProvider) {
			$routeProvider.
			when('/chores', {
				template: '<chore-list></chore-list>'
			}).
			otherwise('/chores');
		}
	]);