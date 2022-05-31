//! 1 variant

const allImageList = document.querySelectorAll('img');
// console.log(allImageList);

// [...allImageList].filter((el,index, array)=> array.indexOf(el) === index)

const filtredImages = [...allImageList]
  .flatMap(el => el.src)
  .filter((el, index, array) => array.indexOf(el) === index);

const ol = document.createElement('ol');
filtredImages.forEach(el => {
  const li = document.createElement('li');
  const img = document.createElement('img');

  li.append(img);
  ol.append(li);
  img.src = el;
  img.width = 100;
});

document.body.innerHTML = '';
document.body.append(ol);

//! 2 variant
