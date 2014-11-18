'use strict';

(function() {

	var marcopoloApp = angular.module('marcopoloApp.konamicode', []);

	/**
	* @ngdoc directive
	* @name marcopoloApp.directive:mpKonamiCode
	* @description
	* # mpKonamiCode
	*/
	marcopoloApp.directive('mpKonamiCode', [function () {
		return {
			restrict: 'A',
			link: function (scope, element) {

				var keys = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
				var i = 0;
				angular.element(document).keydown(function(e) {
					if(e.keyCode === keys[i++]) {
						if(i === keys.length) {
							angular.element(document).unbind('keydown');
								window.alert('lol');
							}
						}
						else {
							i = 0;
						}
					});

				element.on('$destroy', function() {

				});
			}	
		};
	}]);

})();