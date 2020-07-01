$(window).on('load', function () {

    /**
     *------------------------ CURSOR -----------------------
     */
    $('body').append('<span class="cursor-secondary"></span><span class="cursor-primary"><span></span></span>');
    $('*').css('cursor', 'none');

    var cursor = $('.cursor-secondary, .cursor-primary'),
        interactiveElement = 'a, li.dropdown, a[href="#"], button, input[type="submit"], li.item, .main-slide-nav .img-cover, .slick-arrow, input[type="checkbox"]';

    $(document)
        .on('mousemove.myTemplate', function (event) {
            if ($('body.isMobile')[0]) return;
            cursor.css('left', event.clientX + 'px');
            cursor.css('top', event.clientY + 'px');
        })
        .on('mouseenter', interactiveElement, function () {
            if ($('body.isMobile')[0]) return;
            cursor.addClass('animateCursor');
        })
        .on('mouseleave', interactiveElement, function () {
            if ($('body.isMobile')[0]) return;
            cursor.removeClass('animateCursor');
        }).trigger('mousemove.myTemplate');



    /**
     *-------------------------- MENU -------------------------
     */
    $('.nav-btn').on('click', function () {
        $('.nav-menu').toggleClass('active');
        $(this).toggleClass('active');
        $('body').toggleClass('no-scroll');

        return false;
    });

    $(window).on('resize.myTemplate', function () {
        $('body')[($(this).width() <= 991) ? 'addClass' : 'removeClass']('isMobile')
    }).trigger('resize.myTemplate');

    $('.nav-menu').on('click', '.dropdown>a, .dropdown2>a', function () {
        if (!$('body.isMobile')[0]) return;
        var menuItem = $(this);

        menuItem.parents('li').toggleClass('dropdown-active');
        menuItem.parents('li').children('ul').toggle('slow');

        return false;
    });

    $('.nav-menu').on('mouseenter', '.dropdown', function (e) {
        if ($('body.isMobile')[0]) return;
        var menuItem = $(this);

        if (menuItem[0].timeOutMenu) {
            clearTimeout(menuItem[0].timeOutMenu);
        }

        menuItem.addClass('active');
    }).on('mouseleave', '.dropdown', function (e) {
        if ($('body.isMobile')[0]) return;

        var menuItem = $(this);

        menuItem[0].timeOutMenu = setTimeout(function () {
            menuItem.removeClass('active');
        }, 500);
    });




    /**
     *---------------------- SEARCH FORM  ---------------------
     */
    $('.search a').on('click', function () {
        $('.search').toggleClass('active');
        return false;
    });

    $(document).on('mouseup', function (e) {
        var divSearch = $('.search');
        if (!divSearch.is(e.target) && divSearch.has(e.target).length === 0) {
            divSearch.removeClass('active');
        }
    });

    $('.search form button').on('click', function () {
        $('.search').removeClass('active');
    });

    /**
     *---------------------- SCROLL HEADER  ---------------------
     */
    function searchBlockPosition() {
        if ($(window).scrollTop() > 150) {
            $('header').addClass('header-scroll');
        } else {
            $('header').removeClass('header-scroll');
        }
    }

    $(window).on('scroll', searchBlockPosition).trigger('scroll.myTemplate');

    /**
     *-------------------- HOME 1 MAIN SLIDER   -------------------
     */
    if ($('.main-slider-for')[0]) {
        $('.main-slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            fade: true,
            speed: 900,
            infinite: true,
            lazyLoad: 'progressive',
            cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
            touchThreshold: 100,
            asNavFor: '.main-slider-nav'
        });
    }
    if ($('.main-slider-nav')[0]) {
        $('.main-slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            asNavFor: '.main-slider-for',
            cssEase: 'ease-out',
            focusOnSelect: true,
            infinite: true,
            speed: 900,
            nextArrow: '<span class="slick-arrow-next"><i class="fa fa-angle-right" aria-hidden="true"></i></span>',
            prevArrow: '<span class="slick-arrow-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        arrows: false,
                    }
                }
            ]
        });
    }

    /**
     *-------------------- HOME 1 OPPORTUNITIES SLIDER   -------------------
     */
    if ($('.slider-opportunities')[0]) {
        $('.slider-opportunities').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            fade: true,
            speed: 600,
            cssEase: 'ease-in-out',
            autoplay: true,
            autoplaySpeed: 4500,
            nextArrow: '<span class="slick-arrow-next"><i class="fa fa-angle-right" aria-hidden="true"></i></span>',
            prevArrow: '<span class="slick-arrow-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></span>'
        });
    }


    /**
     *-------------------- SLIDER VIDEO  -------------------
     */
    if ($('.slider-video')[0]) {
        $('.slider-video').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: true,
            fade: true,
            speed: 1000,
            cssEase: 'ease-in-out',
            nextArrow: '<span class="slick-arrow-next"><i class="fa fa-angle-right" aria-hidden="true"></i></span>',
            prevArrow: '<span class="slick-arrow-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        arrows: false
                    }
                }
            ]
        });
    }

    /**
     *-------------------- SLIDER NEW PRODUCT -------------------
     */
    if ($('.slider-new-product')[0]) {
        $('.slider-new-product').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            speed: 600,
            cssEase: 'ease-in-out',
            nextArrow: '<span class="slick-arrow-next"><i class="fa fa-angle-right" aria-hidden="true"></i></span>',
            prevArrow: '<span class="slick-arrow-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }
    /**
     *-------------------- SLIDER SINGLE PRODUCT -------------------
     */
    if ($('.slider-single-for')[0]) {
        $('.slider-single-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            fade: true,
            speed: 600,
            cssEase: 'ease-in-out',
            asNavFor: '.slider-single-nav'
        });
        $('.slider-single-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            asNavFor: '.slider-single-for',
            cssEase: 'ease-in-out',
            focusOnSelect: true,
            infinite: true,
            speed: 600,
        });
    }





    /**
     *-------------------- SCROLL SECTION -------------------
     */
    $('.to-top').on('click', function (event) {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 400);
    });





});
