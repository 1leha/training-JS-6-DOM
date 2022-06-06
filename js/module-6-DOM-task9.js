const refs = {
  input: document.getElementById('add-input'),
  btn: document.getElementById('add-button'),
  btnReset: document.getElementById('reset-button'),
  btnSort: document.getElementById('sort-button'),
  taskList: document.querySelector('ol'),
  taskArray: [],
};

//! 1 Variant
// refs.btn.addEventListener('click', e => {
//   console.log('Button Add click');

//   if (refs.input.value !== '') {
//     refs.taskArray.push(refs.input.value);
//     refs.input.value = '';
//   }

//   makeList(refs.taskArray);
// });

// refs.btnReset.addEventListener('click', () => {
//   refs.taskArray = [];
//   refs.taskList.innerHTML = '';
// });

// function makeList(arr) {
//   // console.log(arr);
//   refs.taskList.innerHTML = '';

//   arr.forEach(element => {
//     console.log(element);

//     const liEl = document.createElement('li');
//     liEl.textContent = element;
//     refs.taskList.append(liEl);
//   });
//   document.body.append(refs.taskList);
// }
//

//? 2 Variant

const getInputValue = text => `<li>${text}</li>`;
window.onload = () => {
  refs.input.focus();
};

refs.btn.addEventListener('click', () => {
  if (refs.input.value === '') {
    return;
  }
  const taskText = getInputValue(refs.input.value);
  refs.taskList.insertAdjacentHTML('beforeend', taskText);
  refs.taskArray = refs.taskList.children;
  refs.input.value = '';
  refs.input.focus();
});

refs.btnReset.addEventListener('click', () => {
  refs.taskArray = [];
  refs.taskList.innerHTML = '';
  refs.input.focus();
});

refs.btnSort.addEventListener('click', () => {
  console.log(refs.taskArray);
  const sortedTaskArray = [...refs.taskArray].sort((a, b) =>
    a.innerText.localeCompare(b.innerText),
  );

  refs.taskList.innerHTML = '';
  sortedTaskArray.forEach(e => refs.taskList.insertAdjacentHTML('beforeend', e.outerHTML));
});
