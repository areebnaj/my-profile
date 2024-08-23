window.addEventListener('scroll', ()=>{
    if (window.pageYOffset > 100){
        document.getElementById ('navbar1-id').style.backgroundColor ='red'
    }else {
        document.getElementById('navbar1-id').style.backgroundColor =''
    }
})

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
let header = document.getElementById("navbar1-id");

// Get the offset position of the navbar
let sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky.scrollY(300px, blue)");
  } else {
    header.classList.remove("sticky");
  }
}


// Scroll functions 
ScrollReveal({
    reset:true,
    distance :'60px',
    duration: 2500,
    delay: 400
});

ScrollReveal().reveal('.homeContent ,.portfolioHead', {delay:500, origin:'left'});
ScrollReveal().reveal('.homeImg' ,  {delay:500, origin:'right'});
ScrollReveal().reveal('.social, .homeBtn', {delay:700, origin:'bottom' , setInterval:500});
ScrollReveal().reveal('.aboutHead', {delay:500, origin:'left'});
ScrollReveal().reveal('.aboutPara, .portfolioItems', {delay:700, origin:'bottom' , interval: 400});
ScrollReveal().reveal('.serviceitem1, .serviceitem4', {delay:600, origin:'bottom' , interval: 200});
ScrollReveal().reveal('.serviceitem3', {delay:600, origin:'left' , interval: 200});
ScrollReveal().reveal('.serviceitem2', {delay:600, origin:'right' , interval: 200});
ScrollReveal().reveal('.serviceContact', {delay:500, origin:'right' , interval: 400});
ScrollReveal().reveal('.map h4', {delay:400, origin:'left' , interval: 200});
ScrollReveal().reveal('.contactinfo', {delay:400, origin:'bottom' , interval: 200});