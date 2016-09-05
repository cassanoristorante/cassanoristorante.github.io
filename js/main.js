
$(document).ready(function(){



/* ------ LOAD MENUS ON CLICK ------- */



/* var d = new Date();
var time = d.toLocaleTimeString();
console.log(time); */

var objDate = new Date();
var time = objDate.getHours();
console.log(time);

if (time > 16){
	$('#target').load('/lunch-menu.html');
} else if (time < 16){
	$('#target').load('/dinner-menu.html');
};


$('#lunch').click(function(link){
	
	$('#target').html('');
	$('#target').load('/lunch-menu.html');
	});

});

var link = $('.menu-link').data('link');

console.log(link);