var burgerAnimationTimeLine = gsap.timeline({paused:true});
var burgerAnimateSpeed = 0.25;

//reset the transformOrigin point for each line
gsap.set(".lines",{transformOrigin:"center"});

//1: first is the reference to the timeline (burgerAnimationTimeLine ), 2: what do you want to animate? 3{ what properties to do you want animate?}
// burgerAnimationTimeLine.to("#middle-line",{duration:burgerAnimateSpeed,alpha:0},"burgerStart")
//                         .to("#top-line",{duration:burgerAnimateSpeed,rotation:45, y:10, stroke: "#000000"},"burgerStart")
//                         .to("#bottom-line",{duration:burgerAnimateSpeed,rotation:-45, y:-10, stroke: "#000000", onReverseComplete:resetBurgerLinecsolor},"burgerStart");

//burgerAnimationTimeLine.to("#burger");


burgerAnimationTimeLine.to("#top-line",{duration:burgerAnimateSpeed, rotation:45}, "burgerToX")
                        .to("#bottom-line",{duration:burgerAnimateSpeed, rotation:-45}, "burgerToX")
                        .to("#middle-line",{duration:burgerAnimateSpeed, alpha:0}, "burgerToX")
                        .to("#down-right-arrow",{duration:burgerAnimateSpeed, alpha:0, rotation:0}, "burgerToX")
                        .to("#down-left-arrow",{duration:burgerAnimateSpeed, alpha:0, rotation:0}, "burgerToX");


var upArrowToBurger = gsap.timeline({paused:true});
upArrowToBurger.to("#top-line",{y:0},"backToBurger")
                .to("#bottom-line",{y:0},"backToBurger")
                .to("#middle-line",{alpha:1},"backToBurger")
                .to("#burger",{rotation:0},"backToBurger")
                .to("#up-right-arrow",{alpha:0},"backToBurger")
                .to("#up-left-arrow",{alpha:0},"backToBurger")
                .to("#down-right-arrow",{alpha:1},"backToBurger")
                .to("#down-left-arrow",{alpha:1},"backToBurger");


function animateBurger(){
    // check the  canYouSeeTheMenu bool valus
    if(canYouSeeTheMenu === true){
        // turn the burger into an X
        burgerAnimationTimeLine.play();
    }else{
        // turn the X into a burger
        upArrowToBurger.play();
    }
}

// function to change the color of hte burger lines back to red, only called on the compete timeline reverse of burgerAnimationTimeLine
// function resetBurgerLinecsolor(){
//     //change the burger lines back to red over 0.25 seconds
//     gsap.to(".lines",{duration:0.25, stroke:"#F25C54"});
// }