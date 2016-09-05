
$(document).ready(function(){



/* ------ LOAD LUNCH OR DINNER MENU BASED ON TIME OF DAY ------- */

var objDate = new Date();
var time = objDate.getHours();
console.log(time);

if (time > 16){
	$('#target').load('/lunch-menu.html');
} else if (time < 16){
	$('#target').load('/dinner-menu.html');
};


/* ------- LOAD MENUS ON CLICK ------- */


$('.menu-link').click(function(link){
	$('#target').html('');
	var whichMenu = event.target.id;
	console.log(link);
	if (link == 'lunch'){
		$('#target').load('/lunch-menu.html');
	} else if (link == 'dinner'){
		$('#target').load('/dinner-menu.html');
	} else if (link == 'bar'){
		$('#target').load('/bar-menu.html');
	} else if (link == 'catering'){
		$('#target').load('/catering-menu.html');
	} else{
		$('#target').load('/wine-menu.html');
	}
 });

});