'use strict';

document.addEventListener("DOMContentLoaded", function () {

	// Mobile menu
	var btnMenu = document.getElementById('btn--menu');
	var btnClose = document.getElementById('btn--close');
	var navMenu = document.querySelector('.nav');

	btnMenu.addEventListener('click', function () {
		navMenu.classList.add('nav--active');
	});
	btnClose.addEventListener('click', function () {
		navMenu.classList.remove('nav--active');
	});
	// End Mobile menu

	// slider
	$('.slider').slick({
		prevArrow: $('.counter__left'),
		nextArrow: $('.counter__right'),
		slidesToShow: 1,
		infinite: true,
		arrows: true,
		responsive: [{
			breakpoint: 1379,
			settings: {
				slidesToShow: 1
			}
		}]
	});
	// end slider

	// counter
	function counter() {
		var currentSlide = $('.slider').slick('slickCurrentSlide') + 1;
		var counter = $(".slider").slick("getSlick").slideCount;
		var counterId = document.getElementById('counter');
		var counterAll = document.getElementById('counterAll');
		counterId.innerText = currentSlide;
		counterAll.innerText = counter;
	}
	counter();

	var leftArrow = document.querySelector('.counter__left');
	var rightArrow = document.querySelector('.counter__right');

	leftArrow.addEventListener('click', function () {
		counter();
	});
	rightArrow.addEventListener('click', function () {
		counter();
	});

	// end couner

	var hiddenBtn = document.getElementsByClassName('slider__hidden-btn');
	for (var i = 0; i < hiddenBtn.length; i++) {
		hiddenBtn[i].addEventListener('click', function () {
			alert('Не понятно что скрывать');
		});
	}

	// end hidden


	// Secret tabs
	var tab = document.getElementsByClassName('sect-third__secret-item');

	var _loop = function _loop(_i) {
		tab[_i].addEventListener('click', function (target) {
			for (var r = 0; r < tab.length; r++) {
				tab[r].classList.remove('active');
			}
			tab[_i].classList.remove('active');
			event.target.classList.add('active');
		});
	};

	for (var _i = 0; _i < tab.length; _i++) {
		_loop(_i);
	}
	// Secret tabs end


	var header = document.getElementById('fixedHead');
	var sticky = header.offsetTop;

	function myFunction() {
		if (window.pageYOffset > 100) {
			header.classList.add("active");
		} else {
			header.classList.remove("active");
		}
	}

	window.addEventListener('scroll', function () {
		myFunction();
	});
});