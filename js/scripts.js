const typedTextSpan = document.querySelector(".typed-text");

const textArray=["FullStack Developer.","Frontend Developer."," Developer.","Coder.","UI/UX Designer."];
const typingDelay=200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex=0;
let charIndex=0;

function type(){
    if(charIndex<textArray[textArrayIndex].length){
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else{
        setTimeout(erase , newTextDelay);
    }
}
function erase(){
    if(charIndex > 0){
        typedTextSpan.textContent  = textArray[textArrayIndex].substring(0,charIndex-1);
        charIndex--;
        setTimeout(erase , erasingDelay);
    }
    else{
        textArrayIndex++;
        if(textArrayIndex>=textArray.length) textArrayIndex=0;
        setTimeout(type, typingDelay+1100);
    }
}

document.addEventListener("DOMContentLoaded",function(){
    setTimeout(type , newTextDelay+250);
});

/*//function for toggling to dark and light theme/
document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.querySelector('#checkbox');
    var navbar = document.querySelector('.navbar');
    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            document.querySelector('body').classList.add("dark-theme");
            navbar.classList.replace("navbar-light","navbar-dark");
            navbar.classList.replace("bg-light","bg-dark");
        } else {
            document.querySelector('body').classList.remove("dark-theme");
            navbar.classList.replace("navbar-dark","navbar-light");
            navbar.classList.replace("bg-dark","bg-light");
        }
    });
});//*/
