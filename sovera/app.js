$(window).scroll(function() {
  if( $(this).scrollTop() > $('header').height()+120) {
    $("main").css("padding-top", "70px");
    $(".navbar").addClass("sticky");
  } else {
    $("main").css("padding-top", "20px");
    $(".navbar").removeClass("sticky");
  }
});
