function isEmail(email) {
  const regexEmail =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  return regexEmail.test(email.toLowerCase());
}

const refs = {
  input: document.querySelector('input'),
  result: document.querySelector('.result'),
};

// refs.input.addEventListener('input', () => {
//   refs.result.textContent = isEmail(refs.input.value) ? 'Good Email' : 'Bad Email';
// });

refs.input.addEventListener('keydown', e => {
  // console.log(e.code);

  if (e.code === 'Enter' || e.code === 'NumpadEnter') {
    refs.result.textContent = isEmail(e.target.value) ? 'Good Email' : 'Bad Email';
  }
});
window.onbeforeunload = function (e) {
  return 'Are You shure?';
};
