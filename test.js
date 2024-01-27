const colors = document.querySelectorAll('.colors');
const startBtn = document.querySelector("button");
let random = [];
let newRandom = [];
const colorId = ['simon_red', 'simon_green', 'simon_blue', 'simon_pink'];
let colorCount = 1;

const randomN = (c) => {
  let randomCollection = [];
  for (let i = 0; i < c; i++) {
    const randomNumber = Math.floor(Math.random() * 4); // Use 4 to include the last element
    randomCollection.push(colorId[randomNumber]);
  }
  random = randomCollection;
  console.log(random);
};

const changeColorForOneSecond = (divId) => {
  const div = document.querySelector(`#${divId}`);
  const originalColor = div.style.backgroundColor;

  // Change the color of the div
  div.style.backgroundColor = 'black';

  // Set a timeout to revert the color back to the original after one second
  setTimeout(() => {
    div.style.backgroundColor = originalColor;
  }, 500);
};

const checkGameStatus = () => {
  if (JSON.stringify(random) === JSON.stringify(newRandom)) {
    console.log('win');
    newRandom = [];
    randomN(colorCount);

    for (let i = 0; i < colorCount; i++) {
      setTimeout(() => {
        changeColorForOneSecond(random[i]);
        console.log(i);
      }, i * 500);
    }

    colorCount += 1;
  } else {
    console.log(`you lose this is your score :- ${colorCount - 1}`);
  }
};

colors.forEach(color => {
  color.addEventListener('click', (e) => {
    newRandom.push(e.target.id);
    console.dir(e.target.id);
    console.log(`This is ${newRandom}`);
    if (random.length === newRandom.length) {
      checkGameStatus();
    } else {
      console.log('do nothing');
    }
  });
});

startBtn.addEventListener('click', () => {
  randomN(1);
  newRandom = [];

  setTimeout(() => {
    changeColorForOneSecond(random[0]);
  }, 500);

  colorCount = 2;
});
