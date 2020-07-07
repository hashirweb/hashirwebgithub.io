(function($) {
	"use strict";
	$('#testimonial-slider').owlCarousel({
		margin: 30,
		loop:true,
		autoplay:true,
		autoplayTimeout:2000,
		autoplaySpeed:1000,
		autoplayHoverPause:true,
		responsiveClass:true,
		responsive:{
			0: {
				items: 1,
			},
			768: {
				items: 2,
			}
		}
		
	});


	$(document).ready(function(){
  $(".brand-carousel").owlCarousel({
	  	margin: 30,
		loop:true,
		autoplay:true,
		autoplayTimeout:2000,
		autoplaySpeed:1500,
		autoplayHoverPause:true,
		responsiveClass:true,
		nav:false,
		dots:false,
		responsive:{
			0: {
				items: 2,
			},
			768: {
				items: 4,
			}
		}
  });
});


	/*---- Scroll-arrow-up ----*/
	var amountScrolled = 200;
	var amountScrolledNav = 25;

	$(window).scroll(function() {
	  if ( $(window).scrollTop() > amountScrolled ) {
	    $('button.back-to-top').addClass('show');
	  } else {
	    $('button.back-to-top').removeClass('show');
	  }
	});

	$('button.back-to-top').click(function() {
	  $('html, body').animate({
	    scrollTop: 0
	  }, 800);
	  return false;
	});
	/*---- end-arrow-up ----*/



    /*---- Navbar-js-section ----*/
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if  (target.length) {
                    $('html, body').animate({
                        scrollTop: (target.offset().top - 50)
                    }, 1000, "easeInOutExpo");
                    return false;
                }
            }
        });

        // Closes responsive menu when a scroll trigger link is clicked
        $('.js-scroll-trigger').click(function() {
             $('.navbar-collapse').collapse('hide');
        });

        //add class into header menu
        $(window).on('scroll',function() {
            if ($(this).scrollTop() > 20){  
                $('.navbar-expand-lg').addClass("color-set");
                $('.navbar-brand img').attr('src', 'assets/images/skillhat-logo.png');
            }
            else{
                $('.navbar-expand-lg').removeClass("color-set");
                $('.navbar-brand img').attr('src', 'assets/images/skillhat-logo.png');
            }
    });
     /*----End Navbar-section ----*/ 


     // Disable form submissions if there are invalid fields
		(function() {
		  'use strict';
		  window.addEventListener('load', function() {
		    // Get the forms we want to add validation styles to
		    var forms = document.getElementsByClassName('needs-validation');
		    // Loop over them and prevent submission
		    var validation = Array.prototype.filter.call(forms, function(form) {
		      form.addEventListener('submit', function(event) {
		        if (form.checkValidity() === false) {
		          event.preventDefault();
		          event.stopPropagation();
		        }
		        form.classList.add('was-validated');
		      }, false);
		    });
		  }, false);
		})();


})(window.jQuery);




