$(document).ready(function() {
  // Portfolio switch
  $('.portfolio__btn[filter]').click(function() {
    if ($(this).attr('val') == 'off') {
      $('.portfolio__btn[filter]').attr('val', 'off').removeClass('portfolio__btn_active');
      $(this).attr('val', 'on').addClass('portfolio__btn_active');
      $('.filter > div').hide(300);
      $('.filter > div[filter=' +$(this).attr('filter') + ']').show(300);
      if ($(this).attr('filter') == 'all') {
        $('.portfolio__btn[filter]').attr('val', 'off').removeClass('portfolio__btn_active');
        $(this).attr('val', 'on').addClass('portfolio__btn_active');
        $('.filter > div').show(300);
      }
    }
  })
  // Header-menu scroll
  $('ul.menu a[href^="#"]').click(function() {
    var target = $(this).attr('href')
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 500)
    return false
  })
  // button toTop
  $(window).scroll(function() {
    if ($(this).scrollTop() != 0)
      $('#toTop').fadeIn()
    else
      $('#toTop').fadeOut()
  })
  $('#toTop').click(function() {
    $('body, html').animate({
      scrollTop: 0
    }, 800)
  })
  // menu drop-down
  $('.burger-menu').click(function() {
    $('nav').slideToggle(500)
    $('ul.menu').css({
      'display':'flex', 'flex-direction':'column'
    })

    $('.menu__item').css({
      'padding':'10px 0'
    })

    $('.fa-bars').toggleClass('fa-times', 300)

    // if ($('.burger-menu').html() == '<i class="fas fa-bars"></i>') {
    //     $(this).html('<i class="fas fa-times"></i>')
    // } else {
    //     $(this).html('<i class="fas fa-bars"></i>')
    // }
  })
})

// Team swiper
const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    480: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 2,
    }
  }
});

// Form validate
new JustValidate('.footer__form', {
  rules: {
    name: {
      required: true,
      minLenght: 2,
      maxLength: 10
    },
    mail: {
      required: true,
      email: true
    },
  },
  messages: {
    name: 'Как вас зовут?',
    mail: 'Укажите ваш e-mail'
  }
});