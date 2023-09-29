//FUNCTIONS
//Navigation Bar & Hamburger
function openMenu(){
  document.body.classList += " menu--open"
}

function closeMenu(){
  document.body.classList.remove('menu--open')
}


//Portfolio Modal
//Desktop
const portfolioModal = document.getElementById("portfolio__modal");
const detailsAnchor = document.getElementById("details-anchor");

portfolioModal.style.display = "none";

detailsAnchor.addEventListener("mouseover", () => {
  portfolioModal.style.display = "block";
})

portfolioModal.addEventListener("mouseleave", () => {
  portfolioModal.style.display = "none";
})

//Header Image
document.getElementById("header__img").addEventListener("click", () => {
  document.getElementById("contact-section").scrollIntoView({behavior: 'smooth'});
})


//Change Important Links Colour depending on Background Colour
//FOR FIRST WHITE SECTION
//First Link
const link = document.querySelector('.div1');
const sections = document.querySelector('.white-sections');


const linkObserverCallback = (watchEntry, linkObserver) => {
  if(!watchEntry[0].isIntersecting) {
    link.classList.remove('dark-theme');
    link.classList.add('imp__link--anchor')
  } else {
    link.classList.remove('imp__link--anchor');
    link.classList.add('dark-theme');
  }
}

const linkObserverOptions = {
  rootMargin: '-110px',
  threshold: 0
}


const linkObserver = new IntersectionObserver(linkObserverCallback, linkObserverOptions);

linkObserver.observe(sections);


//Second Link
const secLink = document.querySelector('.div2');
const secSections = document.querySelector('.white-sections');


const secLinkObserverCallback = (watchEntry, secLinkObserver) => {
  if(!watchEntry[0].isIntersecting) {
    secLink.classList.remove('dark-theme');
    secLink.classList.add('imp__link--anchor')
  } else {
    secLink.classList.remove('imp__link--anchor');
    secLink.classList.add('dark-theme');
  }
}

const secLinkObserverOptions = {
  rootMargin: '-110px',
  threshold: 0
}


const secLinkObserver = new IntersectionObserver(secLinkObserverCallback, secLinkObserverOptions);

secLinkObserver.observe(secSections);


//Third Link
const thirdLink = document.querySelector('.div3');
const thirdSections = document.querySelector('.white-sections');


const thirdLinkObserverCallback = (watchEntry, thirdLinkObserver) => {
  if(!watchEntry[0].isIntersecting) {
    thirdLink.classList.remove('dark-theme');
    thirdLink.classList.add('imp__link--anchor')
  } else {
    thirdLink.classList.remove('imp__link--anchor');
    thirdLink.classList.add('dark-theme');
  }
}

const thirdLinkObserverOptions = {
  rootMargin: '-110px',
  threshold: 0
}


const thirdLinkObserver = new IntersectionObserver(thirdLinkObserverCallback, thirdLinkObserverOptions);

thirdLinkObserver.observe(thirdSections);


//Fourth Link
const fourthLink = document.querySelector('.div4');
const fourthSections = document.querySelector('.white-sections');


const fourthLinkObserverCallback = (watchEntry, fourthLinkObserver) => {
  if(!watchEntry[0].isIntersecting) {
    fourthLink.classList.remove('dark-theme');
    fourthLink.classList.add('imp__link--anchor')
  } else {
    fourthLink.classList.remove('imp__link--anchor');
    fourthLink.classList.add('dark-theme');
  }
}

const fourthLinkObserverOptions = {
  rootMargin: '-110px',
  threshold: 0
}


const fourthLinkObserver = new IntersectionObserver(fourthLinkObserverCallback, fourthLinkObserverOptions);

fourthLinkObserver.observe(fourthSections);




//FOR SECOND WHITE SECTION
const linkFirst = document.querySelector('.div1');
const sectionsFirst = document.querySelector('.white-section-2');


const linkObserverCallbackFirst = (watchEntry, linkObserverFirst) => {
  if(!watchEntry[0].isIntersecting) {
    linkFirst.classList.remove('dark-theme');
    linkFirst.classList.add('imp__link--anchor')
  } else {
    linkFirst.classList.remove('imp__link--anchor');
    linkFirst.classList.add('dark-theme');
  }
}

