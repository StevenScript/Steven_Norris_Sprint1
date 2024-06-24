document.addEventListener("DOMContentLoaded", () => {
  console.log("JavaScript Loaded");
});

// scripts.js

$(document).ready(function () {
  $(".carousel").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
  });
});
