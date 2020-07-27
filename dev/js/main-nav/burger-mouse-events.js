
var burgerToArrowTimeline = gsap.timeline({paused:true});
var burgerArrowSpeed = 0.25;


burgerToArrowTimeline.to("#burger",{duration:burgerArrowSpeed, rotation:-90}, "animateBurger")
                        .to("#bottom-line",{duration:burgerArrowSpeed, y:-10}, "animateBurger")
                        .to("#top-line",{duration:burgerArrowSpeed, y:10}, "animateBurger")
                        .to("#left-arrow",{duration:burgerArrowSpeed, rotation:55}, "createArrow")
                        .to("#right-arrow",{duration:burgerArrowSpeed, rotation:-55}, "createArrow");




$("#burger").on("mouseenter", function(){
    console.log("mouse enter");
    burgerToArrowTimeline.play();
})



$("#burger").on("mouseleave", function(){
    console.log("mouse leave");
    burgerToArrowTimeline.reverse();
})