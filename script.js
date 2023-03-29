// Scrolling to view elements
const home = document.getElementById('home');
const about = document.getElementById('about');
const skills = document.getElementById('skills');
const portfolio = document.getElementById('portfolio');
const contact = document.getElementById('contact');
// Hamburger nav 
const navToggle = document.querySelector('.nav-toggle');
const navCenter = document.querySelector('.nav-center');
const nav = document.querySelector('.flex-nav');
// Contact form
const sendBtn = document.getElementById("sendmessage");
const name = document.getElementById('name');
const email = document.getElementById('email');
const messageCont = document.getElementById('message-content');
const subject = document.getElementById('subject');
// Sticky Nav bar elements
let navBar = document.querySelector('.flex-nav');
let navPos = navBar.getBoundingClientRect().top;
// Sticky Nav bar
window.addEventListener('scroll', e => {
    let scrollPos = window.scrollY;
    if(scrollPos >= navPos){
        navBar.classList.add('sticky');
    } else {
        navBar.classList.remove('sticky');
    }
});
// Hamburger nav
navToggle.addEventListener('click', toggleButton);

function toggleButton() {
    navCenter.classList.toggle('active');
    nav.classList.toggle('active');
}
// SMTPJS to email sending
function sendEmail(){
    if(email.value !== ''){
        Email.send({
            SecureToken: "e3685fc6-be3f-4010-aa63-0ee5c8e8e227",
            To: 'p.nagy9@gmail.com',
            From: 'p.nagy9@gmail.com',
            Subject: subject.value,
            Body: `Name: ${name.value}\nEmail: ${email.value}\n\n ${messageCont.value}`,
    
        }).then(
            message => alert(message)
        );
    }
    else{
        alert('Please give an email address!');
    }
    
    name.value = '';
    email.value = '';
    messageCont.value = '';
    subject.value = '';
}

sendBtn.addEventListener('click', sendEmail);

// ScrollToView
function scrollToPos(a){
    document.getElementById(a).scrollIntoView(true);
}
// Offset 
function offset(){
    let value = window.scrollY;
    window.scrollTo(0, value - 80);
}

home.addEventListener('click', function(){
    scrollToPos('anchor-home');
    window.scrollTo(0, 0);
});
about.addEventListener('click', function(){
    scrollToPos('anchor-about');
    offset();
});
skills.addEventListener('click', function(){
    scrollToPos('anchor-skills');
    offset();
});
portfolio.addEventListener('click', function(){
    scrollToPos('anchor-portfolio');
    offset();
});
contact.addEventListener('click', function(){
    scrollToPos('anchor-contact');
});