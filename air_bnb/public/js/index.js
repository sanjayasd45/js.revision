
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
let categoryData;
// function finder() {
//     a.forEach(category => {
//         category.addEventListener('click', (e) => {
//            let pTag = category.querySelector('p');
//            let selectedContent = pTag.textContent;
//            categoryData = selectedContent
//         })
//     })
// }
// function finder() {
//     let firstElementProcessed = false; // Flag to track if the first element has been processed
//     a.forEach(category => {
//         category.addEventListener('click', (e) => {
//             let pTag = category.querySelector('p');
//             let selectedContent = pTag.textContent;
//             categoryData = selectedContent;

//             if (!firstElementProcessed) {
//                 category.classList.add('active'); // Add the 'active' class to the first element
//                 firstElementProcessed = true; // Update the flag
//             }
//         });
//     });
// }
// finder()




