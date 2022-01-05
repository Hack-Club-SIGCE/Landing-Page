document.querySelectorAll('.nav-links').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    })
})

setTimeout(() => {
    document.querySelector(".loading").classList.add('shutLoading');
    document.querySelector("body").style.overflowY = "scroll";
}, 3000);
setTimeout(() => {
    document.querySelector(".loading").style.display = "none";
}, 3700);