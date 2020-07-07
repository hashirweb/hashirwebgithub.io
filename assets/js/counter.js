	/*------ Counter-section -------*/
	let nCount = selector => {
	$(selector).each(function () {
	$(this)
	.animate({
	Counter: $(this).text()
	}, {
	duration: 5000,
	easing: "swing",
	step: function (value) {
	$(this).text(Math.ceil(value));
	}
	});
	});
	};
	let a = 0;
	$(window).scroll(function () {
	let oTop = $(".fun-facts-area").offset().top - window.innerHeight;
	if (a == 0 && $(window).scrollTop() >= oTop) {
	a++;
	nCount(".funFact > h3");
	}
	});
	/*---End Counter-section ----*/