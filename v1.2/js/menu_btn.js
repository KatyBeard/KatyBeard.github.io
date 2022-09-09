$('.menu_btn').on('click', function (e) {
    e.preventDefault();
    $('.menu').toggleClass('menu_active');
    $('.content').toggleClass('content_active');
    $('.container').toggleClass('container_active');
    $('.menu_btn').toggleClass('menu_btn_active');

});

$('.menu_list ul li').on('click', function(z){
    z.preventDefault();
    $('this::after').toggleClass('clicked::after');
    $(this).find('ul').slideToggle('slow');
})
