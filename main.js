'use strict';

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () =>{
  if(window.scrollY > navbarHeight){
    navbar.classList.add('navbar--dark');
  }else{
    navbar.classList.remove('navbar--dark');
  }
});

// Handle scrolling when tapping on t he navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click',(event) =>{
  
    const target = event.target;
    const link = target.dataset.link;
    if(link == null){
      return;
    }

    scrollIntoView(link);
});

// Handle click on "contact me" button on home
const homeConatactBtn = document.querySelector('.home__contact');
homeConatactBtn.addEventListener('click',() =>{
    scrollIntoView('#contact')

});

function scrollIntoView(selecor){
  const scrollTo = document.querySelector(selecor);
  scrollTo.scrollIntoView({ behavior : 'smooth'});
}

