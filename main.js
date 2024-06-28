let nemuIcon =document.querySlector('#menu-iocn');
let navbar=document.querySelector('.navbar');
menuIcon.onclick = () =>{
    menuIcon.classlist.togggle('fa-xmark');
    navbar.classList.toggle('active');
} 
let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height){
navLinks.forEach.apply(links =>{
links.classList.remove('acive');
document.querySelector('header nav a[herf*=' +id +']').classList.add('acive');
});
        };
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

ScrollReveal({ 
    distance: '80px',
    duration:2000,
    delay: 200,

});
    ScrollReveal().reveal('.home-content ,heading',{origin:'top'});
    ScrollReveal().reveal('.home-img ,.services-container,.portfokio-box,.contact form',{origin:'buttom'});
    ScrollReveal().reveal('.home-content h1 ,.about-img',{origin:'left'});
    ScrollReveal().reveal('.home-contact p, .about-content',{origin:'right'});

    // const Typed = new typed('multiple-text',{
    //     strings: ['Frontend Developer' , 'Web Designer'],
    //     typeSpeed: 70,
    //     backSpeed:70,
    //     backDelay:1000,
    //     loop:true,
    // }

    // );
    document.addEventListener('DOMContentLoaded', () => {
        const dynamicText = document.getElementById('dynamic-text');
        const texts = ['Frontend Developer', 'Web Developer', 'Web Designer'];
        let index = 0;
    
        setInterval(() => {
            dynamicText.style.opacity = 0;
            setTimeout(() => {
                index = (index + 1) % texts.length;
                dynamicText.textContent = texts[index];
                dynamicText.style.opacity = 1;
            }, 500); // Match this to the CSS transition duration
        }, 4000); // 4 seconds for each text
    });
    