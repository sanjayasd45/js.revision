let colors = document.querySelectorAll('.colors');
let startBtn = document.querySelector("button");
let random = [0,1,2,3]
let newRandom = []
let colorId = ['simon_red','simon_green','simon_blue','simon_pink']
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
    //   changeColorForOneSecond(e.target.id)
    });
  });

startBtn.addEventListener('click', (e) => {
// const randomNumber = Math.floor(Math.random() * 4) + 1;
// random.push(randomNumber)
// console.log(random);

for(let i = 0; i <random.length; i++){
    setTimeout(() => {
        changeColorForOneSecond(colorId[+random[i]])
        console.log(i);
        // console.log(colorId[+random[i]]);
      }, i*500);
}


// if(random.length != newRandom){
//     console.log('length is not equal');
 
    
// }

})


