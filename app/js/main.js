$(function () {


  $('.about__list').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: false,
    arrows: true,
    appendArrows: $('.about__btns'),
    prevArrow: '<button type="button" class="slick-prev"><svg width="35" height="35" viewBox="0 0 35 35"><path fill - rule = "evenodd" clip - rule = "evenodd"d = "M34.8297 18.6013H5.12463L19.3955 32.942L17.7539 34.5917L0.680359 17.4347L17.7562 0.27533L19.3979 1.925L5.12463 16.268H34.8297V18.6013Z" / ></svg></button >',
    nextArrow: '<button type="button" class="slick-next"><svg width="35" height="35" viewBox="0 0 35 35"><path fill - rule = "evenodd" clip - rule = "evenodd" d = "M34.1494 17.4347L17.0735 34.594L15.4319 32.9443L29.7028 18.6037H0V16.2703H29.7051L15.4319 1.925L17.0735 0.27533L34.1494 17.4347Z"/></svg></button>',
    autoplay: true,
    autoplaySpeed: 2000
  });


  $(".star").rateYo({
    starWidth: "20px",
    ratedFill: "#F9AD3D",
    numStars: 5,
    spacing: "5px",
  });


  new ImageZoom(document.getElementById("img-container"), {
    width: 160,
    zoomWidth: 400,
    offset: {
      vertical: 0,
      horizontal: 10
    }
  });



});


