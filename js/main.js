var myBox = document.getElementById("box");
var i = 0 ;
var imges = [
  "img/slider-2.jpg",
  "img/slider-3.jpg",
  "img/slider-4.jpg"
]
function slideShow () {
  myBox.style.backgroundImage ="url("+imges[i]+")"
  if( i <imges.length -1){
    i++;
  }else{
    i= 0;
  }
  setTimeout("slideShow()" , 2000)
}
slideShow()