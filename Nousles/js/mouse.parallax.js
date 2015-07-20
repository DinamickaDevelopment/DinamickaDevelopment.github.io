(function ( $ ) { 
	$.fn.extend({
	
		mouseParallax: function(options) {
		
			var defaults = { moveFactor: 5,verticalFactor: 5, zIndexValue: "-1", targetContainer: 'body' };
		
			var options = $.extend(defaults, options);
		
			return this.each(function() {
				var o = options;
				var background = $(this);
				var Logo = $(o.LogoSelector);
				var timeMouse = null, timeScroll = null;
				//if (o.zIndexValue) {
				//        background[0].style.zIndex = o.zIndexValue;
				//}

				$(o.targetContainer).on('mousemove', function (e) {

				    mouseX = e.pageX;
				    mouseY = e.pageY;

				    windowWidth = $(window).width();
				    windowHeight = $(window).height();
                    //Calculating background value
				    percentX = ((mouseX / windowWidth) * o.moveFactor) - (o.moveFactor / 2);
				    percentY = ((mouseY / windowHeight) * o.moveFactor) - (o.moveFactor / 2);

				    leftString = (0 - percentX - o.moveFactor) + "%";
				    rightString = (0 - percentX - o.moveFactor) + "%";
				    //Calculating Logo value
				    var percentXLogo = ((mouseX / windowWidth) * o.LogoMoveFactor) - (o.LogoMoveFactor / 2);
				    var percentYLogo = ((mouseY / windowHeight) * o.LogoMoveFactor) - (o.LogoMoveFactor / 2);

				    var leftStringLogo = (0 - percentXLogo - o.LogoMoveFactor + 35) + "%";//we add 35% to get need position
				    var rightStringLogo = (0 - percentYLogo - o.LogoMoveFactor) + "%";

				    if (timeMouse)return;

				    timeMouse = setTimeout(function () {
				        Logo[0].style.left = leftStringLogo;
				        Logo[0].style.right = rightStringLogo;
				        background[0].style.left = leftString;
				        background[0].style.right = rightString;
				        timeMouse = null;
				    }, 100);
				    
				});

				$(window).on('scroll', function (e) {
				    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
				    windowHeight = $(window).height();
				    percentY = ((scrolled / windowHeight) * o.verticalFactor) - (o.verticalFactor / 2);

				    topString = (0 - percentY - o.verticalFactor) + "%";
				    bottomString = (0 - percentY - o.verticalFactor) + "%";

				    
				    if (timeScroll) return;

				    timeScroll = setTimeout(function () {
                    background[0].style.top = topString;
				    background[0].style.bottom = bottomString;
				    timeScroll = null;
				    },100);
				})
			});
		}					
	});
} (jQuery) );
