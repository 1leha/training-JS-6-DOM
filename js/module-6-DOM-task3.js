// https://images.prom.ua/3250528587_w640_h640_velosiped-najner-crosser.jpg
// https://images.prom.ua/3250528590_w640_h640_velosiped-najner-crosser.jpg
// https://images.prom.ua/3250528595_w640_h640_velosiped-najner-crosser.jpg

const images = [
  'https://images.prom.ua/3250528587_w640_h640_velosiped-najner-crosser.jpg',
  'https://images.prom.ua/3250528590_w640_h640_velosiped-najner-crosser.jpg',
  'https://images.prom.ua/3250528595_w640_h640_velosiped-najner-crosser.jpg',
];

// const olEl = document.createElement('ol');
// const liEl = document.createElement('li');

// olEl.append(
//   images.forEach(imgSrc => {
//     imageEl.src = imgSrc;
//     liEl.append(imageEl);
//   }),
// );

// const listImg = images.map(imgSrc => {
//   const imageEl = document.createElement('img');

//   imageEl.width = 200;
//   imageEl.src = imgSrc;

//   return imageEl;

//   // console.log(imageEl);
// });
// // console.log(listImg);

// olEl.append(...listImg);

// document.body.append(olEl);

// ! 2 variant

const ol = document.createElement('ol');

images.forEach(imageSrc => {
  const li = document.createElement('li');
  const img = document.createElement('img');

  li.append(img);
  ol.append(li);

  img.src = imageSrc;
  img.width = 200;
  img.alt = 'randome Img';
});
document.body.append(ol);
