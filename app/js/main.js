/**
  * Header Connect
  * retinaLogo
  * ajaxContactForm
  * headerFixed
  * select js
  * mobileNav
  * ajaxSubscribe
  * alertBox
  * loadmore
*/

; (function ($) {
  "use strict";

  var themesflatTheme = {

    // Main init function
    init: function () {
      this.config();
      this.events();
    },

    // Define vars for caching
    config: function () {
      this.config = {
        $window: $(window),
        $document: $(document),
      };
    },

    // Events
    events: function () {
      var self = this;

      // Run on document ready
      self.config.$document.on('ready', function () {


        // Retina Logos
        self.retinaLogo();


      });

      // Run on Window Load
      self.config.$window.on('load', function () {

      });
    },

  }; // end themesflatTheme

  // Start things up
  themesflatTheme.init();

  var retinaLogos = function () {
    var retina = window.devicePixelRatio > 1 ? true : false;
    if (retina) {
      $('#site-logo-inner').find('img').attr({ src: 'assets/images/logo/logo@2x.png', width: '197', height: '48' });

      $('#logo-footer.style').find('img').attr({ src: 'assets/images/logo/logo-footer@2x.png', width: '197', height: '48' });
      $('#logo-footer.style2').find('img').attr({ src: 'assets/images/logo/logo@2x.png', width: '197', height: '48' });
    }
  };

  var headerFixed = function () {
    if ($("header").hasClass("header-fixed")) {
      var nav = $("#header");

      if (nav.length) {
        var offsetTop = nav.offset().top,
          headerHeight = nav.height(),
          injectSpace = $("<div>", {
            height: headerHeight,
          });
        injectSpace.hide();

        if ($("header").hasClass("style-absolute")) {
          injectSpace.hide();
        } else {
          injectSpace.insertAfter(nav);
        }

        $(window).on("load scroll", function () {
          if ($(window).scrollTop() > offsetTop + headerHeight) {
            nav.addClass("is-fixed");
            injectSpace.show();
          } else {
            nav.removeClass("is-fixed");
            injectSpace.hide();
          }

          if ($(window).scrollTop() > 50) {
            nav.addClass("is-small");
          } else {
            nav.removeClass("is-small");
          }
        });
      }
    }
  };



  //Submenu Dropdown Toggle
  if ($('.main-header li.dropdown2 ul').length) {
    $('.main-header li.dropdown2').append('<div class="dropdown2-btn"></div>');

    //Dropdown Button
    $('.main-header li.dropdown2 .dropdown2-btn').on('click', function () {
      $(this).prev('ul').slideToggle(500);
    });

    //Disable dropdown parent link
    $('.navigation li.dropdown2 > a').on('click', function (e) {
      e.preventDefault();
    });

    //Disable dropdown parent link
    $('.main-header .navigation li.dropdown2 > a,.hidden-bar .side-menu li.dropdown2 > a').on('click', function (e) {
      e.preventDefault();
    });

    $('.price-block .features .arrow').on('click', function (e) {
      $(e.target.offsetParent.offsetParent.offsetParent).toggleClass('active-show-hidden')
    });

  }

  // Mobile Nav Hide Show
  if ($('.mobile-menu').length) {

    //$('.mobile-menu .menu-box').mCustomScrollbar();

    var mobileMenuContent = $('.main-header .nav-outer .main-menu').html();
    $('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
    $('.sticky-header .main-menu').append(mobileMenuContent);

    //Hide / Show Submenu
    $('.mobile-menu .navigation > li.dropdown2 > .dropdown2-btn').on('click', function (e) {
      e.preventDefault();
      var target = $(this).parent('li').children('ul');

      if ($(target).is(':visible')) {
        $(this).parent('li').removeClass('open');
        $(target).slideUp(500);
        $(this).parents('.navigation').children('li.dropdown2').removeClass('open');
        $(this).parents('.navigation').children('li.dropdown2 > ul').slideUp(500);
        return false;
      } else {
        $(this).parents('.navigation').children('li.dropdown2').removeClass('open');
        $(this).parents('.navigation').children('li.dropdown2').children('ul').slideUp(500);
        $(this).parent('li').toggleClass('open');
        $(this).parent('li').children('ul').slideToggle(500);
      }
    });

    //3rd Level Nav
    $('.mobile-menu .navigation > li.dropdown2 > ul  > li.dropdown2 > .dropdown2-btn').on('click', function (e) {
      e.preventDefault();
      var targetInner = $(this).parent('li').children('ul');

      if ($(targetInner).is(':visible')) {
        $(this).parent('li').removeClass('open');
        $(targetInner).slideUp(500);
        $(this).parents('.navigation > ul').find('li.dropdown2').removeClass('open');
        $(this).parents('.navigation > ul').find('li.dropdown > ul').slideUp(500);
        return false;
      } else {
        $(this).parents('.navigation > ul').find('li.dropdown2').removeClass('open');
        $(this).parents('.navigation > ul').find('li.dropdown2 > ul').slideUp(500);
        $(this).parent('li').toggleClass('open');
        $(this).parent('li').children('ul').slideToggle(500);
      }
    });

    //Menu Toggle Btn
    $('.mobile-nav-toggler').on('click', function () {
      $('body').addClass('mobile-menu-visible');

    });

    //Menu Toggle Btn
    $('.mobile-menu .menu-backdrop, .close-btn').on('click', function () {
      $('body').removeClass('mobile-menu-visible');
      $('.mobile-menu .navigation > li').removeClass('open');
      $('.mobile-menu .navigation li ul').slideUp(0);
    });

    $(document).keydown(function (e) {
      if (e.keyCode === 27) {
        $('body').removeClass('mobile-menu-visible');
        $('.mobile-menu .navigation > li').removeClass('open');
        $('.mobile-menu .navigation li ul').slideUp(0);
      }
    });

  }

  var goTop = function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 800) {
        $('#scroll-top').addClass('show');
      } else {
        $('#scroll-top').removeClass('show');
      }
    });

    $('#scroll-top').on('click', function () {
      $("html, body").animate({ scrollTop: 0 }, 300, 'easeInOutExpo');
      return false;
    });
  };

  new WOW().init();

  var tftabs = function () {

    $('.tf-tabs').each(function () {

      $(this).find('.tf-tabnav ul > li').filter(':first').addClass('active').removeClass('inactive');
      $(this).find('.tf-tabcontent').children().filter(':first').addClass('active');


      if ($(this).find('.tf-tabnav ul > li').hasClass('set-active-tab')) {
        $(this).find('.tf-tabnav ul > li').siblings().removeClass('active');
      }
      if ($(this).find('.tf-tabcontent').children().hasClass('set-active-tab')) {
        $(this).find('.tf-tabcontent').children().siblings().removeClass('active');
      }

      $(this).find('.tf-tabnav ul > li').on('click', function () {
        var tab_id = $(this).attr('data-tab');

        $(this).siblings().removeClass('active').removeClass('set-active-tab').addClass('inactive');
        $(this).closest('.tf-tabs').find('.tf-tabcontent').children().removeClass('active').removeClass('set-active-tab').addClass('inactive');

        $(this).addClass('active').removeClass('inactive');
        $(this).closest('.tf-tabs').find('.tf-tabcontent').children('#' + tab_id).addClass('active').removeClass('inactive');
      });
    });
  }

  var tf_accordion = function () {
    $('.tf-accordion').each(function () {
      var speed = { duration: 400 };
      $(this).find('.accordion-content').hide();
      $(this).find('.tf-accordion-item .accordion-title.active').siblings('.accordion-content').show();
      $(this).find('.tf-accordion-item .accordion-title').on('click', function () {
        $(this).closest('.tf-accordion-item').siblings().find('.accordion-title').removeClass('active');
        $(this).toggleClass('active');
        $(this).closest('.tf-accordion-item').siblings().removeClass('active');
        $(this).closest('.tf-accordion-item').toggleClass('active');
        $(this).next().slideToggle(speed);
        if ($(this).is('.active')) {
          $(this).closest('.tf-accordion').find(".accordion-content").not($(this).next()).slideUp(speed);
        }
      });
    });
  }

  // Mouse Custom Cursor
  var custom_cursor = function () {
    var tfCursor = jQuery(".tfmouseCursor");
    if (tfCursor.length) {
      if ($("body")) {
        const e = document.querySelector(".cursor-inner"),
          t = document.querySelector(".cursor-outer");
        let n,
          i = 0,
          o = !1;
        (window.onmousemove = function (s) {
          o ||
            (t.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (e.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (n = s.clientY),
            (i = s.clientX);
        }),
          $("body").on("mouseenter", "button, a, .cursor-pointer", function () {
            e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
          }),
          $("body").on("mouseleave", "button, a, .cursor-pointer", function () {
            ($(this).is("a", "button") &&
              $(this).closest(".cursor-pointer").length) ||
              (e.classList.remove("cursor-hover"),
                t.classList.remove("cursor-hover"));
          }),
          (e.style.visibility = "visible"),
          (t.style.visibility = "visible");
      }
    }
  }

  var stickyTabs = function () {

    $(window).on('scroll', function () {
      var scrollbarLocation = $(this).scrollTop();
      $('.sticky-nav').each(function () {
        var sectionOffset = $(this.hash);
        sectionOffset = $(this.hash).offset().top - 50;
        if (sectionOffset <= scrollbarLocation) {
          $(this).parent().addClass('active');
          $(this).parent().siblings().removeClass('active');
        } else {
          $(this).removeClass('active');
        }
      });
    });

    $('a.sticky-nav[href*="#"]:not([href="#"])').on('click', function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 100)
          }, 500, "easeInOutExpo");
          return false;
        }
      }
    });
  }
  var tfRevert = function () {
    let reveals = document.querySelectorAll('[reveal]');
    if (window.innerWidth > 768) {
      $(window).on('scroll', function () {
        reveals.forEach((el) => {
          const windowHeight = window.innerHeight;
          const revealTop = el.getBoundingClientRect().top;
          const elHeight = $(this).height();
          const revealPoint = -150;
          // position & speed 
          const posPoint = 20;
          // attr parent
          el.parentElement.style.perspective = '700px';
          el.parentElement.style.transformStyle = 'preserve-3d';
          el.parentElement.style.perspectiveOrigin = '100% 0%';
          // attr node
          el.style.transformOrigin = '50% 0';
          el.style.translate = 'none';
          el.style.rotate = 'none';
          el.style.scale = 'none';
          el.style.transition = 'all .30s ease';
          // console.log(revealTop > windowHeight - revealPoint);
          if (revealTop > windowHeight - revealPoint) {
            el.style.opacity = '0';
            el.style.transform = `rotateX(-${posPoint}deg)`
          }
          if (revealTop < windowHeight - revealPoint) {
            if (revealTop > -50) {
              let schemas = Math.abs(1 - revealTop / elHeight);
              let opacity = Math.min((Math.abs(1 - (revealTop - 350) / elHeight)), 1);
              let rotate = Math.min((posPoint * schemas - (posPoint - 10)), 0)
              el.style.opacity = `${opacity}`;
              el.style.transform = `translate3d(0px,0px,0px) rotateX(${rotate}deg)`
            }
            else {
              el.style.transform = `translate(0,0)`
            }
          }

        })
      })
    }
  }



  var removePreloader = function () {
    $("#preloader").fadeOut("slow", function () {
      setTimeout(function () {
        $("#preloader").remove();
      }, 1000);
    });
  };

  var swiper = new Swiper(".tf-hero-card-swiper", {
    effect: "cards",
    grabCursor: true,
    initialSlide: 1,
    cardsEffect: {
      perSlideRotate: 7,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    speed: 200,
    autoplay: true,
    rotate: true,
    mousewheel: {
      invert: false,
    },
  });

  var swiper = new Swiper(".innerpage", {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 30,
    autoplay: true,
    speed: 1000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      }
    }
  });

  var swiper = new Swiper(".innerpage2", {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 30,
    speed: 1000,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      }
    }
  });

  // Dom Ready
  $(function () {
    $(window).on('load resize', function () {
      retinaLogos();
    });
    goTop();
    headerFixed();
    tftabs();
    custom_cursor();
    tfRevert();
    stickyTabs();
    // tf_accordion();
    removePreloader();
  });

})(jQuery);

