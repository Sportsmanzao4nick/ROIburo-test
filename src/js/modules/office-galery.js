const imagesContainer = document.querySelector('.gallery__images');
const totalImages = document.querySelectorAll('.gallery__image__item').length;
const slideWidth = document.querySelector('.gallery__image__item').offsetWidth;
const stylesImageItem = window.getComputedStyle(
  document.querySelectorAll('.gallery__image__item')[1]
);
const marginLeft = stylesImageItem.getPropertyValue('margin-left');
const marginLeftValue = parseInt(marginLeft, 10);
const tabs = document.querySelectorAll('.gallery__tabs__item');
let currentIndex = 0;

function updateSlider() {
  const scrollPosition = currentIndex * slideWidth + currentIndex * marginLeftValue;
  imagesContainer.scrollTo({
    left: scrollPosition,
    behavior: 'smooth'
  });
}

function changeTabs() {
  if (currentIndex === 0) {
    tabs[0].style.backgroundColor = '#00A55A';

    for (let i = 1; i < tabs.length; i++) {
      tabs[i].style.backgroundColor = '#f2f2f2';
    }
  } else {
    tabs[currentIndex].style.backgroundColor = '#00A55A';
    tabs[currentIndex - 1].style.backgroundColor = '#f2f2f2';
  }
}

function changeOfficeGallery() {
  changeTabs();
  document.querySelector('.button__left__gallery').addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = totalImages - 3;
    }
    updateSlider();
    changeTabs();
  });

  document.querySelector('.button__right__gallery').addEventListener('click', () => {
    if (currentIndex < totalImages - 3) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateSlider();
    changeTabs();
  });
}

module.exports = changeOfficeGallery;
