const visualBox = document.querySelector('.visual__box');
const numbers = visualBox.querySelectorAll('.number');

function eventHandler() {

  function randomNumber(max) {
    return Math.ceil(Math.random() * max);
  };
  
  const result = [];
  
  for (i = 0; i < 6; i++){
    result.push(randomNumber(45));
  }  
  
  for (i = 0; i < 6; i++){
    const order = numbers[i];
    order.innerHTML = result[i];
  };

}

const button = document.querySelector('button');
button.addEventListener('click', eventHandler);



