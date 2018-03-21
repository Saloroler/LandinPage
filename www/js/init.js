$('.screenshots-carousel').slick({
    arrows: false,
    centerMode: true,
    centerPadding: '140px',
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});

//slick nav init
$('.header-nav').slicknav({
    label: '',
    duration: 1000,
    appendTo:'#header .container'
});