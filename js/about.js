// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("section-1");
//   var dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}    
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace("active", "");
//   }
//   slides[slideIndex-1].style.display = "grid";  
//   dots[slideIndex-1].className += "active";
//   setTimeout(showSlides, 3000); 
// }


// var slideIndex = 0;
// slideSection1();

// function slideSection1() {
//   var i;
//   var x = document.getElementsByClassName("section-1");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > x.length) {slideIndex = 1}
//   x[slideIndex-1].style.display = "grid";
//   setTimeout(carousel, 2000);

// }

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("section-1");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "grid";  
  setTimeout(carousel, 3000); 
  // Change image every 3 seconds
}