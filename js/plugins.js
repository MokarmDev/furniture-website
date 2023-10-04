$(document).ready(function(){
    //navbar toggler
    $('.navbar-toggler').on('click',function(){
        $('nav .one').toggleClass('top');
        $('nav .two').toggleClass('hidden');
        $('nav .three').toggleClass('bottom');
    })

    //mix it up
    var mixer = mixitup('.gallary');

    //venobox
    new VenoBox({
        selector: '.venobox'
    });

    //smooth scroll
    $('nav li a').on('click',function(){

    //add class active on nav links
    $(this).addClass('active').parent().siblings().find('a').removeClass('active')
        $('html,body').animate({
            scrollTop : $('#' + $(this).data('scroll')).offset().top - 80
        })
    })

    //button up
    $(window).scroll(function(){
        if($(this).scrollTop() >= 1000){
            $('.up').fadeIn(1000)
        }
        else {
            $('.up').fadeOut(1000)
        }
    })

    $('.up').on('click',function(){
        $('html, body').animate ({
            scrollTop : 0
        })
    })
})