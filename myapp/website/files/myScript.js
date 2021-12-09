function readMore(x) {
  let moreText = document.getElementsByClassName("moreText")[x];
  let moreButton = document.getElementsByClassName("readmoreButton")[x];
    if (getComputedStyle(moreText).display === "none") {
      moreText.style.display = "block";
      moreButton.innerHTML = "<< Read less"; 
    } else {
      moreText.style.display = "none";
      moreButton.innerHTML = "Read more >>"; 
    }
  }


let div =  document.getElementsByClassName("div");
let pic = document.getElementsByClassName("pic");
let text = document.getElementsByClassName("text");
Array.from(pic).forEach((Element,index)=>myFunction1(index));

function myFunction1(i){
  div[i].addEventListener("mouseover", function(){picToText(i)});
  div[i].addEventListener("mouseout", function(){textToPic(i)});       
}

function picToText(i) {
  pic[i].style.display = "none"; 
  text[i].style.display = "flex"
}

function textToPic(i) {  
  pic[i].style.display = "block";
  text[i].style.display = "none"
}


function backToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
