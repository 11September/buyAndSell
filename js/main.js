$(document).ready(function() {

    $(".header-ico").click(function () {
        $(".menu").animate({width: 'toggle'});
        $(".menu").removeClass('hiden');
        $(".mobi-icons .ico-one").toggleClass('hider');
 		$(".mobi-icons .ico-two").toggleClass('hider');
    });

});
