$(document).ready(function() {

    var content = $('section.content');

    content.click(function() {
        content.this.toggleClass('clicked');
    });














    // scroll menu fixed
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 1) {
            $(".header-fixed").addClass("scrolling");
            $(".paging.content").addClass("scrolling");
        }
        if (scroll == 0) {
            $(".header-fixed").removeClass("scrolling");
            $(".paging.content").removeClass("scrolling");
        }
    });

    // send report

    $( ".sendreport" ).click(function() {
        $( ".sendbox" ).slideToggle( 200 );
    });

});
