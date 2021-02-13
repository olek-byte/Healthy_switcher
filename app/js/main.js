$(function () {

  //Fixed position
  let header = $('.header');
  let products = $('.page-top');
  let productsH = products.innerHeight();
  let scrollPos = $(window).scrollTop();

  document.addEventListener('scroll', function () {
    scrollPos = $(this).scrollTop();

    if (scrollPos > productsH) {
      header.addClass('fixed');
    } else {
      header.removeClass('fixed');
    }
  });

  // Smooth scroll
  $(".header__link").on("click", function () {
    var className = $(this).attr('href'),
      top = $(className).offset().top;
    $('body,html').animate({
      scrollTop: top - 70
    }, 1500);
  });


  //Burger
  const btn = document.querySelector(".js__nav-btn");
  const lines = btn.querySelectorAll(".line");
  const cls = {
    open: "open",
    close: "close"
  };
  let btnClass = cls.open;

  btn.addEventListener("click", () => {
    if (btn.classList.contains(cls.open)) {
      btn.classList.remove(btnClass);
      btnClass = cls.close;
    } else if (btn.classList.contains(cls.close)) {
      btn.classList.remove(btnClass);
      btnClass = cls.open;
    }

    void btn.offsetWidth;
    btn.classList.add(btnClass);
  });

  //after clicking on burger
  $('.js__nav-btn').on('click', function () {
    $('.header__list').toggleClass('active');
    $('.header').toggleClass('active');
    $('body').toggleClass('active');
    $('.menu-btn').toggleClass('active');
  });

  $('.header__link').on('click', function () {
    $('.header__list').removeClass('active');
    $('.btn-toggle').removeClass('open');
  });

  // scrollup
  $('.js__scrollup').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 1000);
  })
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('.js__scrollup').fadeIn();
    } else {
      $('.js__scrollup').fadeOut();
    }
  });


  //Slick slider
  $('.about__list').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: false,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><svg width="35" height="35" viewBox="0 0 35 35"><path fill - rule = "evenodd" clip - rule = "evenodd"d = "M34.8297 18.6013H5.12463L19.3955 32.942L17.7539 34.5917L0.680359 17.4347L17.7562 0.27533L19.3979 1.925L5.12463 16.268H34.8297V18.6013Z" / ></svg></button >',
    nextArrow: '<button type="button" class="slick-next"><svg width="35" height="35" viewBox="0 0 35 35"><path fill - rule = "evenodd" clip - rule = "evenodd" d = "M34.1494 17.4347L17.0735 34.594L15.4319 32.9443L29.7028 18.6037H0V16.2703H29.7051L15.4319 1.925L17.0735 0.27533L34.1494 17.4347Z"/></svg></button>',
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
        breakpoint: 1199,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToScroll: 1,
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });

  //Rating
  $(".star").rateYo({
    starWidth: "20px",
    ratedFill: "#F9AD3D",
    numStars: 5,
    spacing: "5px",
  });


  //Zoom 
  var options = {
    width: 160,
    // height: 65,
    zoomWidth: 350,
    offset: {
      vertical: 0,
      horizontal: 0
    }
  };
  new ImageZoom(document.querySelector(".js__zoom-big--1"), options);
  new ImageZoom(document.querySelector(".js__zoom-big--2"), options);
  new ImageZoom(document.querySelector(".js__zoom-big--3"), options);

  var options = {
    width: 65,
    zoomWidth: 350,
    offset: {
      vertical: 0,
      horizontal: 0
    }
  };

  new ImageZoom(document.querySelector(".js__zoom-small--1"), options);
  new ImageZoom(document.querySelector(".js__zoom-small--2"), options);
  new ImageZoom(document.querySelector(".js__zoom-small--3"), options);
  new ImageZoom(document.querySelector(".js__zoom-small--4"), options);
  new ImageZoom(document.querySelector(".js__zoom-small--5"), options);
  new ImageZoom(document.querySelector(".js__zoom-small--6"), options);


});