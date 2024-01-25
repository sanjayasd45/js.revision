let random = []
let newRandom = []
let colorId = ['simon_red','simon_green','simon_blue','simon_pink']
const randomN = (c) => {
  let randomCollection = []
  for(let i = 0; i < c ; i++){
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    randomCollection.push(colorId[randomNumber])
    random = randomCollection
    console.log(random);
  }
}
randomN(4)
console.log(random);