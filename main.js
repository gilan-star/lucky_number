const visualBox = document.querySelector('.visual__box');
const numbers = visualBox.querySelectorAll('.number');

function eventHandler() {

  function randomNumber(max) {
    return Math.ceil(Math.random() * max);
  };
  
  const result = [];
  
  for (i = 0; i < 6; i++){
    isUnique = false;
    while (isUnique == false) {
      randomValue = randomNumber(45);
      isUnique = true;
      for (j = 0; j < result.length; j++){
        if (randomValue == result[j]) {
          isUnique = false;
          break;
        }
      }
    }
    result.push(randomValue);
    numbers[i].innerHTML = result[i];
  }
  
};

const button = document.querySelector('button');
button.addEventListener('click', eventHandler);