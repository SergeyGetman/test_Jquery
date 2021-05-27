


$(document).ready(function (){


    const btn = $(".start");
    const text = $("h1");
    const cosmo = $(".img-astro img");

    cosmo.css({display: "none"})
    text.css({display: "none"})

    btn.click(function (){
        btn.hide();
        $(".footer").css({
            transform: "rotate(0)"
        })

        text.fadeIn({queue : false,})
        cosmo.fadeIn({queue : false})

        text.animate({
            width : "70%",
            queue : false,
            marginLeft: "-20%",
            top: "10px",
            fontSize: "400px",

        },1000);

        cosmo.animate({
            height: "400px",
            left: "250px",
            top: "10px",

        },1200);

        for(let i = 0; i < 2; i++){
            cosmo.animate({
                height : "550px",
                transition : "0.4s"

            }, 200);
            cosmo.animate({
                height: "380px",
                transition : "0.3s"
            }, 100);

        }

        for(let i = 0; i < 3; i++){
            cosmo.animate({top: "40px"}, 1000);
            cosmo.animate({top: "-40px"}, 1000);
        }


    })

})

