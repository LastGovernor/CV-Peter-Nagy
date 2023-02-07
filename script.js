const linkedin = document.getElementById('linkedin');
const github = document.getElementById('github');
const bmiCalc = document.getElementById('portfolio-img');

linkedin.addEventListener('click', function(){
    window.open('https://www.linkedin.com/in/p%C3%A9ter-nagy-3ba647143' , '_blank');
});

github.addEventListener('click', function(){
    window.open('https://github.com/LastGovernor' , '_blank');
});

bmiCalc.addEventListener('click', function(){
    window.open('https://lastgovernor.github.io/BMI-Calculator/' , '_blank')
});