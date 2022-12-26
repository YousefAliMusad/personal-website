let Spans = document.querySelectorAll(".header .logo .menu span");
let Menu = document.querySelector(".menu");
let DarkBtn = document.querySelector(".dark-btn");
let Dark = document.querySelector("#dark-mode");
let Pages = document.querySelectorAll(".links-page")
let Logo_name = document.querySelector(".logo-name");
let Navbar = document.querySelector(".nav-bar");
let Avatar = document.querySelector("#avatar");
let Follow = document.querySelectorAll(".follow");
let FollowP = document.querySelector(".follow p");
let FollowA = document.querySelectorAll(".dark-icon")
let HomeTexth1 = document.querySelector(".text .h1");
let HomeTextp = document.querySelector(".text p");
let AboutBtni = document.querySelector(".text a i");
let AboutBtnp = document.querySelector(".text a");
let Home = document.querySelector("#home");
let Sec1 = document.querySelector(".sec-1")
let Sec2 = document.querySelector(".sec-2")
let Sec3 = document.querySelector(".sec-3")
let Box1 = document.querySelector("#box1")
let Box2 = document.querySelector("#box2")
let Box3 = document.querySelector("#box3")
let About = document.querySelector("#about")
let Aboutheader_h2 = document.querySelector(".about-header .h2")
let Aboutext_paragraph = document.querySelector(".about-text .paragraph p")
let Aboutext_h2 = document.querySelector(".about-text .h2-2")
let Aboutext_sec_p = document.querySelectorAll(".about-text .sections-about p")
let Box_p = document.querySelectorAll(".box .input p");
let Box_i = document.querySelectorAll(".box .input i");
let Progres1 = document.querySelector(".bg-proj-1")
let Progres2 = document.querySelector(".bg-proj-2")
let Progres3 = document.querySelector(".bg-proj-3")
let Home_img = document.querySelector(".info-home .img")
let Home_Text = document.querySelector(".info-home .text")
let About_sec = document.querySelector(".about-sec")
let Skills = document.querySelector("#skills")
let Skills_h2 = document.querySelector(".skills-header .h2")
let Skills_p = document.querySelectorAll(".sk-info p")
let Skills_prog = document.querySelectorAll(".skill .prog")
let Skill = document.querySelectorAll(".skill")
let Skills_prog_child = document.querySelectorAll(".prog .bg-proj")
let Port_header = document.querySelector(".port-header h2")
let Port_box = document.querySelectorAll(".port-sec .box")
let Port_p = document.querySelectorAll(".port-sec p")
let Port_a = document.querySelectorAll(".port-sec a")
let Portfolio = document.querySelector("#portfolio")
let Footer = document.querySelector("footer");
let Contact = document.querySelector("#contact");
let Contact_h2 = document.querySelector(".contact .contact-header h2");
let Contact_info = document.querySelector(".contact .fa-cont");
let Contact_info_2 = document.querySelector(".contact .fa-cont .contact-info");
let Contact_info_label = document.querySelectorAll(".contact .fa-cont .flex label");
let Contact_info_input = document.querySelectorAll(".contact .fa-cont .flex input");
let Contact_info_textarea = document.querySelectorAll(".contact .fa-cont .flex textarea");
let Contact_info_send = document.querySelector(".contact .fa-cont .form .send");
let Contact_info_h2 = document.querySelector(".contact .contact-info h2");
let Contact_info_i = document.querySelectorAll(".contact .contact-info .info i");
let Contact_info_p = document.querySelectorAll(".contact .contact-info .info p");
let Contact_info_Social_i = document.querySelectorAll(".contact .contact-info .contact-social a i");
let ToTop = document.querySelector(".content .to-top");
let ToTop_i = document.querySelector(".content .to-top i");

