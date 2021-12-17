Splitting();
gsap.defaults({
    ease: "back",
    duration: 1,
});
const headerTL = gsap.timeline({ delay: 1 });
headerTL
    .from(".tsa #introHeader", {
        y: -100,
        ease: "power3",
        duration: 1,
    })
    .from(".tsa .iconScroll", {
        opacity: 0,
        y: "+=100",
        ease: "power3",
        duration: 1,
    });

const section01TL = gsap.timeline({
    scrollTrigger: {
        trigger: ".section01",
        // markers: true,
        start: "top top",
        end: "bottom+=1000 top",
        scrub: 1,
        pin: true,
    },
});
section01TL
    .from(".section01 .txt01 .char", {
        opacity: 0,
        x: "+=100",
        stagger: {
            each: 0.1,
        },
    })
    .from(CSSRulePlugin.getRule(".tsa .section01 .txt01:after"), {
        cssRule: {
            scaleX: 0,
        },
        ease: "lineaar",
    })
    .from(".section01 .txt02 .char", {
        opacity: 0,
        x: "+=100",
        stagger: {
            each: 0.1,
        },
    })
    .from(".section01 .txt0301 .char", {
        opacity: 0,
        scale: 3,
        stagger: {
            each: 0.1,
        },
    })
    .from(".section01 .txt0302 .char", {
        opacity: 0,
        scale: 3,
        stagger: {
            each: 0.1,
        },
    })
    .from(".section01 .txt0303 .char", {
        opacity: 0,
        scale: 3,
        stagger: {
            each: 0.1,
        },
    })
    .from(".section01 .txt04", {
        opacity: 0,
        scale: 3,
    });

const section02TL = gsap.timeline({
    scrollTrigger: {
        trigger: ".section02",
        // markers: true,
        start: "top top",
        end: "bottom+=1000 top",
        scrub: 1,
        pin: true,
    },
});
section02TL
    .from(".section02 .title .char", {
        x: "+=100",
        opacity: 0,
        stagger: {
            each: 0.1,
        },
    })
    .from(".section02 .mainTxt01 .char", {
        x: "+=100",
        opacity: 0,
        stagger: {
            each: 0.1,
        },
    })
    .from(".section02 .mainTxt02 .char", {
        x: "-=100",
        opacity: 0,
        stagger: {
            each: 0.1,
        },
    })
    .from(".section02 .mainTxt03 .char", {
        x: "+=100",
        opacity: 0,
        stagger: {
            each: 0.1,
        },
    })
    .from(".section02 .circleList li", {
        scale: 0,
        opacity: 0,
        ease: "elastic",
        stagger: {
            each: 0.1,
        },
    })
    .from(".section02 .cduBox", {
        scale: 3,
        opacity: 0,
    });

const section03TL = gsap.timeline({
    scrollTrigger: {
        trigger: ".section03",
        // markers: true,
        start: "top top",
        end: "bottom+=500 top",
        scrub: 1,
        pin: true,
    },
});
section03TL
    .from(".section03 .title .char", {
        x: "+=100",
        opacity: 0,
        stagger: {
            each: 0.1,
        },
    })
    .from(".section03 .mainTxt .char", {
        scale: 0,
        opacity: 0,
        stagger: {
            each: 0.1,
        },
    })
    .from(".section03 .list li", {
        x: "+=100",
        opacity: 0,
        stagger: {
            each: 0.1,
        },
    })
    .from(".section03 .redBox", {
        y: "+=100",
        opacity: 0,
    })
    .from(".section03 .airplane", {
        x: "-=100",
        y: "+=100",
        opacity: 0,
    });

const section04TL = gsap.timeline({
    scrollTrigger: {
        trigger: ".section04",
        // markers: true,
        start: "top top+=80",
        end: "bottom+=500 top",
        scrub: 1,
        pin: true,
    },
});
section04TL
    .from(".section04 .title .char", {
        x: "+=100",
        opacity: 0,
        stagger: {
            each: 0.1,
        },
    })
    .from(".section04 .mainTxt .char", {
        scale: 0,
        opacity: 0,
        stagger: {
            each: 0.1,
        },
    })
    .from(".section04 .list li:nth-child(1) .txtBox", {
        y: "+=100",
        opacity: 0,
    })
    .from(".section04 .list li:nth-child(1) .imgBox", {
        y: "-=100",
        opacity: 0,
    })
    .from(".section04 .list li:nth-child(2) .txtBox", {
        y: "+=100",
        opacity: 0,
    })
    .from(".section04 .list li:nth-child(2) .imgBox", {
        y: "-=100",
        opacity: 0,
    })
    .from(".section04 .list li:nth-child(3) .imgBox", {
        y: "+=100",
        opacity: 0,
    })
    .from(".section04 .list li:nth-child(3) .txtBox", {
        y: "-=100",
        opacity: 0,
    })
    .from(".section04 .list li:nth-child(4) .imgBox", {
        y: "+=100",
        opacity: 0,
    })
    .from(".section04 .list li:nth-child(4) .txtBox", {
        y: "-=100",
        opacity: 0,
    });

const section05TL = gsap.timeline({
    scrollTrigger: {
        trigger: ".section05",
        // markers: true,
        start: "top top+=80",
        end: "bottom+=500 top",
        scrub: 1,
        pin: true,
    },
});
section05TL
    .from(".section05 .title .char", {
        x: "+=100",
        opacity: 0,
        stagger: {
            each: 0.1,
        },
    })
    .from(".section05 .mainTxt .char", {
        scale: 0,
        opacity: 0,
        stagger: {
            each: 0.1,
        },
    })
    .from(".section05 .list li:nth-child(1)", {
        y: "+=100",
        opacity: 0,
    })
    .from(".section05 .list li:nth-child(2)", {
        y: "-=100",
        opacity: 0,
    })
    .from(".section05 .list li:nth-child(3)", {
        y: "+=100",
        opacity: 0,
    })
    .from(".section05 .list li:nth-child(4)", {
        y: "-=100",
        opacity: 0,
    })
    .from(".section05 .list li:nth-child(5)", {
        y: "+=100",
        opacity: 0,
    })
    .from(CSSRulePlugin.getRule(".tsa .section05 li::after"), {
        cssRule: {
            scale: 0,
        },
        stagger: 0.1,
        duration: 2,
        ease: "power3",
    });

const section06TL = gsap.timeline({
    scrollTrigger: {
        trigger: ".section06",
        // markers: true,
        start: "top top",
        end: "bottom+=1000 top",
        scrub: 1,
        pin: true,
    },
});
section06TL
    .from(".section06 .mainTxt .char", {
        scale: 0,
        opacity: 0,
        stagger: {
            each: 0.1,
        },
    })
    .from(".section06 .subTxt .char", {
        x: "+=100",
        opacity: 0,
        stagger: {
            each: 0.1,
        },
    })
    .from(".section06 .txtDash .char", {
        x: "+=100",
        opacity: 0,
        stagger: {
            each: 0.1,
        },
    })
    .from(".section06 .img", {
        scale: 3,
        opacity: 0,
    })
    .from(".section06 .shortcut .char", {
        x: "+=100",
        opacity: 0,
        stagger: {
            each: 0.1,
        },
    })
    .from(".section06 .btns a", {
        y: "+=100",
        opacity: 0,
        stagger: {
            each: 0.2,
        },
    });
