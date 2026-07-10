document.addEventListener('DOMContentLoaded', function() {
    if (typeof gsap === 'undefined') {
        console.warn('GSAP non chargé - animations désactivées');
        return;
    }

    if (typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    }

 //section hero animation   
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

//section partners animation
gsap.to(".partners__track", {
    xPercent: -50,     
    ease: "none",      
    duration: 15,      
    repeat: -1         
});

//animation for features section
const grid = document.querySelector('.features__grid');
const dots = document.querySelectorAll('.features__pagination .dot');

if (grid && dots.length > 0) {
    grid.addEventListener('scroll', () => {
        const scrollPercentage = grid.scrollLeft / (grid.scrollWidth - grid.clientWidth);
        const activeIndex = Math.round(scrollPercentage * (dots.length - 1));
        
        dots.forEach(dot => dot.classList.remove('is-active'));
        if (dots[activeIndex]) dots[activeIndex].classList.add('is-active');
    });
}

const featureCards = document.querySelectorAll('.feature-card');

featureCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            y: -15, 
            scale: 1.03, 
            boxShadow: "0 20px 30px rgba(0,0,0,0.15)", 
            duration: 0.4,
            ease: "back.out(1.5)" 
        });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            y: 0, 
            scale: 1,
            boxShadow: "0 0px 0px rgba(0,0,0,0)",
            duration: 0.3,
            ease: "power2.out"
        });
    });
});