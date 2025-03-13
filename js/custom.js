$(function () {
    const tl = gsap.timeline();
    tl
        .from('.main_visual h2', { x: 640, opacity: 0, delay: 0.5 })
        .from('.main_visual strong', { x: 640, opacity: 0, delay: 0.5 })
        .from('.main_visual p', { x: 640, opacity: 0 })
        .from('.main_visual .me', { x: 640, opacity: 0, rotation: 360 });





    $('.wrapper').fullpage({
        anchors: ['intro', 'portfolio01', 'portfolio02', 'portfolio03', 'portfolio04', 'training', 'profile',],
        fixedElements: '.header, .footer',
        menu: '#menu',
        responsiveWidth: 1200,
        onLeave: function (o, d, dr) {
            let idx = d.index;
            if (idx == 0) {
                tl.restart();
            }
            // 슬라이드 돌아가게

            $('.header .side_nav li').removeClass('on')
            $('.header .side_nav li').eq(idx).addClass('on')



        },
        afterLoad: function (o, d, dr) {
            let idx = d.index;
            $('.section').removeClass('on')
            $('.section').eq(idx).addClass('on')
        }
    });
})

$(function () {
    const tn = new Swiper('.training_slide', {
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: ".training .arrows .next",
            prevEl: ".training .arrows .prev",
        },
        breakpoints: {

            768: {
                slidesPerView: 6,
                spaceBetween: 40,
            },

        },
    });

})

$(function () {

    $('.header .btn').on('click', function () {
        $(this).toggleClass('on');
        $('.header .cover_lnk').toggleClass('on');
    });

    $('.header .cover_lnk a').on('click', function (e) {
        let idx = $(this).parent().index();
        $('.header .btn').removeClass('on');
        $('.header .cover_lnk').removeClass('on');
        e.preventDefault();
        fullpage_api.moveTo(idx + 1);
    });
    $('.header .side_nav li a').on('click', function (e) {
        let idx = $(this).parent().index();
        e.preventDefault();
        fullpage_api.moveTo(idx + 1);
    });

    $('.header .cover_lnk').on('wheel', function (e) {
        e.preventDefault();
        return false;
    })
})


$(function () {
    const st = gsap.timeline({
        repeat: -1,
        defaults: { duration: 3 },
    });
    st.from('.main_visual .s', {
        x: -4000,
        ease: "none"

    }).to('.main_visual .s', {
        x: 4000,
        ease: "none"

    });



    const tl = gsap.timeline({
        repeat: -1,
        defaults: { duration: 3 },
    });

    tl.to(".earth", {
        motionPath: {
            path: "#path",
            align: "#path",
            alignOrigin: [0.5, 0.5],
            //autoRotate: true,

        },
        duration: 10,
        ease: "none"
    })
})

