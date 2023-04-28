function bannerSlider() {
  $(".owl-carousel").owlCarousel({
    nav: false,
    items: 1,
    autoplay: true,
  });
}
function testimonial() {
  $("#testimonial").owlCarousel({
    nav: false,
    items: 1,
    autoplay: true,
    loop: true,
  });
}
function HeaderDark() {
  var scroll = $(window).scrollTop();

  if (scroll >= 100) {
    $(".navbar").addClass("darkHeader");
  } else {
    $(".navbar").removeClass("darkHeader");
  }
}

$(document).ready(function () {
  bannerSlider();
  testimonial();
});
$(window).scroll(function () {
  HeaderDark();
});
