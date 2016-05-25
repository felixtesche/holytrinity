/* GLOBAL VARIABLES */
var scrollTop, scrollBottom = false;
var flag = 0;


/*****************************************************/
/* GENERAL FUNCTIONS */
/*****************************************************/
// jQuery to collapse the navbar on scroll
$(window).scroll(function () {
    if ($(".navbar").offset().top > 150) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click();
});


// Document ready
$(document).ready(function () {
    resizeVideo();
    resizeBigBlock();
    animationTimeline();
    setDataOffsetTop();
    HolyTrinityInitializer();
});


// Window resize
$(window).on("resize", function () {
    resizeVideo();
    resizeBigBlock();
    setDataOffsetTop();
});

function HolyTrinityInitializer() {
    $("#wrapper").show();

    $('.navbar-default').show();

    $(".instruction").click(function () {
        //$(this).fadeOut(300);
        $('.instruction').fadeOut(300);
        return false;
    });
    
    $('.slick').slick({
        speed: 500,
        touchThreshold: 4,
        prevArrow: "<div class='slickPrev'><i class='fa fa-angle-left'></i></div>",
        nextArrow: "<div class='slickNext'><i class='fa fa-angle-right'></i></div>"
    });

    if (window.location.hash && window.location.hash.length == 6 && window.location.hash.substring(1, 6) == "terms") {
        jQuery(".show-content").trigger("click");
    }

    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    $('.navbar-lower').affix({
        offset: {
            top: 50
        }
    });
}



/*****************************************************/
/* NAVBAR AFFIX FUNCTIONS*/
/*****************************************************/
/* function that makes the navbar affix for product nav dynamic */
function setDataOffsetTop() {
    var offset = $('.tabs').offset().top - $('#productsnavi').height();
    $('#productsnavi').affix({
        offset: {
            top: offset
        }
    });
}

$(window).scroll(function (event) {
    if ($(window).scrollTop() > $('#affix-destroy').offset().top - 220) {
        if (flag % 2 == 0) {
            setAnimationToElement('#productsnavi', 'animated fadeOut', 'none');
            flag++;
        }
    }
    else if(flag % 2 != 0){
        setAnimationToElement('#productsnavi', 'animated fadeIn', 'block');
        flag++;
    }
});



/*****************************************************/
/* NEWSLETTER FUNCTIONS */
/*****************************************************/
/* NEWSLETTER TRIGGERS */
function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    );
}

$(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() == getDocHeight()) {
        scrollBottom = true;
    }
    if ($(window).scrollTop() == 0) {
        scrollTop = true;
    }
    if (scrollTop == true && scrollBottom == true) {
        $('#newsletter').modal('toggle');
        scrollTop = false;
        scrollBottom = false;
    }
});


/*****************************************************/
/*ANIMATION FUNCTIONS*/
/*****************************************************/
//GENERAL ANIMATION FUNCION
function setAnimationToElement(currentElement, anim, display) {
    $(currentElement).addClass(anim).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd onanimationend animationend', function () {
        if(currentElement == '#productsnavi'){
            if(display == 'none'){
                $(currentElement).css('opacity', '0');    
            }
            else{
                $(currentElement).css('opacity', '1');    
            }
            
        }
        $(currentElement).removeClass(anim);
    });
}

function setAnimationToElementOUT(currentElement, anim, display) {
    /* ADD ANIMATION WITH CLASS DESTROY WHEN ANIMATION IS DONE */
    $(currentElement).addClass(anim).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd onanimationend animationend', function () {
        $(currentElement).removeClass(anim);
        $('.craft-headline h3').text("");
        $('.craft-subheadline h3').text("");
        $('.craft-text p').text("");
    });
}

/* SPECIFIC ANIMATION SCRIPTS */
//CITY ANIMATION
function animationTimeline() {
    setImageBerlin();
    $('.craft-headline h3').text("BERLIN");
    $('.craft-subheadline h3').text("PRODUCTION");
    $('.craft-text p').text("In Berlin sitzt unsere Produktionsfirma, welche mit Schweiß, Blut und hoher Konzentration unsere Ideen zusammenschustert und so Wirklichkeit werden lässt.");
    setAnimationToElement('.craft-headline', 'animated fadeIn');
    setAnimationToElement('.craft-subheadline', 'animated fadeInUp');
    setAnimationToElement('.craft-text', 'animated fadeInUp');
    setTimeout(function () {
        setAnimationToElementOUT('.craft-headline', 'animated fadeOut');
        setAnimationToElementOUT('.craft-subheadline', 'animated fadeOutDown');
        setAnimationToElementOUT('.craft-text', 'animated fadeOutDown');
        setTimeout(function () {
            setImageDresden();
            setAnimationToElement('.craft-headline', 'animated fadeIn');
            setAnimationToElement('.craft-subheadline', 'animated fadeInUp');
            setAnimationToElement('.craft-text', 'animated fadeInUp');
            $('.craft-headline h3').text("DRESDEN");
            $('.craft-subheadline h3').text("DEVELOPMENT");
            $('.craft-text p').text("In Dresden sitzen unsere fleißigen Bienchen Matthias ,Karsten und andere Mitarbeiter an der Konzeption und Entwicklung neuer Produkte um ihre Butze ins richtige Licht zu rücken.");
            setTimeout(function () {
                setAnimationToElementOUT('.craft-headline', 'animated fadeOut');
                setAnimationToElementOUT('.craft-subheadline', 'animated fadeOutDown');
                setAnimationToElementOUT('.craft-text', 'animated fadeOutDown');
                setTimeout(function () {
                    animationTimeline();
                }, 1500);
            }, 6000);
        }, 1500);
    }, 6000);

}

/*****************************************************/
/*STYLE FUNCTIONS*/
/*****************************************************/
function resizeBackground() {
    $("#bodybg").height(jQuery(window).height() + 150);
}

//Video resize function
function resizeVideo() {
    var aspectRatio = 9 / 16; //switched for calculation
    var currentWidth = $('#video').width();

    $('video', '#big_block').height(currentWidth * aspectRatio);
}

function resizeBigBlock() {
    $('#big_block').css('min-height', $('#video').height());
}

function setImageBerlin() {
    $('#big_block_craft').css('background-image', 'url(./frontend/img/factory/berlin.jpg)');
}

function setImageDresden() {
    $('#big_block_craft').css('background-image', 'url(./frontend/img/factory/dresden.jpg)');
}
