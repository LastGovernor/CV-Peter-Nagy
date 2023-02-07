// Contact form
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const sendBtn = document.getElementById("sendmessage"); 
// Social media buttons
const linkedin = document.getElementById('linkedin');
const github = document.getElementById('github');
// Sticky Nav bar elements
const bmiCalc = document.getElementById('portfolio-img');
let navBar = document.querySelector('#grid-nav');
let navPos = navBar.getBoundingClientRect().top;
// Sticky Nav bar
window.addEventListener('scroll', e => {
    let scrollPos = window.scrollY;
    if(scrollPos > navPos){
        navBar.classList.add('sticky');
    } else {
        navBar.classList.remove('sticky');
    }
});
// Linkedin
linkedin.addEventListener('click', function(){
    window.open('https://www.linkedin.com/in/p%C3%A9ter-nagy-3ba647143' , '_blank');
});
// Github
github.addEventListener('click', function(){
    window.open('https://github.com/LastGovernor' , '_blank');
});
// Portfolio: BMI Calculator
bmiCalc.addEventListener('click', function(){
    window.open('https://lastgovernor.github.io/BMI-Calculator/' , '_blank');
});
