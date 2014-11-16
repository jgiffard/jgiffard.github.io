$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

$(document).ready(function() {
    function setHeight() {
        var windowHeight = $(window).innerHeight();
        $('#title').css('min-height', windowHeight);
    };
    setHeight();

    function setTitle() {
        var windowHeight = $(window).innerHeight();
        $('.title').css('padding-top', 20);
        $('.subtitle').css('padding-bottom', 20);
        $('.titlebox').css('margin-top', windowHeight/2);
    }
    setTitle();

    function setArrow() {
        var windowHeight = $(window).innerHeight();
        $('#arrow').css('bottom', 20);
    }
    setArrow();
    $(window).resize(function() {
        setHeight();
        setTitle();
        setArrow();
    });

    function setNavbar(){
        if($(window).scrollTop() >=  $(window).innerHeight() && $("#navbar").css('display') == 'none'){
            $("#navbar").fadeIn( 1000 );
        } else if ($(window).scrollTop() <  $(window).innerHeight() && $("#navbar").css('display') == 'block'){
            $( "#navbar" ).fadeOut( 1000 );
        }
    }
    setNavbar();

    $( window ).scroll(function() {
        setNavbar();
    });
    $( "#navbar" ).css( "display", "none" );
    $('#arrow').addClass('animated bounce');
});

