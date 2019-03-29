let $ = require('jquery');
window.$ = $;
window.jQuery = $;
require('angular')
require('froala-editor/js/froala_editor.min.js');
require('./angular-froala')


var myApp = angular.module('myApp', ['froala']).
	value('froalaConfig', {
		placeholderText: 'Edit Your Content Here!'
	});

	//create the controller and inject Angular's $scope
	myApp.controller('mainController', ['$scope',function($scope) {

		$scope.titleOptions = {
			placeholderText: 'Add a Title',
			events: {
				'froalaEditor.initialized': function() {
					console.log('initialized');
				}
			}
		};
		$scope.sampletext="";
		$scope.initialize = function(initControls) {
			$scope.initControls = initControls;
			$scope.deleteAll = function() {
				initControls.getEditor()('html.set', '');
			};
		};
	}]);


