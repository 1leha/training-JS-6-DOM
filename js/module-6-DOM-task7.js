const openGalleryBtn = document.querySelector('[data-modal="open"]');
const closeGalleryBtn = document.querySelector('[data-modal="close"]');
const scrollLeft = document.querySelector('[data-scroll="left"]');
const scrollRight = document.querySelector('[data-scroll="right"]');
const backDrop = document.querySelector('.backdrop');

openGalleryBtn.addEventListener('click', onModalOpen);
closeGalleryBtn.addEventListener('click', onModalClose);
scrollLeft.addEventListener('click', onScrollLeft);
scrollRight.addEventListener('click', onScrollRight);
backDrop.addEventListener('click', onBackdropeClick);

function onModalOpen() {
  console.log('Открыть модалку');
  document.addEventListener('keydown', onEscPress);
  document.addEventListener('keydown', onLeftArrowKey);
  document.addEventListener('keydown', onRightArrowKey);

  backDrop.classList.add('open');
}

function onModalClose() {
  console.log('Закрыть модалку');

  document.removeEventListener('keydown', onEscPress); 
  document.removeEventListener('keydown', onLeftArrowKey);
  document.removeEventListener('keydown', onRightArrowKey);

  backDrop.classList.remove('open');
}

function onScrollLeft() {
  console.log('Скроллим влево');
  // getCollection('gallery__image-item');

  const collection = document.querySelectorAll('.gallery__image-item');

  let startElem = [...collection].find(element =>
    element.classList.contains('gallery__image-item--active'),
  );

  if (startElem.parentNode.firstElementChild === startElem) {
    // console.log('UPS');
    startElem.classList.remove('gallery__image-item--active');

    startElem = startElem.parentNode.lastElementChild;
    startElem.classList.add('gallery__image-item--active');
    return;
  }

  startElem.classList.remove('gallery__image-item--active');
  startElem.previousElementSibling.classList.add('gallery__image-item--active');

  // console.log(startElem.nextElementSibling);
  // console.log(startElem.parentNode.lastElementChild === startElem.nextElementSibling);
}

function onScrollRight() {
  console.log('Скроллим вправо');

  const collection = document.querySelectorAll('.gallery__image-item');

  let startElem = [...collection].find(element =>
    element.classList.contains('gallery__image-item--active'),
  );

  if (startElem.parentNode.lastElementChild === startElem) {
    // console.log('UPS');
    startElem.classList.remove('gallery__image-item--active');

    startElem = startElem.parentNode.firstElementChild;
    startElem.classList.add('gallery__image-item--active');
    return;
  }

  startElem.classList.remove('gallery__image-item--active');
  startElem.nextElementSibling.classList.add('gallery__image-item--active');

  // console.log(startElem.nextElementSibling);
  // console.log(startElem.parentNode.lastElementChild === startElem.nextElementSibling);
}

function getCollection(sellector) {
  const collection = document.getElementsByClassName(sellector);
  return collection;
  // console.log(collection);
}

function onEscPress(e) {
  if (e.code === 'Escape') {
    // console.log(e.code);
    onModalClose();
  }
}

function onLeftArrowKey(e) {
  console.log(e.code);

  if (e.code === 'ArrowLeft') {
    onScrollLeft();
  }
}

function onRightArrowKey(e) {
  console.log(e.code);

  if (e.code === 'ArrowRight') {
    onScrollRight();
  }
}

function onBackdropeClick(e) {
  console.log('Click on backdrope');
  // console.log(e.currentTarget);
  // console.log(e.target);
  if (e.target === e.currentTarget) {
    backDrop.classList.remove('open');
  }
}
