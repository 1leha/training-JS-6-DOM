const refs = {
  input: document.getElementById('add-input'),
  btn: document.getElementById('add-button'),
  btnReset: document.getElementById('reset-button'),
  taskList: document.querySelector('ol'),
  taskArray: [],
};

refs.btn.addEventListener('click', e => {
  console.log('Button Add click');

  if (refs.input.value !== '') {
    refs.taskArray.push(refs.input.value);
    refs.input.value = '';
  }

  makeList(refs.taskArray);
});

refs.btnReset.addEventListener('click', () => {
  refs.taskArray = [];
  refs.taskList.innerHTML = '';
});

function makeList(arr) {
  // console.log(arr);
  refs.taskList.innerHTML = '';

  arr.forEach(element => {
    console.log(element);

    const liEl = document.createElement('li');
    liEl.textContent = element;
    refs.taskList.append(liEl);
  });
  document.body.append(refs.taskList);
}
