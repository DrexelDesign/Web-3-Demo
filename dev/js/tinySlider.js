// console.log("tiny slider is working!");


$(document).ready(function () {

    console.log($(".slides").hasClass("my-slider"));
    if ($(".slides").hasClass("my-slider")) {
        tns({
            container: '.my-slider',
            //items: 1,
            gutter: 20,
            edgePadding: 50,
            //controls: false,
            controlsPosition: "bottom",
            navPosition: "bottom"
            //loop: false,
            //startIndex: 2,

            // responsive: {
            //       "350": {
            //         "items": 1
            //       },
            //       "768": {
            //         "items": 2
            //       },
            //       "1440": {
            //         "items": 3
            //       }
            // }
            //axis: "vertical"
            //"edgePadding": 50
            //slideBy: 'page',
            //autoplay: true
        });

    }

    if ($(".slides").hasClass("my-slider-2")) {
        tns({
            container: '.my-slider-2',
            //items: 1,
            gutter: 20,
            edgePadding: 50,
            //controls: false,
            controlsPosition: "bottom",
            navPosition: "bottom"
            //loop: false,
            //startIndex: 2,

            // responsive: {
            //       "350": {
            //         "items": 1
            //       },
            //       "768": {
            //         "items": 2
            //       },
            //       "1440": {
            //         "items": 3
            //       }
            // }
            //axis: "vertical"
            //"edgePadding": 50
            //slideBy: 'page',
            //autoplay: true
        });

    } else {
        console.log("No TinySlider found!");
    }

});