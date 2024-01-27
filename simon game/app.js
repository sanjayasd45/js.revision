const div = document.querySelectorAll('.colors');
const heading = document.querySelector('#simon_h3')
let randomCollection = [];
let newRandom = [];
const colorId = ['simon_red', 'simon_green', 'simon_blue', 'simon_pink'];

for(let i of div){
  i.addEventListener('click', (e) => {
    if(randomCollection.length != 0){
      newRandom.push(e.target.id)
    }else{
      heading.lastChild.textContent = 'Guess the correct sequence'
      randomN()
      changeColorForOneSecond(randomCollection[0])
    }
    if(randomCollection.length === newRandom.length){
      if (JSON.stringify(randomCollection) === JSON.stringify(newRandom)) {
        heading.lastChild.textContent = `Level ${randomCollection.length}`
        newRandom = []
        randomN()
        for (let i = 0; i < randomCollection.length; i++) {
          setTimeout(() => {
            changeColorForOneSecond(randomCollection[i]);
          }, i * 500);
        }
        for(let i of colors){
          
        }
      } else {
        let score = randomCollection.length
        heading.lastChild.textContent = `Bester luck for next time. \n Your Score is ${score} .\n Press any key to restart`
        randomCollection = []
      }
    }else{
      console.log('do nothing');
    }
  })
}

const randomN = () => {
  const randomNumber = Math.floor(Math.random() * 4); // Use 4 to include the last element
  randomCollection.push(colorId[+randomNumber]);
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
