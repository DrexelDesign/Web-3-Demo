
var burgerToArrowTimeline = gsap.timeline({paused:true});
var burgerArrowSpeed = 0.25;


burgerToArrowTimeline.to("#burger",{duration:burgerArrowSpeed, rotation:-90}, "animateBurger")
                        .to("#bottom-line",{duration:burgerArrowSpeed, y:-10}, "animateBurger")
                        .to("#top-line",{duration:burgerArrowSpeed, y:10}, "animateBurger")
                        .to("#down-left-arrow",{duration:burgerArrowSpeed, rotation:55}, "createArrow")
                        .to("#down-right-arrow",{duration:burgerArrowSpeed, rotation:-55}, "createArrow");


gsap.set("#up-left-arrow",{transformOrigin:"right center", alpha:0});
gsap.set("#up-right-arrow",{transformOrigin:"right center", alpha:0});

var xToUpArrowTimeline = gsap.timeline({paused:true});          
xToUpArrowTimeline.to("#top-line",{duration:burgerArrowSpeed, rotation:0},"createArrowUp")
                    .to("#bottom-line",{duration:burgerArrowSpeed, rotation:0},"createArrowUp")
                    .to("#up-left-arrow",{duration:burgerArrowSpeed, rotation:55, alpha:1},"createArrowUp")
                    .to("#up-right-arrow",{duration:burgerArrowSpeed, rotation:-55, alpha:1},"createArrowUp")


$("#burger").on("mouseenter", function(){
    //console.log("mouse enter");

    //console.log(canYouSeeTheMenu + " menu visible");
    if(canYouSeeTheMenu === false){
        burgerToArrowTimeline.play();
    }else{
        xToUpArrowTimeline.play()
    }
})



$("#burger").on("mouseleave", function(){
    //console.log("mouse leave");
    //console.log(canYouSeeTheMenu + " menu visible");

    if(canYouSeeTheMenu === false){
        burgerToArrowTimeline.reverse();
    }else{
        xToUpArrowTimeline.reverse()
    }
    
})