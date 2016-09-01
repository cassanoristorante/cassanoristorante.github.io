
$(document).ready(function(){



/* ------ LOAD MENUS ON CLICK ------- */


/*  window.onload = function() {
    document.getElementsByClassName("menu-link");.onclick = function loadMenu(menu) {
        document.getElementById("menu-loader").innerHTML='<object type="type/html" data='+menu+'></object>';
	};

}; */

$(function() {
    var $menu = $('#menu-nav'), 
        $target = $('#target');

    $menu.on('click', '> a', function(event) {
        var $this = $(this);
        event.preventDefault();
        $target.load($this.attr('href'));
    });
});




});