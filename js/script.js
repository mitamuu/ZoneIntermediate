$(function() {
    $("#slider").slick({
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 2000,
        dots: false,
        fade: false,
        slidesToShow: 4,
        variableWidth: true,
    });
});

$('.faq-title').on('click', function() {
    $(this).toggleClass('active');
    $(this).next().slideToggle();
});


AOS.init({
    offset: 300,
    "data-aos-easing": "ease-in",
});