'use strict';

(function() {

	var marcopoloApp = angular.module('marcopoloApp.ui.anchorscroll', ['duScroll']);

	/**
	 * @ngdoc function
	 * @name marcopoloApp.controller:AnchorScrollCtrl
	 * @description
	 * # AnchorScrollCtrl
	 * Controller of the marcopoloApp doing the changement smooth croll on anchors navigation
	 * 
	 */
	marcopoloApp.controller('AnchorScrollCtrl', function($scope, $document){
		$scope.toTheTop = function() {
			$document.scrollTopAnimated(0);
		};
		var section2 = angular.element(document.getElementById('section-2'));
		$scope.toSection2 = function() {
			$document.scrollToElementAnimated(section2);
		};
	});

	marcopoloApp.value('duScrollOffset', 30);

})();