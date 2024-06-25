// JS console test

document.addEventListener("DOMContentLoaded", () => {
  console.log("JavaScript Loaded");
});

// Offer Carousel

$(document).ready(function () {
  $(".carousel").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
  });
});
