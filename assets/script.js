const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>"
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>"
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>"
  }
];

let arrowLeft = document.getElementById("arrow-left");
let arrowRight = document.getElementById("arrow-right");
let bannerImage = document.getElementById("banner-img");
let bannerText = document.getElementById("banner-txt");
let dots = document.getElementById("dots");
let currentSlide = 0;

function updateBanner() {
  bannerImage.src = "./assets/images/slideshow/" + slides[currentSlide].image;
  bannerText.innerHTML = slides[currentSlide].tagLine;

  for (let i = 0; i < dots.children.length; i++) {
    if (i == currentSlide) {
      dots.children[i].classList.add("dot_selected");
    } else {
      dots.children[i].classList.remove("dot_selected");
    }
  }
}

function changePage(page) {
  if (page >= slides.length) {
    currentSlide = 0;
  } else if (page <= 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = page;
  }

  updateBanner();
}

arrowLeft.addEventListener("click", function () {
  changePage(currentSlide - 1);
});

arrowRight.addEventListener("click", function () {
  changePage(currentSlide + 1);
});

for (let i = 0; i < slides.length; i++) {
  let newDot = document.createElement("div");
  newDot.classList.add("dot");
  newDot.id = i;
  dots.appendChild(newDot);
}

updateBanner();
