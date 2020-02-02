document.addEventListener("DOMContentLoaded", function() {

	// Mobile menu
	let btnMenu = document.getElementById('btn--menu')
	let btnClose = document.getElementById('btn--close')
	let navMenu = document.querySelector('.nav')

	btnMenu.addEventListener('click', ()=>{
		navMenu.classList.add('nav--active')
	})
	btnClose.addEventListener('click', ()=>{
		navMenu.classList.remove('nav--active')
	})
	// End Mobile menu

// slider
$('.slider').slick({
	prevArrow: $('.counter__left'),
	nextArrow: $('.counter__right'),
	slidesToShow: 1,
	infinite: true,
	arrows: true,
	responsive: [
	{
		breakpoint: 1379,
		settings: {
			slidesToShow: 1
		}
	}
	]
});
// end slider

// counter
function counter(){
	let currentSlide = $('.slider').slick('slickCurrentSlide') + 1
	let counter = $(".slider").slick("getSlick").slideCount
	let counterId = document.getElementById('counter')
	let counterAll = document.getElementById('counterAll')
	counterId.innerText = currentSlide
	counterAll.innerText = counter
}
counter()

let leftArrow = document.querySelector('.counter__left')
let rightArrow = document.querySelector('.counter__right')

leftArrow.addEventListener('click', () =>{
	counter()
})
rightArrow.addEventListener('click', () =>{
	counter()
})

// end couner

let hiddenBtn = document.getElementsByClassName('slider__hidden-btn')
for(let i = 0; i < hiddenBtn.length; i++){
	hiddenBtn[i].addEventListener('click', () =>{
		alert('Не понятно что скрывать')
	})
}


// end hidden


// Secret tabs
let tab = document.getElementsByClassName('sect-third__secret-item')

for(let i = 0; i < tab.length; i++) {
	tab[i].addEventListener('click', (target) => {
		for(let r = 0; r < tab.length; r++) {
			tab[r].classList.remove('active')
		}
		tab[i].classList.remove('active')
		event.target.classList.add('active')
	})
}
// Secret tabs end


let header = document.getElementById('fixedHead')
let sticky = header.offsetTop

function myFunction() {
	if (window.pageYOffset > 100) {
		header.classList.add("active")
	} else {
		header.classList.remove("active")
	}
}

window.addEventListener('scroll', function() {
	myFunction()
});


});
