
/*slick*/
$('.main-slider').slick({
    dots: true,
    infinite: true,
    vertical: true,
    autoplay: true,
    pauseOnHover: true,
    arrows: false
});

/*menu-navbar*/
$(document).ready(function () {
    $(".navbar-toggler").click(function () {
        $(".navbar-lin_footer").slideToggle();
    })
});

/*добавить удалить клас при клике на меню*/
$(function(){
    $('.navbar-toggler').click(function(){
        $('.navbar-toggler').toggleClass('menu-active');
    });
});