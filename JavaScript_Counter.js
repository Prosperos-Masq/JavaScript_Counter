let decrease = document.querySelector('.decrease');
let reset = document.querySelector('.reset');
let increase = document.querySelector('.increase');
let main = document.querySelector('main');
let counter = 0;

main.innerHTML =  `<h1>${counter}</h1>`;

decrease.addEventListener('click', () => {
  if (counter == counter) {
    counter -= 1;
  }
  
  main.innerHTML = `<h1>${counter}</h1>`;
});

reset.addEventListener('click', () => {
  if (counter < 0  || counter > 0) {
    counter = 0;
    main.innerHTML = `<h1>${counter}</h1>`; 
  }
});

increase.addEventListener('click', () => {
  if (counter == counter) {
    counter += 1;
  }
  
  main.innerHTML = `<h1>${counter}</h1>`;
});