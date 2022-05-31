// const liRef = document.querySelectorAll('.list__item');
// console.log(liRef[1].textContent);
// console.log(...liRef);

// const liRefEven = [...liRef]
//   .filter(el => Number.parseInt(el.textContent) % 2 === 0)
//   .map(el=>el.remove());

// const liRefEven = [...liRef].filter(el => {
//   return Number.parseInt(el.textContent) % 2 === 0
//   // console.log(el);
// });

// console.log(liRefEven);

document.querySelectorAll('.list__item').forEach(el => {
  if (Number.parseInt(el.textContent) % 2 === 0) {
    el.remove();
  }
});

document.querySelectorAll('.list__item').forEach(el => {
  const img = document.createElement('img');
  img.src = 'https://images.prom.ua/3250528587_w640_h640_velosiped-najner-crosser.jpg';
  img.width = 200;

  el.innerHTML = '';
  el.append(img);
});
