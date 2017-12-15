$(document).ready(function() {

    $(".header-ico").click(function () {
        $(".menu").animate({width: 'toggle'});
        $(".menu").removeClass('hiden');
        $(".mobi-icons .ico-one").toggleClass('hider');
 		$(".mobi-icons .ico-two").toggleClass('hider');
 		$(".mobi-icons .ico-bg").toggleClass('fone-hide');
    });

    $(".social-block .left-part").click(function () {
		$(".social-block").toggleClass('open');
		$(".social-block .right-part").toggleClass('hide');
    });

	$("#menu-two").on("click",".anchor a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке

		//забираем идентификатор блока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		//alert(id);
			
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});

	$("#menu").on("click",".anchor a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке

		//забираем идентификатор блока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top-50;
		//alert(id);
			
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});


	$(".first-token").hover(function () {
	    $(".first-token .inner-image").toggleClass('hide');
	    $(".first-token .inner-text").toggleClass('hide');
    });

    $(".second-token").hover(function () {
	    $(".second-token .inner-image").toggleClass('hide');
	    $(".second-token .inner-text").toggleClass('hide');
    });

    $(".third-token").hover(function () {
	    $(".third-token .inner-image").toggleClass('hide');
	    $(".third-token .inner-text").toggleClass('hide');
    });

});
