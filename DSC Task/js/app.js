$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    autoWidth:true,
    // nav:true,
    responsive:{
        0:{
            items:1
        },
        // 768:{
        //     items:1
        // },
        1200:{
            items:2
        }
    },
    autoplay:true,
    autoplayTimeout:3000,
    dots:false
})