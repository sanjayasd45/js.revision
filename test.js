let random = ["John", "Jane", "Bob", "Alice", "Charlie"];

const randomN = (c) => {
    let randomCollection = []
    for(let i = 0; i < c ; i++){
      const randomNumber = Math.floor(Math.random() * 3) + 1;
      randomCollection.push(randomNumber)
      random = randomCollection
      console.log(random);
    }
  }

randomN(5)
randomN(4)
randomN(10)