Menu.onclick = function() {
    Spans.forEach(span =>{
        span.classList.toggle("active")
    });
    Pages.forEach(a => {
        a.classList.toggle("active")
    });
    Logo_name.classList.toggle("active");
    Navbar.classList.toggle("active");
    Menu.classList.toggle("active");
}

DarkBtn.onclick = function() {
    ToTop.classList.toggle("active")
    ToTop_i.classList.toggle("active")
    Contact_info_Social_i.forEach(e => {
        e.classList.toggle("active")
    })
    Contact_info_p.forEach(e => {
        e.classList.toggle("active")
    })
    Contact_info_i.forEach(e => {
        e.classList.toggle("active")
    })
    Contact_info_h2.classList.toggle("active")
    Contact_info_send.classList.toggle("active")
    Contact_info_label.forEach(e => {
        e.classList.toggle("active")
    })
    Contact_info_textarea.forEach(e => {
        e.classList.toggle("active")
    })
    Contact_info_input.forEach(e => {
        e.classList.toggle("active")
    })
    Contact_info.classList.toggle("active")
    Contact_info_2.classList.toggle("active")
    Contact_h2.classList.toggle("active")
    Contact.classList.toggle("active")
    Footer.classList.toggle("active")
    Port_p.forEach(e => {
        e.classList.toggle("active")
    })
    Port_a.forEach(e => {
        e.classList.toggle("active")
    })
    Port_box.forEach(el => {
        el.classList.toggle("active")
    })
    Portfolio.classList.toggle("active")
    Port_header.classList.toggle("active")
    Skills_prog_child.forEach(e => {
        e.classList.toggle("active")
    })
    Skills_prog.forEach(e => {
        e.classList.toggle("active")
    })
    Skills_h2.classList.toggle("active")
    Skills_p.forEach(e =>{
        e.classList.toggle("active")
    })
    Dark.classList.toggle("active");
    FollowP.classList.toggle("active");
    FollowA.forEach(i => {
        i.classList.toggle("active")
    })
    HomeTexth1.classList.toggle("active");
    HomeTextp.classList.toggle("active");
    AboutBtni.classList.toggle("active");
    AboutBtnp.classList.toggle("active");
    Home.classList.toggle("active");

    Aboutheader_h2.classList.toggle("active")
    Aboutext_paragraph.classList.toggle("active")
    Aboutext_h2.classList.toggle("active")
    Aboutext_sec_p.forEach(sec_p => {
        sec_p.classList.toggle("active")
    })
    Box_p.forEach(p =>{
        p.classList.toggle("active")
    })
    Box_i.forEach(i =>{
        i.classList.toggle("active")
    })
    About.classList.toggle("active")
    Skills.classList.toggle("active")
}
Sec1.onclick = function(){
    Box1.style.display = "block"
    Box2.style.display = "none"
    Box3.style.display = "none"
}
Sec2.onclick = function(){
    Box1.style.display = "none"
    Box2.style.display = "block"
    Box3.style.display = "none"
}
Sec3.onclick = function(){
    Box1.style.display = "none"
    Box2.style.display = "none"
    Box3.style.display = "block"
}
window.onscroll = function() {
    if (window.scrollY >= 430) {
        ToTop.style.cssText ="right: 20px"
    }
    else {
        ToTop.style.cssText ="right: -50px"
    }
    if (scrollY >= 1047) {
        Progres1.style.width ="80%";
        Progres2.style.width ="95%";
        Progres3.style.width ="70%";
    }
    else {
        Progres1.style.width ="0%";
        Progres2.style.width ="0%";
        Progres3.style.width ="0%";
    }
    if(scrollY >= 180) {
        About_sec.style.cssText = "left:0%;opacity: 100%;"
    }
}
ToTop.onclick = function() {
    window.scrollTo({
        top : 0,
        behavior :"smooth"
    })
}
window.onload = function() {
    Home_img.style.right = "0%"
    Home_img.style.opacity = "100%"
    Home_Text.style.left = "0%"
    Home_Text.style.opacity = "100%"
}