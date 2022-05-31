//! 1 variant

// const allImageList = document.querySelectorAll('img');

// const filtredImages = [...allImageList]
//   .flatMap(el => el.src)
//   .filter((el, index, array) => array.indexOf(el) === index);

// const ol = document.createElement('ol');
// filtredImages.forEach(el => {
//   const li = document.createElement('li');
//   const img = document.createElement('img');

//   li.append(img);
//   ol.append(li);
//   img.src = el;
//   img.width = 100;
// });

// document.body.innerHTML = '';
// document.body.append(ol);

//! 2 variant

const listOfImages = document.querySelectorAll('li');
const sortedListOfImages = [...listOfImages].filter(
  (el, index, array) =>
    array.findIndex(
      findIndexValue => findIndexValue.firstElementChild.src === el.firstElementChild.src,
    ) === index,
);

const ol = document.createElement('ol');
// console.log(...sortedListOfImages);

ol.append(...sortedListOfImages);

document.body.innerHTML = '';
document.body.append(ol);
