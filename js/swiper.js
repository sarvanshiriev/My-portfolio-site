
document.addEventListener("DOMContentLoaded", function () {
    var mySwiper = new Swiper(".swiper-container", {
      direction: "horizontal",
      effect: "cards",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  });
