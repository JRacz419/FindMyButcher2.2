/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')
/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')
const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the blur-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 3000,
    delay: 400,
    // reset: true // Animations repeat
})
sr.reveal(`.home__data, .explore__data, .explore__user, .footer__container`)
sr.reveal(`.home__card`, {delay: 600, distance: '100px', interval: 100})
sr.reveal(`.about__data, .join__image`, {origin: 'right'})
sr.reveal(`.about__image, .join__data`, {origin: 'left'})
sr.reveal(`.popular__card`, {interval: 200})
const wrapper = document.querySelector(".wrapper"); 
const selectBtn = wrapper.querySelector(".select-btn"); 
const searchInp = wrapper.querySelector("input"); 
const options = wrapper.querySelector(".options");  
let countries = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",                  
"Connecticut", "Delaware", "Distric of Columbia", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois",                  
"Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts",                  
"Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",                  
"New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",                  
"Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont","Virginia",
"Washington", "West Virginia","Wisconsin", "Wyoming"];  

 
let countryLinks = {   "Ohio": "./assets/states/ohio/ohio.html" };  

function addCountry(selectedCountry = null) {     options.innerHTML = "";     

countries.forEach(country => {         
    let isSelected = country === selectedCountry ? "selected" : "";         
    let countryLink = countryLinks[country];         
    let li = `<li onclick="updateName(this); window.location='${countryLink}'" class="${isSelected}">${country}</li>`;         
    
    options.insertAdjacentHTML("beforeend", li);     }); }  addCountry();  
    function updateName(selectedLi) {     searchInp.value = "";     addCountry(selectedLi.innerText);     
    
    wrapper.classList.remove("active");     
    selectBtn.firstElementChild.innerText = selectedLi.innerText;     
    window.location = countryLinks[selectedLi.innerText]; }  
    searchInp.addEventListener("keyup", () => {     let arr = [];     
    
    let searchWord = searchInp.value.toLowerCase();     
        
    arr = countries.filter(data => {         return data.toLowerCase().startsWith(searchWord);     }).map(data => 
        {         let isSelected = data === selectBtn.firstElementChild.innerText ? "selected" : "";         
        let countryLink = countryLinks[data];         
        return `<li onclick="updateName(this); window.location='${countryLink}'" class="${isSelected}">${data}</li>`;     }).join("");     
        options.innerHTML = arr ? arr : '<p style="margin-top: 10px;">Oops! State not found</p>'; });  
        
        selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));
        
/*cards*/
const observer = new IntersectionObserver((entries) =>  {
	entries.forEach ((entry) => {
		console.log(entry)
		if (entry.isIntersecting) {
			entry.target.classList.add('show');
		}
		else {
			entry.target.classList.remove('show');
		}
	})
})
const hiddenElements = document.querySelectorAll('.card');
hiddenElements.forEach((el) => observer.observe (el));