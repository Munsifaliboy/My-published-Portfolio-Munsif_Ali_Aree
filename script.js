// Elegant Fade-In Effect on Scroll for Elements
document.addEventListener("DOMContentLoaded", () => {
    const targetElements = document.querySelectorAll(".vision-card, .passion-item, .quote-card, .gallery-item");
    
    const displayOnScroll = () => {
        const viewportTrigger = window.innerHeight / 6 * 5;
        
        targetElements.forEach(element => {
            const elementTopPosition = element.getBoundingClientRect().top;
            
            if(elementTopPosition < viewportTrigger) {
                element.style.opacity = "1";
                element.style.transform = "translateY(0)";
                element.style.transition = "all 0.7s ease-in-out";
            }
        });
    };

    // Setting up initial properties for seamless premium fade animation
    targetElements.forEach(element => {
        element.style.opacity = "0";
        element.style.transform = "translateY(30px)";
    });

    window.addEventListener("scroll", displayOnScroll);
    displayOnScroll(); // Instant activation on landing
});