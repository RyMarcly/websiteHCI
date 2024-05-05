/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');




/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle) {
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    });
}





/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navToggle) {
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    });
}






/*==================== REMOVE MENU MOBILE ====================*/

const navLink = document.querySelectorAll('.navlink');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');

}

navLink.forEach((n) => n.addEventListener('click', linkAction));








/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*==================== CHANGE BACKGROUND HEADER ====================*/

function scrollHeader() {
    const header = document.getElementById('header');

    if(this.scrollY >= 80) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header')

}

window.addEventListener('scroll', scrollHeader);



function scrollup() {
    const scrollUp = document.getElementById('scroll-up');

    if(this.scrollY >= 80) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll')

}

window.addEventListener('scroll', scrollup);







/*==================== SHOW SCROLL UP ====================*/

/*==================== ABOUT TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
    tab.addEventListener('click',() => {
        const target = document.querySelector(tab.dataset.target);
            
        tabContents.forEach((tabContent) => {
            tabContent.classList.remove('tabactive');
        });


        target.classList.add('tabactive');

        tabs.forEach((tab) => {
            tab.classList.remove('tabactive');
        });

        tab.classList.add('tabactive');


    });
});





/*=============== CONTACT FORM =============== */

const contactForm = document.getElementById('contact-form'),
contactName = document.getElementById('contact-name'),
contactEmail = document.getElementById('contact-email'),
contactSubject = document.getElementById('contact-subject'),
contactMessage = document.getElementById('contact-message'),
contactError = document.getElementById('error-message');

const sendEmail = (e) => {
    e.preventDefault();

    if (
        contactName.value === '' ||
        contactEmail.value === '' ||
        contactSubject.value === '' ||
        contactMessage.value === ''


    ) {
        errorMessage.textContact = 'Write all the input fields'
    }

    else {
        emailjs.sendForm('service_vf3cajh','template_opua9l7','#contact-form','fTQs7qtVdpcCokci3').then(() => {
            error.Message.classList.add('color-first');
            error.Message.textContent = 'Message sent!';

            setTimeout(() => {
                errorMessage.textContent = '';
            }, 5000);
        }, (error) => {
            alert('Something went wrong.',error);
        });


        contactName.value = '';
        contactEmail.value = '';
        contactSubject.value = '';
        contactMessage.value = '';




    }


};

contactForm.addEventListener('submit',sendEmail);
