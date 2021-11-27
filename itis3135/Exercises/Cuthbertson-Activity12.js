$(document).ready(function() {
    $("#slider").bxSlider({
		randomStart: true,
        auto: true,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 500,
        slideMargin: 20,
		moveSlides: 1,
		captions:true,
		speed:3000,
		pagerType:'short',
		pagerSelector:'#id_pager',
		
    });
});