
$(document).ready(function(){



/* ------ LOAD MENUS ON CLICK ------- */


/*  window.onload = function() {
    document.getElementsByClassName("menu-link");.onclick = function loadMenu(menu) {
        document.getElementById("menu-loader").innerHTML='<object type="type/html" data='+menu+'></object>';
	};

}; */

$(function() {

    $('.menu-link').click(function(event) {
        $event.preventDefault();
        ('#target').load($this.attr('href'));
        console.log('TITTIES');
    });
});




});