
document.addEventListener("click", (e) => {
    let drop = e.target.matches("[dropB]")
    const navElements = document.querySelectorAll('.navTopBtnOptC');
    if(drop && e.target.matches('[dropB].active'))return
    if (drop) {
        navElements.forEach(element => element.classList.toggle('active'));
      }
    if(!drop){
        navElements.forEach(element => element.classList.remove('active'));
    }

})


const a = document.querySelectorAll('.categories');
a[0].classList.add('activeColor');
a.forEach(category => {
    category.addEventListener('click', (e) => {
        for(const item of a){
            item.classList.remove('activeColor');
        }
        category.classList.add('activeColor');
    });
});

