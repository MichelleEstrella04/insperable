
var slideIndex = 1;
showSection2(slideIndex);

function plusDivs2(n) {
  showSection2(slideIndex += n);
}

function showSection2(n) {
  var k;
  var x = document.getElementsByClassName("section-2");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (k = 0; k < x.length; k++) {
    x[k].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}