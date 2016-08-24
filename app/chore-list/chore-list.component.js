angular.
	module('choreList').
	component('choreList', {
		templateUrl: 'chore-list/chore-list.template.html',
		controller:  ['$http',
			function ChoreListController($http) {
				var self = this;
				$http.get('/chores/').then(function(response) {
					self.chores = response.data;
				});
			}
		]
		
	});