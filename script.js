const billeder = ["img1.png", "img2.png", "img3.png", "img4.png", "img5.png",
"img6.png", "img7.png", "img8.png", "img9.png"];


let billede = document.querySelector("img");
billede.src = billeder[0];
document.querySelector("button").addEventListener("click", slideShow);

let slides = 0;
function slideShow () {
slides++;

billede.src = billeder[slides];
console.log("er klikket på ");
}



