document.addEventListener("DOMContentLoaded", function () {
  console.log("JavaScript Loaded");

  // Select all buttons with the class 'ordertypebutton'
  const buttons = document.querySelectorAll(".ordertypebutton");

  // Loop through each button and attach the click event listener
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Remove 'clicked' class from all buttons
      buttons.forEach(function (btn) {
        btn.classList.remove("clicked");
      });
      // Add 'clicked' class to the clicked button
      this.classList.add("clicked");
    });
  });
});

// Initialize Slick Carousel
$(".carousel").slick({
  autoplay: true,
  autoplaySpeed: 1200,
  dots: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: "linear",
});
