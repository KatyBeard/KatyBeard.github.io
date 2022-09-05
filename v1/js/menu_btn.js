$('.menu_btn').on('click', function (e) {
    e.preventDefault();
    $('.menu').toggleClass('menu_active');
    $('.content').toggleClass('content_active');
    $('.container').toggleClass('container_active');

});

$('.menu_list ul li').on('click', function(z){
    z.preventDefault();
    $(this).toggleClass('clicked::after');
    $(this).find('ul').slideToggle('slow');
})
