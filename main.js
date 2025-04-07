let buttonTop = document.getElementById("scrollTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    buttonTop.style.display = "inline-block";
  } else {
    buttonTop.style.display = "none";
  }
}

// on click scroll to the top of the document
function scrollButton() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("reviewBox");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

// offset menu links so they don't hide under sticky menu bar -- might need to adjust value for mobile?
window.addEventListener('hashchange', offsetAnchor);
window.setTimeout(offsetAnchor, 1);
function offsetAnchor() {
	if (location.hash.length !== 0) {
		window.scrollTo(window.scrollX, window.scrollY - 50);
	}
}

function menuPopup() {
var popup = document.getElementById("menuPopup");
popup.classList.toggle("show");
}