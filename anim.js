document.addEventListener("DOMContentLoaded", (event) => {

    gsap.registerPlugin(ScrollTrigger, EaselPlugin, TextPlugin);

    let tlWelcome = gsap.timeline({repeat: -1})
    tlWelcome.to('.welcome-description', {text: "Сохраняйте удаленные сообщения", duration: 2}, ">2")
    tlWelcome.to('.welcome-description', {text: "Ставьте уникальные статусы", duration: 2}, ">2")
    tlWelcome.to('.welcome-description', {text: "Инструменты для вашей гиперуникальности в Телеграме", duration: 2}, ">2")

    statusAnimation = () => {
        let tlStatus = gsap.timeline()
        tlStatus.fromTo("#about_status", {y:-70}, {opacity: 1, y: 0, duration: 1, ease: "power"}, "")
        tlStatus.fromTo("#example_status", {y:-70}, {opacity: 1, y: 0, duration: 1, ease: "power"}, "<0.5")
        tlStatus.fromTo("#possibly_statuses", {y:-70}, {opacity: 1, y: 0, duration: 1, ease: "power"}, "<0.5")
        tlStatus.to('.interesting', {opacity: 0.8, duration: 0.5, ease: "power"}, ">")
    }

    msgAnimation = () => {
        let tlMessage = gsap.timeline()
        tlMessage.fromTo(".deleted", {x:-70}, {opacity: 1, x: 0, duration: 1.4, ease: "power"}, "")
        tlMessage.fromTo(".gpt", {x:70}, {opacity: 1, x: 0, duration: 1.4, ease: "power"}, "<0.5")
    }

    endAnimation = () => {
        let tlEnd = gsap.timeline()
        tlEnd.to(".btn-start", {scale: 1, opacity: 1, duration: 1}, "")
        tlEnd.to(".btn-tg", {scale: 1, opacity: 0.7, duration: 1,}, "<")
    }

    ScrollTrigger.create({
        trigger: '#s2',
        start: "top center",
        end: "bottom center", 
        //markers: true,
        once: true,
        onEnter: statusAnimation
    }); 

    ScrollTrigger.create({
        trigger: '#s3',
        start: "top center",
        end: "bottom center",
        //markers: true,
        once: true,
        onEnter: msgAnimation
    }); 

    ScrollTrigger.create({
        trigger: '#s4',
        start: "top center",
        end: "bottom center",
        //markers: true,
        once: true,
        onEnter: endAnimation
    }); 


});