/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navList = document.querySelector('#navbar__list');
const pageSections = document.querySelectorAll('section');



/* build the nav using the forEach method*/
pageSections.forEach(el => {
  const navlistElement = `<li class='menu__link ${el.className}' data-link=${el.id}><a href="#${el.id}">${el.dataset.nav}</li>`
  navList.insertAdjacentHTML('beforeend', navlistElement)
 
})





// Scroll to anchor ID using scrollTO event
navList.addEventListener('click', function(e){
	e.preventDefault();
	const parent = e.target.hasAttribute('data-link')
    ? e.target
    : e.target.parentElement
  	const elementToScrollTo = document.getElementById(parent.dataset.link)
  	elementToScrollTo.scrollIntoView({block: 'end', behavior: 'smooth'})
})





// getBoundingClientRect method that is used to determine the position of an element in the viewport.
const isInViewport = function (el) {

	const bounding = el.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );

};
// the onscroll eventListener.
window.addEventListener('scroll', myFunction);

// callback function for the window event listener.
function myFunction(){
	const allSection = document.querySelectorAll('section');
	
	for (let i = 0; i < allSection.length; i++){
		
		if(!isInViewport(allSection[i])){
			allSection[i].classList.remove('your-active-class');
		}else {
			allSection[i].classList.add('your-active-class');
		}
	}
}