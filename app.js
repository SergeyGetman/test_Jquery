

// $( document ).ready(function(){
//     const btn = document.querySelector(".start");
//     const text = document.querySelector("h1");
//     const cosmo = document.querySelector(".img-astro")

//
// });


// btn.click(function(){ // задаем функцию при нажатиии на элемент с классом out
//     btn.css({display: "none"});
//
//
// });
$(document).ready(function (){


    const btn = $(".start");
    const text = $("h1");
    const cosmo = $(".img-astro img");

    cosmo.css({display: "none"})
    text.css({display: "none"})

    btn.click(function (){
        btn.hide();

        text.fadeIn({queue : false,})
        cosmo.fadeIn({queue : false})
            //.animate({top: "-=80px"}, {queue : false, duration: 2000, easing: 'swing'})
            //.animate({top : "+=80px"}, {queue : false});

        text.animate({
            width : "70%",
            queue : false,
            marginLeft: "-20%",
            top: "10px",
            fontSize: "400px",
            borderWidth: "20px"
        },1000);

        cosmo.animate({
            height: "300px",
            left: "250px",
            top: "10px",
            fontSize: "400px",
        },{duration: 2000, easing: 'swing'});
          cosmo.animate({top: "80px"}, 2000);
          cosmo.animate({top: "-80px"}, 2000)

    })

})