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



const next = document.querySelectorAll('.arrow');

const nextButtons = document.querySelectorAll('.arrow');

nextButtons.forEach(next => {
    next.addEventListener('click', (e) => {
        console.log(e.target.parentElement.id);

        const conTconMain = document.querySelector('.conIconsMain');
        const children = conTconMain.children;

        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            console.log(child.classList[i]);
            child.classList.add('translate-example');
        }
        console.log(children.length);
    });
});

