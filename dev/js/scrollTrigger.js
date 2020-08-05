/* ========================
    Hero Pinning
======================== */







/* ========================
    Header Animation v1
======================== */


// gsap.to("header",{duration: 0.25, backgroundColor: "#124559", scrollTrigger:{
//     trigger: "#index-hikes",
//     toggleActions: "restart reverse restart reverse",
//     markers: true,
//     id: "intro-toggle",
//     start: "top 74",
//     end: "bottom 74",
//     toggleClass:"blue-header"
// }});



/* ========================
    Header Animation v2
======================== */

const headerColorChange = gsap.timeline();
headerColorChange.to("header",{duration: 0.25, backgroundColor: "#124559"}, "burgerColorChange")
                .to("#top-line",{duration: 0.5, stroke: "#fff"}, "burgerColorChange")
                .to("#middle-line",{duration: 0.5, stroke: "#fff"}, "burgerColorChange")
                .to("#bottom-line",{duration: 0.5, stroke: "#fff"}, "burgerColorChange")
                .to("#up-left-arrow",{duration: 0.5, stroke: "#fff"}, "burgerColorChange")
                .to("#up-right-arrow",{duration: 0.5, stroke: "#fff"}, "burgerColorChange")
                .to("#down-left-arrow",{duration: 0.5, stroke: "#fff"}, "burgerColorChange")
                .to("#down-right-arrow",{duration: 0.5, stroke: "#fff"}, "burgerColorChange")


/* ========================
    Header Triggers v2
======================== */

gsap.utils.toArray("#index-hikes, #index-brands, #index-weather").forEach(element => {
    ScrollTrigger.create({
        animation: headerColorChange,
        trigger: element,
        toggleActions: "restart reverse restart reverse",
        markers: true,
        start: "top 74",
        end: "bottom 74",
        id:"header-change"
    });
});





/* ========================
    Logo Animation
======================== */

const logoTimeline = gsap.timeline();

gsap.set(".logos",{alpha:0, yPercent: 100});

logoTimeline.to(".logos",{duration:0.5, alpha:1, yPercent: 0, stagger:0.25});

ScrollTrigger.create({
    animation: logoTimeline,
    toggleActions: "restart none reverse none",
    trigger: "#index-brands",
    start: "top 60%",
    end: "bottom 60%",
    // markers: true,
    id: "logos"
    // scrub: 1
});


/* ========================
    Card Animation
======================== */

const cardTimeline = gsap.timeline();

cardTimeline.from("#card",{duration:1, alpha:0, xPercent:50})
            .from("#card div",{duration:1, alpha: 0, rotation:180},"-=0.5")
            .from("#card h2",{duration:1, alpha: 0, yPercent: 100},"-=0.5")
            .from("#card p",{duration:1, alpha: 0, yPercent: 100},"-=0.5");

ScrollTrigger.create({
    animation: cardTimeline,
    toggleActions: "restart none none none",
    trigger: "#planning-hero",
    start: "top 60%",
    end: "bottom 60%",
    // markers: true,
    id: "card",
    scrub: 1
});