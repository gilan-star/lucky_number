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
        };
      };
    };
    result.push(randomValue);
    numbers[i].innerHTML = result[i];    
  }

  // MAKE RESULT IN ORDER
  const btnGroup = document.querySelector('.btn-group');
  const ascendingBtn = btnGroup.querySelector('.ascending');
  const descendingBtn = btnGroup.querySelector('.descending');

  ascendingBtn.addEventListener('click', function () {
    result.sort(function (a, b) {
      return a - b;
    });
    for (let j = 0; j < 6; j++){
      numbers[j].textContent = result[j];
    }
  })

  descendingBtn.addEventListener('click', function () {
    result.sort(function (a, b) {
      return b - a;
    });
    for (let j = 0; j < 6; j++){
      numbers[j].textContent = result[j];
    }
  })


  // USING DO WHILE LOOP
  // for (i = 0; i < 6; i++){
  //   do {
  //     randomValue = randomNumber(45);
  //     isUnique = true;
  //     for (j = 0; j < result.length; j++) {
  //       if (randomValue == result[j]) {
  //         isUnique = false;
  //         break;
  //       }
  //     }
  //   } while (isUnique == false);
  //   result.push(randomValue);
  //   numbers[i].innerHTML = result[i];
  // }
  
};

const button = document.querySelector('button');
button.addEventListener('click', eventHandler);