const linkObserverOptionsFirst = {
  rootMargin: '-110px',
  threshold: 0
}


const linkObserverFirst = new IntersectionObserver(linkObserverCallbackFirst, linkObserverOptionsFirst);

linkObserverFirst.observe(sectionsFirst);


//Second Link
const linkSec = document.querySelector('.div2');
const sectionsSec = document.querySelector('.white-section-2');


const linkObserverCallbackSec = (watchEntry, linkObserverSec) => {
  if(!watchEntry[0].isIntersecting) {
    linkSec.classList.remove('dark-theme');
    linkSec.classList.add('imp__link--anchor')
  } else {
    linkSec.classList.remove('imp__link--anchor');
    linkSec.classList.add('dark-theme');
  }
}

const linkObserverOptionsSec = {
  rootMargin: '-110px',
  threshold: 0
}


const linkObserverSec = new IntersectionObserver(linkObserverCallbackSec, linkObserverOptionsSec);

linkObserverSec.observe(sectionsSec);


//Third Link
const linkThird = document.querySelector('.div3');
const sectionsThird = document.querySelector('.white-section-2');


const linkObserverCallbackThird = (watchEntry, linkObserverThird) => {
  if(!watchEntry[0].isIntersecting) {
    linkThird.classList.remove('dark-theme');
    linkThird.classList.add('imp__link--anchor')
  } else {
    linkThird.classList.remove('imp__link--anchor');
    linkThird.classList.add('dark-theme');
  }
}

const linkObserverOptionsThird = {
  rootMargin: '-110px',
  threshold: 0
}


const linkObserverThird = new IntersectionObserver(linkObserverCallbackThird, linkObserverOptionsThird);

linkObserverThird.observe(sectionsThird);


//Third Link
const linkFourth = document.querySelector('.div4');
const sectionsFourth = document.querySelector('.white-section-2');


const linkObserverCallbackFourth = (watchEntry, linkObserverFourth) => {
  if(!watchEntry[0].isIntersecting) {
    linkFourth.classList.remove('dark-theme');
    linkFourth.classList.add('imp__link--anchor')
  } else {
    linkFourth.classList.remove('imp__link--anchor');
    linkFourth.classList.add('dark-theme');
  }
}

const linkObserverOptionsFourth = {
  rootMargin: '-110px',
  threshold: 0
}


const linkObserverFourth = new IntersectionObserver(linkObserverCallbackFourth, linkObserverOptionsFourth);

linkObserverFourth.observe(sectionsFourth);


//Side Navigation Bar changing Colour According to Current Section
//HOME CIRCLE
const circleLinkOne = document.querySelector('.circle1');
const homeSection = document.getElementById('home-section');


const circleLinkObserverCallbackOne = (watchEntry, circleLinkObserverOne) => {
  if(watchEntry[0].isIntersecting) {
    circleLinkOne.classList.remove('side-nav-bar');
    circleLinkOne.classList.add('current-circle')
  } else {
    circleLinkOne.classList.remove('current-circle');
    circleLinkOne.classList.add('side-nav-bar');
  }
}

const circleLinkObserverOptionsOne = {
  rootMargin: '-110px',
  threshold: 0
}


const circleLinkObserverOne = new IntersectionObserver(circleLinkObserverCallbackOne, circleLinkObserverOptionsOne);

circleLinkObserverOne.observe(homeSection);


//ABOUT CIRCLE
const circleLinkTwo = document.querySelector('.circle2');
const aboutSection = document.getElementById('about-section');


const circleLinkObserverCallbackTwo = (watchEntry, circleLinkObserverTwo) => {
  if(watchEntry[0].isIntersecting) {
    circleLinkTwo.classList.remove('side-nav-bar');
    circleLinkTwo.classList.add('current-circle')
  } else {
    circleLinkTwo.classList.remove('current-circle');
    circleLinkTwo.classList.add('side-nav-bar');
  }
}

const circleLinkObserverOptionsTwo = {
  rootMargin: '-110px',
  threshold: 0
}


