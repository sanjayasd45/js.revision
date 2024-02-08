
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


const categories = document.querySelectorAll('.categories');
categories[0].classList.add('activeColor');

categories.forEach(category => {
    category.addEventListener('click', (e) => {
        if (!category.classList.contains('activeColor')) {
            categories.forEach(item => {
                item.classList.remove('activeColor');
            });
            category.classList.add('activeColor');
        }
    });
});