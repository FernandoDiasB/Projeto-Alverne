(function () {
    var $body = document.querySelector('body');
    $body.classList.remove('no-js')
    $body.classList.add('js')


    var menu = new Menu({
        container: '.header-nav',
        toggleBtn: '.header-btnMenu',
        widthEnabled: 1024
    })

    var carouselImgs = new Carousel({
        container: '#slider .slideshow',
        itens: 'figure',
        btnPrev: '.prev',
        btnNext: '.next'
    })

    var carouselQuotes = new Carousel({
        container: '.quote-slideshow',
        itens: 'figure',
        btnPrev: '.prev',
        btnNext: '.next'
    })
})()

$(document).ready(function () {
    $('a[href^=#]').on('click', function (event) {
        var target = $($(this).attr('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000)
        }
    });
});