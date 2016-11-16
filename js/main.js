
$(document).ready(function(){


/* ------ LOAD LUNCH OR DINNER MENU BASED ON TIME OF DAY ------- */

var objDate = new Date();
var time = objDate.getHours();
console.log(time);

if (time < 16){
	$('#target').load('/lunch-menu.html');
} else if (time > 16){
	$('#target').load('/dinner-menu.html');
};


// LOAD MENUS ON CLICK

$('.menu-link').click(function(){
	$('#target').html('');
	var whichMenu = event.target.id;
	console.log(whichMenu);
	if (whichMenu == 'lunch'){
		$('#target').load('/lunch-menu.html');
	} else if (whichMenu == 'dinner'){
		$('#target').load('/dinner-menu.html');
	} else if (whichMenu == 'bar'){
		$('#target').load('/bar-menu.html');
	} else if (whichMenu == 'catering'){
		$('#target').load('/catering-menu.html');
	} else{
		$('#target').load('/wine-menu.html');
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


// NAV LOGO APPEARS AFTER SCROLL PAST MAIN LOGO

$(".site-logo").hide(); // hide the fixed navbar initially

var topofDiv = $(".main-logo-holder").offset().top; //gets offset of header
var height = $(".main-logo-holder").outerHeight(); //gets height of header

$(window).scroll(function(){
    if($(window).scrollTop() > (topofDiv + height)){
       $(".site-logo").show(800);
    }
    else{
       $(".site-logo").hide(800);
    }
});



});