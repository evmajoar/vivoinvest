/*
    Senurable Web Factory JS
    Version: 1.0.0
    Year: 2019
*/
$(function () {

  $('.useful-information__carousel-list').slick({
    dots: false,
    variableWidth: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    appendArrows: $('.useful-information__buttons'),
    prevArrow: ' <button type="button" class="btn-prev useful-information__btn-next"></button>',
    infinite: false,
    nextArrow: '<button type="button" class="btn-next useful-information__btn-prev"></button>',
    responsive: [{
      breakpoint: 767,
      settings: {
        dots: false,
        // arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true
      }
    }]
  });


  // карусель Наши кейсы
  $('.cases__carousel-list-js').slick({
    arrows: false,
    dots: true
  });


  $('.liders__carousel-list').slick({
    dots: false,
    variableWidth: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    appendArrows: $('.liders__buttons'),
    prevArrow: ' <button type="button" class="btn-prev liders__btn-next"></button>',
    infinite: false,
    nextArrow: '<button type="button" class="btn-next liders__btn-prev"></button>',
    responsive: [{
      breakpoint: 767,
      settings: {
        dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true
      }
    }]
  });


  $('.partners__carousel-list').slick({
    dots: false,
    variableWidth: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    appendArrows: $('.partners__buttons'),
    prevArrow: ' <button type="button" class="btn-prev partners__btn-next"></button>',
    infinite: false,
    nextArrow: '<button type="button" class="btn-next partners__btn-prev"></button>',
    rows: 2,
    responsive: [{
      breakpoint: 767,
      settings: {
        dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true
      }
    }]
  });


  $('.news__carousel-list').slick({
    dots: false,
    variableWidth: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    appendArrows: $('.news__buttons'),
    prevArrow: ' <button type="button" class="btn-prev news__btn-next"></button>',
    infinite: false,
    nextArrow: '<button type="button" class="btn-next news__btn-prev"></button>',
    responsive: [{
      breakpoint: 767,
      settings: {
        dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true
      }
    }]
  });



  // попап окна
  $('.js-popup').click(function (event) {
    var $that = $(this),
      $thatDataId = $that.data('id'),
      $modalBox = $('#' + $thatDataId),
      $modalBoxAttr = $modalBox.attr('id'),
      inpName = $that.parent().find('input[type=text]'),
      inpEmail = $that.parent().find('input[type=email]'),
      inpPass = $that.parent().find('input[type=password]'),
      inpNameVal = inpName.val(),
      inpEmailVal = inpEmail.val(),
      inpPassVal = inpPass.val();
    var addClasses = function () {
      $('body').addClass('hidden');
      $modalBox.addClass('show');
    };
    var validationInputs = function () {
      if (inpNameVal === '') {
        inpName.addClass('has-error');
      } else {
        inpName.removeClass('has-error');
      }
      if (inpEmailVal === '') {
        inpEmail.addClass('has-error');
      } else {
        inpEmail.removeClass('has-error');
      }
      if (inpPassVal === '') {
        inpPass.addClass('has-error');
      } else {
        inpPass.removeClass('has-error');
      }
    };
    if ($thatDataId === $modalBoxAttr) {
      if ($that.is('button[type=submit]')) {
        event.preventDefault();
        validationInputs();
        if (inpNameVal !== '' && inpEmailVal !== '' && inpPassVal) {
          addClasses();
        }
      } else {
        addClasses();
      }
    }
  });
  $('.modal__close').click(function () {
    $('body').removeClass('hidden');
    $(this).closest('.modal').removeClass('show');
  });

  // $('.modal').click(function () {
  //   $(this).closest('.modal').removeClass('show');
  // });    

  $('.sort-item').click(function () {
    $(this).toggleClass("sort-item--active");
  });

  $('.complexes-russia__sort-link').click(function () {
    $(this).toggleClass("complexes-russia__sort-link--toggle");
  });

});