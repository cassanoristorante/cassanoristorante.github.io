
$(document).ready(function(){



/* ------ LOAD MENUS ON CLICK ------- */



var d = new Date();
var time = d.toLocaleTimeString();
console.log(time);


$('#lunck').click(function(){
	$('#target').load('/lunch-menu.html');

	});

});