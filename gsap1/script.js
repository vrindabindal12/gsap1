gsap.to(".section-1 img", {
    top: "-100%",
    duration: 10
}, 'clod')
gsap.to(".overlay", {
    opacity: 0,
    duration: 5,
    delay: 2
}, 'clod')
gsap.to(".mainHeading", {
    fontSize: "10vw",
    duration: 5,
}, 'clod')



// create
let mm = gsap.matchMedia();

// add a media query. When it matches, the associated function will run
mm.add("(max-width: 799px)", () => {

    // this setup code only runs when viewport is at least 800px wide
    gsap.to(".section-1 img", {
        top: "-100%",
        duration: 10
    }, 'clod')
    gsap.to(".overlay", {
        opacity: 0,
        duration: 5,
        delay: 2
    }, 'clod')
    gsap.to(".mainHeading", {
        fontSize: "15vw",
        duration: 5,
    }, 'clod')

});