let btn = document.querySelector("#add");
let inp = document.querySelector("#input");
let list = document.querySelector("ul");
let delBtn = document.querySelectorAll(".delete");



const addRow = (e) => {
  let newTask = document.createElement("li");
  newTask.innerText = `${e}`;
  list.appendChild(newTask);

  let newButton = document.createElement("button");
  newButton.innerText = 'delete';
  newTask.appendChild(newButton)
  newButton.classList.add("delete")
  newButton.classList.add("btn")
}
btn.addEventListener("click", function (e) {
  e.preventDefault();
  if(inp.value === ''){
    alert('Enter task to add!')
  }else{
    addRow(inp.value)
    inp.value = ''
  }
});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    let lestP = e.target.parentElement;
    lestP.remove()
  }
});


