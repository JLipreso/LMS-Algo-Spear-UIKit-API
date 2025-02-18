export function scrollToTop() {
    
    const start = window.scrollY;
    const duration = 800;
    const startTime = performance.now();
  
    const easeInOutQuad = (t: number) => {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    };

    const animateScroll = (currentTime: number) => {
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1); // Ensure progress doesn't exceed 1 (end)

        const easeProgress = easeInOutQuad(progress);
        window.scrollTo(0, start - (start * easeProgress));

        if (progress < 1) {
        requestAnimationFrame(animateScroll);
        }
    };

    requestAnimationFrame(animateScroll);
}