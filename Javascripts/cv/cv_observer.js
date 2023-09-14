export function cvObserve(){
    const observerLines = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('showLine');
            } else {
                entry.target.classList.remove('showLine');
            }
        });
    });
    
    const observerFade = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('showFade');
            } else {
                entry.target.classList.remove('showFade');
            }
        });
    });
    
    const hiddenLines = document.querySelectorAll('.hiddenLine');
    hiddenLines.forEach((hiddenLine) => observerLines.observe(hiddenLine));
    
    const hiddenFadeFR = document.querySelectorAll('.hiddenFadeFR');
    hiddenFadeFR.forEach((hiddenFadeFromRight) => observerFade.observe(hiddenFadeFromRight));
    
    const hiddenFadeFL = document.querySelectorAll('.hiddenFadeFL');
    hiddenFadeFL.forEach((hiddenFadeFromLeft) => observerFade.observe(hiddenFadeFromLeft));
}