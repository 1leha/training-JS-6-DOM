//!
//! Working with DOM
//!

const body = document.body;
const title = document.querySelector('.title');
const list = document.querySelector('.list');
const result = document.querySelector('.result');
const imgDemo = document.querySelector('.img');

//! Select button by class
// const button = document.querySelector('.button');

//! Select button by attribute
const button = document.querySelector('button[data-action="setResult"]');

const input = document.querySelector('.text-input');
// console.log(input);

// console.log(body.querySelectorAll('.list__item'));

list.style.fontSize = '24px';

imgDemo.style.display = 'block';
imgDemo.style.paddingBottom = '20px';

result.textContent = input.innerHTML;

// console.log(button.classList);
// console.log(button.classList.contains('click-me'));
// button.classList.add('111');
// console.log(button.classList);

// button.classList.toggle('111');
// console.log(button.classList);

// button.classList.replace('111', '222');
// console.log(button.classList);
// console.log(button.parentNode);

// console.log(imgDemo.style.cssText);
// console.log(list.attributes);
// list.setAttribute('alex', 45);
// console.log(list.attributes);

// console.log(input.value);
// input.value = '';
// console.log(img.getAttribute('alt'));

// console.log(button.dataset.action);
//!---------------------------------------------------------------------------------
//!---------------------------------------------------------------------------------

//! Adding tags

const newDiv = document.createElement('div');
newDiv.textContent = 'Hallow!';
newDiv.style.paddingTop = '13px';
newDiv.style.paddingBottom = '13px';
// console.log(newDiv);

//! Adding element to DOM
// body.append(newDiv);
// body.prepend(newDiv);
// imgDemo.after(newDiv);
imgDemo.before(newDiv);

//! Removing element from DOM
// newDiv.remove();

//! InnerHTML
// console.log(newDiv.innerHTML);
// console.log(title.innerHTML);
// // console.log(input.value);

// title.innerHTML = 'ALEX <br> BRO';
// console.log(title.innerHTML);

// console.log(list.firstElementChild.innerHTML);
// list.firstElementChild.innerHTML = '<a href="">linked first element</a>';
// list.firstElementChild.nextElementSibling.innerHTML = '<a href="">linked second element</a>';
// list.children[2].innerHTML = '<button type="button">buttoned third element</button>';
// console.log(list.children[2].innerHTML);
// console.log(list.firstElementChild.innerHTML);

//! Getting attributes

// console.log(imgDemo.src);

// console.log(imgDemo.alt);
// imgDemo.alt = 'pet dog';
// console.log(imgDemo.alt);

// imgDemo.width = '400';
// let degrise = 100;
// imgDemo.style.cssText = `transform: rotateZ(${degrise}deg)`;

// const curPageUrl = '/item2';
// const neededEl = list.querySelector(`.list__link[href="${curPageUrl}"]`);
// neededEl.classList.add('list__link--active');
// console.log(neededEl);
// console.log(list.children.length);

// console.log(button.dataset.test);

//! insertAdjacentHTML();
// const listTitle = 'My List';
// const beforeFirstEl = 'before First El';
// const afterLastEl = 'after Last El';
// const afterListtext = 'Text after the list';

// list.insertAdjacentHTML('beforebegin', `<h2>${listTitle}</h2>`);
// list.insertAdjacentHTML('afterbegin', `<li>${beforeFirstEl}</li>`);
// list.insertAdjacentHTML('beforeend', `<li>${afterLastEl}</li>`);
// list.insertAdjacentHTML('afterend', `<h3>${afterListtext}</h3>`);

//! Parants, cildren, sibling

// console.group('list:');
// console.log('list.parentNode >>', list.parentNode);
// console.log('list.childNodes >>', list.childNodes);
// console.log('list.children >>', list.children);
// console.log('list.firstElementChild >>', list.firstElementChild);
// console.log('list.firstChild >>', list.firstChild);
// console.log('list.lastElementChild >>', list.lastElementChild);
// console.log('list.lastChild >>', list.lastChild);
// console.log('list.previousElementSibling >>', list.previousElementSibling);
// console.log('list.previousSibling >>', list.previousSibling);
// console.log('list.nextElementSibling >>', list.nextElementSibling);
// console.log('list.nextSibling >>', list.nextSibling);
// console.log('list.nextElementSibling >>', list.nextElementSibling);
// console.groupEnd();

//! Adding elements

// make new list Element + class
// const newListEl = document.createElement('li');
// newListEl.classList.add('list__item');

// // make new link Element + class
// const newLinkEl = document.createElement('a');
// newLinkEl.classList.add('list__link');
// newLinkEl.href = '/aaa';
// newLinkEl.textContent = 'новый элемент';

// newListEl.appendChild(newLinkEl);

// // list.appendChild(newListEl);
// list.insertBefore(newListEl, list.firstElementChild);

// // console.log(list);

// const newTitle = document.createElement('h2');
// newTitle.classList.add('title');
// newTitle.textContent = 'New Title';

// const newImg = document.createElement('img');
// newImg.alt = ' woow-cat ';
// newImg.src = 'https://www.5.ua/media/pictures/original/184396.jpg?t=1589796585';
// newImg.width = 200;

// list.append(newTitle, newImg);

//! Buttons Collections render
// make some buttons

// const colorPikerOptions = [
//   { label: 'red', color: 'red' },
//   { label: 'blue', color: 'blue' },
//   { label: 'tomatow', color: 'tomatow' },
//   { label: 'green', color: 'green' },
//   { label: 'purple', color: 'purple' },
//   { label: 'yellow', color: 'yellow' },
//   { label: 'violet', color: 'violet' },
// ];

// const colorPikerContainer = document.querySelector('.color-piker');

// const buttons = colorPikerOptions.map(option => {
//   const btnEl = document.createElement('button');
//   btnEl.classList.add('button');
//   btnEl.type = 'button';
//   btnEl.textContent = option.label;
//   btnEl.style.backgroundColor = option.color;
//   return btnEl;
// });

// colorPikerContainer.append(...buttons);

