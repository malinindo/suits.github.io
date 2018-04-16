
$(document).ready(function(){

	// Цели для яндекс метрики
	
	var example = location.href.split('#');	
	
	if( example[1] ){
		if( example[1] == 'phonecall-thanks' ){ yaCounter35426495.reachGoal('OBRAT_ZVONOK'); 	}	
	}
	if( example[1] ){
		if( example[1] == 'consultate-thanks' ){ yaCounter35426495.reachGoal('CONSULTATION'); }	
	}
	if( example[1] ){
		if( example[1] == 'bankruptcy-thanks' ){ yaCounter35426495.reachGoal('BFL_CONS'); }	
	}
	if( example[1] ){
		if( example[1] == 'service-thanks' ){ yaCounter35426495.reachGoal('SERVICE_CONS'); }	
	}
	if( example[1] ){
		if( example[1] == 'costs-thanks' ){ yaCounter35426495.reachGoal('RASXODI_CONS'); }	
	}
	if( example[1] ){
		if( example[1] == 'lawyer-consultate' ){ yaCounter35426495.reachGoal('PRED_CONS'); }	
	}
	if( example[1] ){
		if( example[1] == 'cleansheet-consultate' ){ yaCounter35426495.reachGoal('CONS_POSLE'); }
	}	
	if( example[1] ){
		if( example[1] == 'call-thanks' ){ yaCounter35426495.reachGoal('ZVONOK'); }	
	}

	
	//$( ".close2" ).click(function() {
		//var otv = closses();
		//if( otv == 'ok'){
			//return true;
		//} else {
			//return false;
		//}
	//});
	

    var mobileMenu = false;
     //MobileMenu open
    $( ".cross" ).hide();
    $( ".mobile-menu" ).hide();
    $( ".hamburger" ).click(function() {
        $( ".mobile-menu" ).slideToggle( "slow", function() {
            $( ".hamburger" ).hide();
            $( ".cross" ).show();
        });
    });
     //MobileMenu close
    $( ".cross" ).click(function() {
        $( ".mobile-menu a" ).slideToggle( "slow", function() {
            $( ".cross" ).hide();
            $( ".hamburger" ).show();
        });
    });
    //MobileMenu link close
    $( ".mobile-menu a" ).click(function() {
        $( ".mobile-menu" ).slideToggle( "slow", function() {
            $( ".cross" ).hide();
            $( ".hamburger" ).show();
        });
    });
    $(function(){
        $(window).scroll(function() {
            if($(this).scrollTop() >= 130) {
                $('.top-menu').addClass('stickytop');
            }
            else{
                $('.top-menu').removeClass('stickytop');
            }
        });
    });
    $(function(){
        $(window).scroll(function() {
            if($(this).scrollTop() >= 50) {
                $('.mobile-menu-container').addClass('stickytop');
            }
            else{
                $('.mobile-menu-container').removeClass('stickytop');
            }
        });
    });
    $(function() {
    var windowHeight2 = $(window).height();
    var pathHeight2 = $('.path-active-mobile').height();
        $(window).resize(function() {
            windowHeight2 = $(window).height();
        });
        $(window).scroll(function() {
            var activePathHeight2 = $(window).scrollTop() - $('.path-out-mobile').offset().top + windowHeight2 / 2;
            $('.path-active-mobile').height(activePathHeight2 < pathHeight2 ? activePathHeight2 : pathHeight2);
    $('.mobile-menu-container').css(
                'margin-left', -$(window).scrollLeft() + 'px'
            );


        });
    });
    
    $('.top-menu').singlePageNav();
    $(function() {
    var windowHeight = $(window).height();
    var pathHeight = $('.path-active').height();
        $(window).resize(function() {
            windowHeight = $(window).height();
        });
        $(window).scroll(function() {
            var activePathHeight = $(window).scrollTop() - $('.path-out').offset().top + windowHeight / 2;
            $('.path-active').height(activePathHeight < pathHeight ? activePathHeight : pathHeight);
    $('.top_menu').css(
                'margin-left', -$(window).scrollLeft() + 'px'
            );


        });
    });
    //ancLinks
    $("a.ancLinks").click(function () { 
      var elementClick = $(this).attr("href");
      var destination = $(elementClick).offset().top;
      $('html,body').animate( { scrollTop: destination }, 1100 );
      return false;
    });
    $('#recomend-carousel').carousel();
    $('#press-carousel').carousel();
    $("input[name=phone]").inputmask("+9(999)999-99-99");
});


function closses(){

	// Цели для яндекс метрики
	
	var example = location.href.split('#');	
	
	if( example[1] ){
		if( example[1] == 'phonecall-thanks' ){ yaCounter35426495.reachGoal('OBRAT_ZVONOK'); }	
	}
	if( example[1] ){
		if( example[1] == 'consultate-thanks' ){ yaCounter35426495.reachGoal('CONSULTATION'); }	
	}
	if( example[1] ){
		if( example[1] == 'bankruptcy-thanks' ){ yaCounter35426495.reachGoal('BFL_CONS'); }	
	}
	if( example[1] ){
		if( example[1] == 'service-thanks' ){ yaCounter35426495.reachGoal('SERVICE_CONS'); }	
	}
	if( example[1] ){
		if( example[1] == 'costs-thanks' ){ yaCounter35426495.reachGoal('RASXODI_CONS'); }	
	}
	if( example[1] ){
		if( example[1] == 'lawyer-consultate' ){ yaCounter35426495.reachGoal('PRED_CONS'); }	
	}
	if( example[1] ){
		if( example[1] == 'cleansheet-consultate' ){ yaCounter35426495.reachGoal('CONS_POSLE'); }
	}	
	if( example[1] ){
		if( example[1] == 'call-thanks' ){ yaCounter35426495.reachGoal('ZVONOK'); }	
	}
   
	return 'ok';
	////////////////////////////////////////////////////////////////////////////////////////////

}
