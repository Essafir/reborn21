document.addEventListener('DOMContentLoaded', function() {
    if (typeof gsap === 'undefined') {
        console.warn('GSAP non chargé - animations désactivées');
        return;
    }

    if (typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    }

    
    gsap.from(".hero__circle", {
        scale: 0.5,
        opacity: 0,
        duration: 1.2,
        ease: "back.out(1.5)",
        delay: 0.1
    });

    gsap.from(".hero__circle-ring", {
        scale: 0.8,
        opacity: 0,
        duration: 1.4,
        ease: "power2.out",
        delay: 0.3
    });

    gsap.from(".hero__badge", {
        x: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.8
    });

    gsap.from(".hero__content > *", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power2.out",
        delay: 0.2
    });

    
    gsap.from(".top-bar", {
        y: -50,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out"
    });

});
