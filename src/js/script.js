document.addEventListener('DOMContentLoaded', () => {
    document.body.style.overflow = 'hidden';
    
    if (window.pageYOffset !== 0) {
        document.body.style.overflow = '';
    }
    
    setTimeout(() => {
        document.body.style.overflow = '';
    }, 6000)   
})