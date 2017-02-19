
$(document).ready(function(){


// CASSANO LINK ONCLICK SCROLL TO TOP

$('.site-title').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
});

/* ------ LOAD LUNCH OR DINNER MENU BASED ON TIME OF DAY ------- */

var objDate = new Date();
var time = objDate.getHours();
console.log(time);

if (time < 16){
	$('#target').load('/lunch-menu.html');
  $('#lunch').addClass('activated');
} else if (time >= 16){
	$('#target').load('/dinner-menu.html');
  $('#dinner').addClass('activated');
};


// LOAD MENUS ON CLICK

$('.menu-link').click(function(){
	$('#target').html('');
	var whichMenu = event.target.id;
	console.log(whichMenu);
	if (whichMenu == 'lunch'){
		$('#target').load('/lunch-menu.html');
    $(this).addClass('activated');
    $(this).siblings().not(this).removeClass('activated');
	} else if (whichMenu == 'dinner'){
		$('#target').load('/dinner-menu.html');
    $(this).addClass('activated');
    $(this).siblings().not(this).removeClass('activated');
	} else if (whichMenu == 'bar'){
		$('#target').load('/bar-menu.html');
    $(this).addClass('activated');
    $(this).siblings().not(this).removeClass('activated');
	} else if (whichMenu == 'catering'){
		$('#target').load('/catering-menu.html');
    $(this).addClass('activated');
    $(this).siblings().not(this).removeClass('activated');
	} else{
		$('#target').load('/wine-menu.html');
    $(this).addClass('activated');
    $(this).siblings().not(this).removeClass('activated');
	}
 });

$(window).on('load', function() {
	$('#grid').masonry({
  	// options
 	 itemSelector: '.grid-item'
	});
});

$('.hamburger').click(function(){
	$('.mobile-nav').animate({width:'toggle'},500);
	$(this).css('display', 'none');
	$('.close').css('display', 'inline-block');
});

$('.close').click(function(){
	$('.mobile-nav').animate({width:'toggle'},500);
	$(this).css('display', 'none');
	$('.hamburger').css('display', 'inline-block');
});

$('.m-nav-link').click(function(){
	$('.mobile-nav').animate({width:'toggle'},500);
	$('.close').css('display', 'none');
	$('.hamburger').css('display', 'inline-block');
});


// ACTIVE STATE TRIGGER FOR NAV LINKS

$(window).scroll(function(){
  if($(window).scrollTop() == 
})



// NAV LOGO APPEARS AFTER SCROLL PAST MAIN LOGO

  // hide the fixed navbar initially, only if the scroll top is above the main logo

 if($(window).scrollTop() < (topofDiv)){
       $(".site-logo").css('display', 'none');
    }
    else{
    }

var topofDiv = $(".main-logo-holder").offset().top; //gets offset of header

function slider() {
    if($(window).scrollTop() > (topofDiv)){
       $(".site-logo").fadeIn(600);
    }
    else{
       $(".site-logo").fadeOut(600);
    }
}

$(window).scroll(function () {
    slider();
});

slider();



// SMOOTH SCROLL FUNCTIONALITY


  $('a[href*="#"]:not([href="#"])').click(function() {


  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);

    if ($(this).offset().top - target.offset().top > '800' || $(this).offset().top - target.offset().top < "-800"){
    	var scrollSpeed = 1500;
    } else {
    	var scrollSpeed = 1000;
    }

    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top - 100
      }, scrollSpeed);
      return false;
    }
  }
  $(this).addClass('activate');
  $(this).siblings().not(this).removeClass('activated');

});



});