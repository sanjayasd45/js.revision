let colors = document.querySelectorAll('.colors');
let startBtn = document.querySelector("button");
let random = []
let newRandom = []
let colorId = ['simon_red','simon_green','simon_blue','simon_pink']
let colorCount = 1


const randomN = (c) => {
  let randomCollection = []
  for(let i = 0; i < c ; i++){
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    randomCollection.push(randomNumber)
    random = randomCollection
    console.log(random);
  }
}
function changeColorForOneSecond(divId) {
    const div = document.querySelector(`#${divId}`);
    const originalColor = div.style.backgroundColor;
  
    // Change the color of the div
    div.style.backgroundColor = 'black';
  
    // Set a timeout to revert the color back to the original after one second
    setTimeout(() => {
      div.style.backgroundColor = originalColor;
    }, 500);
  }

colors.forEach(color => {
    color.addEventListener('click', (e) => {
      console.dir(e.target.id);
      newRandom.push(e.target.id)
      win()
    });
  });

let win  = () => {
  if(newRandom[0] == colorId[+random[0]]){
    console.log('win');
    for(let i = 0; i <colorCount; i++){
      setTimeout(() => {
        changeColorForOneSecond(colorId[+random[i]])
        console.log(i);
      }, i*500);
    }
    colorCount = colorCount + 1
  }
  randomN(colorCount)

}




startBtn.addEventListener('click', (e) => {
randomN(1)

for(let i = 0; i <colorCount; i++){
    setTimeout(() => {
        changeColorForOneSecond(colorId[+random[i]])
        console.log(i);
      }, i*500);
}
})


