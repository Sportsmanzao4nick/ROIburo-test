const persons = document.querySelector('.team__persons');
const widthToScroll = persons.children[0].offsetWidth;
const stylesPersons = window.getComputedStyle(persons);
const width = stylesPersons.getPropertyValue('width');
const widthValue = parseInt(width, 10);

function changePersonGallery () {
  document.querySelector('.button__left__team').addEventListener('click', () => {
    persons.scrollLeft -= widthToScroll + widthValue * 0.025;
  })

  document.querySelector('.button__right__team').addEventListener('click', () => {
    persons.scrollLeft += widthToScroll + widthValue * 0.025;
  })
}

module.exports = changePersonGallery;