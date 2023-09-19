window.onload = function () {
    showSkillProgress()
}
window.onscroll = function () {
    stickyNav()
}



/* ===============================================================================
   AOS & Swiper Library
   =============================================================================== */


AOS.init({
    offset: 60,
    duration: 1000,
    reset: true
});


const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: false,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});



/* ===============================================================================
   Navigation
   =============================================================================== */


const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav__menu');
const mobileNav = document.querySelector('.l-header');
const navItems = document.querySelectorAll('.nav__item');
const navLink = document.querySelectorAll('.nav__item__link');

menuBtn.addEventListener('click', toggleMenu);

let showMenu = false;

function toggleMenu() {
    if (!showMenu) {
        hamburger.classList.add('open');
        nav.classList.add('open');
        navItems.forEach(x => x.classList.add('open'))
        mobileNav.classList.add('open')
        showMenu = true;

    } else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        navItems.forEach(x => x.classList.remove('open'))
        mobileNav.classList.remove('open')
        showMenu = false;
    }
}

for (let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener('click', toggleMenu)

}


const navBar = document.querySelector('.l-header');

function stickyNav() {
    navBar.classList.toggle('sticky', window.scrollY > 0);
}

/* ===============================================================================
   Skill bar animation
   =============================================================================== */

const skillSection = document.querySelector('.skills__progress');

const progressBars = document.querySelectorAll('.skills__progress');

function showSkillProgress() {
    progressBars.forEach(p => {
        const value = p.dataset.progress;
        p.style.opacity = "1";
        p.style.width = `${value}%`
    })
}

function hideSkillProgress() {
    progressBars.forEach(p => {
        p.style.opacity = "0";
        p.style.width = "0";
    })
}

window.addEventListener('scroll', () => {
    const skillPos = skillSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight;
    if (skillPos < screenPos) {
        showSkillProgress()
    } else {
        hideSkillProgress()
    }
})

/* ===============================================================================
   Qualification
   =============================================================================== */

const educationButton = document.querySelector('.education-btn')
const workButton = document.querySelector('.work-btn');
const workContent = document.querySelector('.work')
const educationContent = document.querySelector('.education');

const option = document.querySelectorAll('.option');
for (let i = 0; i < option.length; i++){
    option[i].addEventListener('click', qualification)
}

let activeQualification = false
function qualification(){

    if (!activeQualification){
        workButton.classList.add('active')
        workContent.classList.remove('hidden')
        educationContent.classList.add('hidden')
        educationButton.classList.remove('active')
        activeQualification = true
        AOS.refresh();
    } else {
        workButton.classList.remove('active')
        workContent.classList.add('hidden')
        educationContent.classList.remove('hidden')
        educationButton.classList.add('active')
        activeQualification = false
        AOS.refresh();
    }
}



/* ===============================================================================
   Modal Image
   =============================================================================== */

const modal = document.querySelector(".modal");
const img = document.querySelectorAll(".project__img");
const modalImg = document.querySelector(".modal__img");

const arr = ["img/basca.gif", "img/IIS_dashboard.png", "img/CSN.png", "img/terraform.png"]


for (let i = 0; i < img.length; i++) {
    img[i].addEventListener('click', () => {
        modal.style.display = "flex";
        modalImg.src = arr[i ]
        document.body.style.overflow = "hidden"

    })
}

const modalButton = document.querySelector(".close");


modalButton.addEventListener('click', () => {
    modal.style.display = "none"
    document.body.style.overflow = "visible"

})


/* ===============================================================================
   Contact Form Validation
   =============================================================================== */

const inputField = document.querySelectorAll(".wrap__input__field");
const inputFocus = document.querySelectorAll(".wrap__input__focus");
const alert = document.querySelectorAll(".alert")

for (let i = 0; i < inputField.length; i++) {
    inputField[i].addEventListener('blur', () => {
        if (inputField[i].value >= 0) {
            inputFocus[i].style.borderColor = "red"
            inputFocus[i].style.visibility = "visible"
            alert[i].style.visibility = "visible"
        } else {
            inputFocus[i].style.visibility = "hidden"
            alert[i].style.visibility = "hidden"
        }
    })
}

