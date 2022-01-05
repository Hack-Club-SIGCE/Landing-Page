document.querySelectorAll('.nav-links').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(`#${anchor.innerHTML.toLowerCase()}`).scrollIntoView({
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

let hamburger = document.querySelector('.hamburger');
let mobile = document.querySelector(".mobile");

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("is-active");
    mobile.classList.toggle('hamburgerMenu');
    document.querySelector("body").classList.toggle('overflowY')
})
document.querySelectorAll('.mob-links').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(`#${anchor.innerHTML.toLowerCase()}`).scrollIntoView({
            behavior: 'smooth'
        });
        hamburger.click();
    })
})