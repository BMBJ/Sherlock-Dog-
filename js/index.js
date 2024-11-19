

const imglist1 = document.querySelector(".grid-img1");
const imglist2 = document.querySelector(".grid-img2");
const imglist3 = document.querySelector(".grid-img3");
const innerText = document.querySelector(".inner-text");
const text1 = document.querySelector(".text1");
const text2 = document.querySelector(".text2");
const text3 = document.querySelector(".text3");

function insetToPage1() {
  
    text1.style.display = "block";
    text2.style.display = "none";
    text3.style.display = "none";
    
    imglist1.classList.add("add-shadw");
    imglist2.classList.remove("add-shadw");
    imglist3.classList.remove("add-shadw");
}

function insetToPage2() {
    text1.style.display = "none";
    text2.style.display = "block";
    text3.style.display = "none";
    
    imglist1.classList.remove("add-shadw");
    imglist2.classList.add("add-shadw");
    imglist3.classList.remove("add-shadw");
}

function insetToPage3() {
    text1.style.display = "none";
    text2.style.display = "none";
    text3.style.display = "block";
    
    imglist1.classList.remove("add-shadw");
    imglist2.classList.remove("add-shadw");
    imglist3.classList.add("add-shadw");
}


imglist1?.addEventListener("click", insetToPage1);
imglist2?.addEventListener("click", insetToPage2);
imglist3?.addEventListener("click", insetToPage3);
//
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Инициализация слайдера
updateSlider();