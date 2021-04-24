$(document).ready(function(){
	
	$(window).scroll(function(){
		
		var scrol = $(window).scrollTop();
		
		if(scrol > 1000){
			
			$(".scroll1").fadeIn()
			
		}else{
			
			$(".scroll1").fadeOut()
		}
		if(scrol >= 900){
			
			$(".fix").slideDown()
			
		}else{
			
			$(".fix").slideUp()
		}
	});
//############################################
	$(".scroll1").on("click" , function(){
		
		$("body , html").animate({
			
			scrollTop : 0
		},1000)
	});
//###########################################
    $("nav .info1 ul li a").on("click" , function(){
		$(this).parent().addClass("active1").siblings().removeClass("active1")
	})
//############################################
    $(".fa-times").css("display","none");
	
	$(".fa-chess-board").on("click" , function(){
		
		$(".fa-chess-board").hide();
		
		$(".fa-times").slideDown();
	});
	
	$(".fa-times").on("click" , function(){
		
		$(".fa-times").css("display","none");
		
		$(".fa-chess-board").slideDown();
	});
//##########################################
    var winH = $(window).height(),
	
	    navH = $(".nav1").innerHeight();
		
	$(".slider1 .carousel-item").height(winH - navH)
	
	$(window).on("resize" , function(){
		
		var winH = $(window).height(),
		
	    navH = $(".nav1").innerHeight();
		
	$(".slider1 .carousel-item").height(winH - navH)
	});
//###########################################
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});
});