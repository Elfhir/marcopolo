'use strict';

(function() {

	var marcopoloApp = angular.module('marcopoloApp.ui.anchorscroll', ['duScroll']);

	/**
	 * @ngdoc function
	 * @name marcopoloApp.controller:NavigationCtrl
	 * @description
	 * # HomeCtrl
	 * Controller of the marcopoloApp doing the changement of color on links
	 * during navigation
	 */
	marcopoloApp.controller('AnchorScrollCtrl', function($scope, $document){
		$scope.toTheTop = function() {
			$document.scrollTopAnimated(0).then(function() {
				console && console.log('You just scrolled to the top!');
			});
		};
		var section2 = angular.element(document.getElementById('section-2'));
		$scope.toSection2 = function() {
			$document.scrollToElementAnimated(section2);
		}
	});

	marcopoloApp.value('duScrollOffset', 30);

})();