const circleLinkObserverTwo = new IntersectionObserver(circleLinkObserverCallbackTwo, circleLinkObserverOptionsTwo);

circleLinkObserverTwo.observe(aboutSection);


//PROJECTS CIRCLE
const circleLinkThree = document.querySelector('.circle3');
const projectsSection = document.getElementById('projects-section');


const circleLinkObserverCallbackThree = (watchEntry, circleLinkObserverThree) => {
  if(watchEntry[0].isIntersecting) {
    circleLinkThree.classList.remove('side-nav-bar');
    circleLinkThree.classList.add('current-circle')
  } else {
    circleLinkThree.classList.remove('current-circle');
    circleLinkThree.classList.add('side-nav-bar');
  }
}

const circleLinkObserverOptionsThree = {
  rootMargin: '-110px',
  threshold: 0
}


const circleLinkObserverThree = new IntersectionObserver(circleLinkObserverCallbackThree, circleLinkObserverOptionsThree);

circleLinkObserverThree.observe(projectsSection);


//CONTACT CIRCLE
const circleLinkFour = document.querySelector('.circle4');
const contactSection = document.getElementById('contact-section');


const circleLinkObserverCallbackFour = (watchEntry, circleLinkObserverFour) => {
  if(watchEntry[0].isIntersecting) {
    circleLinkFour.classList.remove('side-nav-bar');
    circleLinkFour.classList.add('current-circle')
  } else {
    circleLinkFour.classList.remove('current-circle');
    circleLinkFour.classList.add('side-nav-bar');
  }
}

const circleLinkObserverOptionsFour = {
  rootMargin: '-110px',
  threshold: 0
}


const circleLinkObserverFour = new IntersectionObserver(circleLinkObserverCallbackFour, circleLinkObserverOptionsFour);

circleLinkObserverFour.observe(contactSection);








//Random Quote Generator
const quotes = [
  '"The elegance of code is not in its complexity, but in its clarity."',
  '"A journey of a thousand apps begins with a single line of code."',
  '"Great developers are not just coders; they\'re problem solvers."',
  '"In the world of software, adaptability is the truest form of strength."',
  '"The digital age is written in code, and those who master it shape its narrative."',
  '"Innovation is not about saying yes to everything, but saying no to the redundant."',
  '"The future belongs to those who prepare for it in the present, one line of code at a time."',
  '"Software is a blend of art and science; you need creativity to design it and precision to build it."',
  '"In the ever-evolving tech world, learning is the only constant."',
  '"Behind every successful software, there\'s a developer who faced their doubts and challenges head-on."'
]



//Quote Button
const quoteButton = document.getElementById("quotes__btn").addEventListener("click", () => {
  //Get a random index
  randomIndex = Math.floor(Math.random() * quotes.length);

  //Get quote at random index
  selectedQuote = quotes[randomIndex];

  //Display quote
  document.getElementById("quotes__para").innerHTML = selectedQuote;
});


// let age = document.getElementById("age");

// const birthYear = 2003;
// const date = new Date();
// let currentDay = date.getDate();
// let currentMonth = date.getMonth() + 1;
// let currentYear = date.getFullYear();
// let newAge;

// currentMonth >= 11 && currentDay >= 13 ? newAge = currentYear - birthYear : newAge = currentYear - birthYear - 1;

// age.innerHTML = newAge;


function disableScroll() {
  // Get the current page scroll position
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

  // if any scroll is attempted, set this to the previous value
  window.onscroll = function() {
      window.scrollTo(scrollLeft, scrollTop);
  };
}


function enableScroll() {
  window.onscroll = function() {};
}

function contact(event) {
  event.preventDefault();
  emailjs
      .sendForm(
          'service_ujyrx2w',
          'template_dojbe3c',
          event.target,
          'dfN5yqfbieFI3bYuT'
      ).then(() => {
        alert("Let's chat soon!");
      }).catch(() => {
        alert("the email service is temporarily available. Please contact me directly on nguyef1@unlv.nevada.edu");
      })
}

// function buttonClick(){
//   alert("Let's chat soon!");
// }

// template_dojbe3c
// service_ez7ar5r
// zDh-WLyK-cLfJp3D3
