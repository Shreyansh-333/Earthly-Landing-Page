document.addEventListener('DOMContentLoaded', () => {
    let controller = new ScrollMagic.Controller();

    let timeline = new TimelineMax();
    timeline
    .from('.section_1_01', 4, {
        y: -100,
        x: +350,
        ease: Power3.easeInOut
    })
    .from('.section_1_02', 4, {
        y: +150,
        x: -550,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_03', 4, {
        y: -80,
        x: -500,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_04', 4, {
        y: -100,
        x: 700,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_05', 4, {
        y: -80,
        x: -500,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_06', 4, {
        y: -80,
        x: -750,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_07', 4, {
        y: -20,
        x: +450,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_08', 4, {
        y: 70,
        x: 450,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_09', 4, {
        y: 150,
        x: 600,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_10', 4, {
        y: 200,
        x: -500,
        ease: Power3.easeInOut
    }, '-=4')

    let scene = new ScrollMagic.Scene({
        triggerElement: '.first-section',
        duration: '150%',
        triggerHook: 0,
        offset: '20'
    })
    .setTween(timeline)
    .setPin('.first-section')
    .addTo(controller);

    // let timeline2 = new TimelineMax();
    // timeline2
    // .to('.top .image-container', 4, {
    //     height: 0
    // });

    // let scene2 = new ScrollMagic.Scene({
    //     triggerElement: '.second-section',
    //     duration: '100%',
    //     triggerHook: 0,
    //     offset: '100'
    // })
    // .setTween(timeline2)
    // .setPin('.second-section')
    // .addTo(controller);

    

    let timeline3 = new TimelineMax();
    timeline3
    .to('.section_3_00', 4, {
        y: -200,
        ease: Power3.easeInOut
    })
    .to('.section_3_01', 4, {
        x: 300,
        y: -190,
        ease: Power3.easeInOut
    }, '-=4')
    .to('.section_3_02', 4, {
        x: -320,
        y: -160,
        ease: Power3.easeInOut
    }, '-=4')
    .to('.section_3_03', 4, {
        x: -600,
        y: 0,
        ease: Power3.easeInOut
    }, '-=4')
    .to('.section_3_04', 4, {
        x: -200,
        y: 70,
        ease: Power3.easeInOut
    }, '-=4')
    .to('.section_3_05', 4, {
        x: 500,
        y: 90,
        ease: Power3.easeInOut
    }, '-=4')
    .to('.section_3_06', 4, {
        y: 200,
        ease: Power3.easeInOut
    }, '-=4')
    .to('.section_3_07', 4, {
        x: 350,
        y: 200,
        ease: Power3.easeInOut
    }, '-=4')
    .to('.section_3_08', 4, {
        x: -400,
        y: 200,
        ease: Power3.easeInOut
    }, '-=4')



    let scene3 = new ScrollMagic.Scene({
        triggerElement: '.third-section',
        duration: '100%',
        triggerHook: 0,
        offset: '0'
    })
    .setTween(timeline3)
    .setPin('.third-section')
    .addTo(controller);

    // let timeline4 = new TimelineMax();
    // timeline4
    // .to('.section_4_01', 4, {
    //     autoAlpha: 0
    // })
    // .from('.section_4_02', 4, {
    //     autoAlpha: 0
    // }, '-=4')
    // .from('.section_4_03', 4, {
    //     autoAlpha: 0
    // })
    // .from('.section_4_04', 4, {
    //     autoAlpha: 0
    // })

    // let scene4 = new ScrollMagic.Scene({
    //     triggerElement: '.forth-section',
    //     duration: '100%',
    //     triggerHook: 0,
    //     offset: '200'
    // })
    // .setTween(timeline4)
    // .setPin('.forth-section')
    // .addTo(controller);
})