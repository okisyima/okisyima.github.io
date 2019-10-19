// event pada saat link di klik
$('.page-scroll').on('click', function(e) {

  //  ambil isi href
  var tangkap  = $(this).attr('href');
  // tangkap elemen ybs
  var elemenTangkap = $(tangkap);

  $('html,body').animate({
    scrollTop:elemenTangkap.offset().top - 50/* nilai jarak atas */
  },1250/*detik scrolling*/, 'easeInOutExpo'/*type scrolling*/);

  e.preventDefault();

});

// paralax
// about
$(window).on('load', function() {
  $('.pKiri').addClass('pMuncul');
  $('.pKanan').addClass('pMuncul');
});


// wScroll
$(window).scroll(function() {

    // jumbotron
    var wScroll = $(this).scrollTop();

    $('.jumbotron img').css({
      'transform' : 'translate(0px, '+ wScroll/6 +'%)' /* kecepatan scroll */
    });

    $('.jumbotron h1').css({
      'transform' : 'translate(0px, '+ wScroll/4 +'%)'
    });

    $('.jumbotron p').css({
      'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    });


    // Portfolio
    if( wScroll > $('.portfolio').offset().top - 200) {
      $('.portfolio .thumbnail').each(function(i) {
        setTimeout(function() {
          $('.portfolio .thumbnail').eq(i).addClass('muncul');
        }, 300 * i);
      });
    }


});
