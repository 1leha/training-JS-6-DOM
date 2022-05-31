//! 1 variant

// const table = document.querySelector('table');
// console.log(table);

// const lines = table.querySelectorAll('tr');
// console.log(lines);

// lines.forEach(line => {
//   if (Number.parseInt(line.lastElementChild.textContent)) {
//     if (Number.parseInt(line.lastElementChild.textContent) >= 10) {
//       line.classList.add('green');
//     } else {
//       line.classList.add('red');
//     }
//   }
// });

//! 2 variant
const table = document.querySelector('table');
console.log(table);

const lines = table.querySelectorAll('tr');
console.log(lines);

lines.forEach(line => {
  if (parseInt(line.lastElementChild.textContent)) {
    line.lastElementChild.textContent >= 10
      ? line.classList.add('green')
      : line.classList.add('red');
  }
});
