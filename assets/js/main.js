$(document).ready(function () {
const body = $('body')
$('.icon-bar').click(function () {
    $('.menu').addClass('menu-show')
})
$('.menu-icon').click( function () {
    $('.menu').removeClass('menu-show')
})
$(window).click(function (e) {
    if(!e.target.closest('.menu') && !e.target.closest('.icon-bar')) {
        $('.menu').removeClass('menu-show')
    }
})
// $(window).load(function() {
//     setBgSizeForBody ()
// })
$(window).resize(function () { 
    setBgSizeForBody ()
});
function setBgSizeForBody () {
    let heightHeader = $('.header').height()
    let heightHero = $('.hero').height()
    $('body').css({'backgroundSize': `100% ${heightHeader + heightHero}px`})
}
    
$('.project-blogs').slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    speed: 500,
    responsive: [
        { breakpoint: 1023, settings: { slidesToShow: 2 }},
        {  breakpoint: 767,  settings: { slidesToShow: 1 } }
    ]
  });
});
