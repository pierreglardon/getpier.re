$(document).ready(function() {

    var navLink = $('body > main > nav > ul > li > a'),
        navTile = $('body > main > section.content > section.tile');

    navLink.on( "click", function() {
        navTile.fadeOut(600);
        navTile.removeClass('tileOpen');
        navLink.removeClass('active');
        $(this).addClass('active');
        $(this.hash).toggleClass('tileOpen');
        $(this.hash).delay(600).fadeIn(600);
        $('body').addClass('tileOpen');
    });

});
