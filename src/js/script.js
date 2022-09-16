$(document).ready(function () {

// === Begin button ripple style === \\\
    $(".ripple").on("click", function(event) {
        var _this = $(this),
            offset = $(this).offset(),
            positionX = (event.pageX - offset.left),
            positionY = (event.pageY - offset.top);
        _this.append("<span class='ripple-effect'>");
        _this.find(".ripple-effect").css({
            left: positionX,
            top: positionY
        }).animate({
            opacity: 0,
        }, 1500, function() {
            $(this).remove();
        });
    });
// === End button ripple style === \\\

var swiper = new Swiper('.b-certificate__slider', {
    slidesPerView: 1,
    spaceBetween: 25,
    slidesToScroll: 1,
    loop: false,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {

        767: {
            slidesPerView: 2,
        },
    },
});

$(".b-cookies__btn").click(function(){
    $(this).parent().parent().hide();
});

$('.b-mobile').click(function(){
    $('.b-header__right').toggleClass('active');
    $('.b-mobile').toggleClass('active');
    $('body').toggleClass('body-overflow');
    $(document).on('click', function(event) {
        if (!$(event.target).closest(".b-mobile").length) {
            $('.b-header__right').removeClass('active');
            $('body').removeClass('body-overflow');
            $('.b-mobile').removeClass('active');
        }
        event.stopPropagation();
    });
});



    function moveMenu(){
        if ($(window).width() < 768) {
            $(function(){




            })
        } else{
            $(function(){


                setTimeout(function() {
                    $('.animate-down').addClass("animated").viewportChecker({
                        classToAdd: 'fadeInUp',
                        offset: 0
                    });
                }, 1500);


            })
        }
    }
    moveMenu();

    $(window).resize(function(){
        moveMenu();
    });




});



