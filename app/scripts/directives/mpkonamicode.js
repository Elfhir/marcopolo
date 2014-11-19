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
				var easter_egg = '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"><div class="row">'+
					'<div class="vert-offset-top-5 center-block text-center">'+
					'<iframe width="420" height="345" src="http://www.youtube.com/embed/oHg5SJYRHA0?autoplay=1" frameborder="0" allowfullscreen></iframe>'+
					'<button type="button" class="mp-konami-leave btn btn-primary btn-lg vert-offset-top-1 vert-offset-bottom-5 center-block">Retour au site</button>'+
					'</div></div></div>';

	

				angular.element(document).keydown(function(e) {
					if(e.keyCode === keys[i++]) {
						if(i === keys.length) {

							angular.element(document).unbind('keydown');

							console.dir(element);

							var content_saved = angular.copy(element.children().html());
							console.log(element.children().html());

							element.children().fadeOut('slow', 'linear', function() {
							});

							element.append(easter_egg);

							angular.element('.mp-konami-leave').bind('click', function(el) {
								console.dir(el);
								angular.element(element.children()).remove();
								angular.element(element).append(content_saved);
							});
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