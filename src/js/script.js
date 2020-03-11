console.log("Load script.js");

// Instantiating the global src object
var app = {};

// init swiper
var swipe = new Swipe(document.getElementById('slider'),{
    startSlide: 0,
    speed: 400,
    auto: 3000,
});
