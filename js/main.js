// Hide header on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function (event) {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    // If scrolled down and past the navbar, add class .nav-up.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}

//Carousel
$('.multiple-items').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed:1500,
    slidesToShow: 3,
    slidesToScroll: 1
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

// When the user clicks on the button, open the modal
window.onload = function popup() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

$(function () {
    // Init Controller
    var scrollMagicController = new ScrollMagic();

    // Create Animation for 0.5s
    var tween = TweenMax.to('#animation', 0.5, {
        display: "inline - block",
        position: "relative",
        "z-index": "-1",
        border: "5px solid red"
    });
    // Create the Scene and trigger when visible with ScrollMagic
    var scene = new ScrollScene({
        triggerElement: '#scene',
        offset: 400
    })
    .setTween(tween)
    .addTo(scrollMagicController);
    scene.addIndicators();
}); 



