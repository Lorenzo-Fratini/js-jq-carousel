function next() {
  
  var activeImg = $('.active');
  var activeCircle = $('.active-circle')
  
  if (activeImg.hasClass('last')){

    var nextImg = $('img.first');
    var nextCircle = $('i.first');

    activeCircle.removeClass('active-circle');
    nextCircle.addClass('active-circle');
    
    activeImg.removeClass('active');
    nextImg.addClass('active');

  } else {

      var nextImg = activeImg.next('img');
      var nextCircle = activeCircle.next('i');

      activeCircle.removeClass('active-circle');
      nextCircle.addClass('active-circle');

      activeImg.removeClass('active');
      nextImg.addClass('active');
  }

}

function prev() {

  var activeImg = $('.active');
  var activeCircle = $('.active-circle');
                             
  if (activeImg.hasClass('first')){

    var prevImg = $('img.last');
    var prevCircle = $('i.last');

    activeCircle.removeClass('active-circle');
    prevCircle.addClass('active-circle');

    activeImg.removeClass('active');
    prevImg.addClass('active');

  } else {

      var prevImg = activeImg.prev('img');
      var prevCircle = activeCircle.prev('i');

      activeCircle.removeClass('active-circle');
      prevCircle.addClass('active-circle');

      activeImg.removeClass('active');
      prevImg.addClass('active');
  }
  
}

function init() {

  $('#next').click(next);
  $('#back').click(prev);
  
}

$(document).ready(init);