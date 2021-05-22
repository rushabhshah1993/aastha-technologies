document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        if(document.querySelector('.active')){
            document.querySelector('.active').classList.remove('active');
        }
        this.classList.add('active');

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const sections = document.querySelectorAll(".section");
const menu_links = document.querySelectorAll(".nav-item");
const sectionMargin = 200;
const makeActive = (link) => menu_links[link].classList.add("active");
const removeActive = (link) => menu_links[link].classList.remove("active");
const removeAllActive = () => [...Array(sections.length).keys()].forEach((link) => removeActive(link));
let currentActive = 0;

window.addEventListener('scroll', event => {
    const current = sections.length - [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - sectionMargin ) - 1
    if (current !== currentActive) {
        removeAllActive();
        currentActive = current;
        makeActive(current);
    }
})  

