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

// // Get the <span> element that closes the modal
// var CloseButton = document.getElementsByClassName("close");

// var SendButton = document.getElementsByClassName("send");


// // When the user clicks on <span> (x), close the modal
// CloseButton.onclick = function () {
//         modal.style.display = "none";
// }
// SendButton.onclick = function () {
//         modal.style.display = "none";
// }

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// init controller
var controller = new ScrollMagic.Controller();

// create a scene
new ScrollMagic.Scene({
    duration: 700, // the scene should last for a scroll distance of 100px
    offset: 400 // start this scene after scrolling for 400px
})
    .setPin('#container') // pins the element for the the scene's duration
    .addTo(controller); // assign the scene to the controller



