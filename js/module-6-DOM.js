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
console.log(input);

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

console.log(button.dataset.action);
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
console.log(title.innerHTML);
// console.log(input.value);

title.innerHTML = 'ALEX <br> BRO';
console.log(title.innerHTML);

console.log(list.firstElementChild.innerHTML);
list.firstElementChild.innerHTML = '<a href="">linked first element</a>';
list.firstElementChild.nextElementSibling.innerHTML = '<a href="">linked second element</a>';
list.children[2].innerHTML = '<button type="button">buttoned third element</button>';

console.log(list.children[2].innerHTML);

console.log(list.firstElementChild.innerHTML);

// button.addEventListener('click', () => {
//   result.textContent = input.value;
//   console.log(result.textContent);
// });

// input.addEventListener('change', () => {
//   result.textContent = input.value;
//   console.log(result.textContent);
// });
