$(function () {
  $(window).scroll(function () {
    if ($(document).scrollTop() >= 400) {
      $(".fixedtool").fadeIn();
    } else {
      $(".fixedtool").fadeOut();
    }
  });
  $(".fixedtool div").click(function () {
    // console.log($(this).index());
    let current = $(".titleAndswiper .toppart .title")
      .eq($(this).index())
      .offset().top;
    $("body, html").stop().animate({
      screenTop: current,
    });
  });
});
