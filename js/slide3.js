var slideIndex = 1;

showDivs(slideIndex);
        
function plusDivs3(n) {
  showDivs(slideIndex += n);
}
        
function showDivs(n) {
  var i;
  var y = document.getElementsByClassName("section-3");
  if (n > y.length) {slideIndex = 1}
  if (n < 1) {slideIndex = y.length}
  for (i = 0; i < y.length; i++) {
    y[i].style.display = "none";  
  }
  y[slideIndex-1].style.display = "grid";  
}        