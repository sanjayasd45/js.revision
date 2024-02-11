const optionsContainer = document.querySelector('.main__section-search-options');
let selectedItems = []
optionsContainer.addEventListener('click', (event) => {
    const clickedElement = event.target;
    if (clickedElement.classList.contains('main__section-search-options-topic') || clickedElement.classList.contains('main__section-search-options-level')) {
        const content = clickedElement.textContent.trim();
        if (!selectedItems.includes(content)) {
            addItems(content);
            selectedItems.push(content);
        } else {
            removeItems(content);
            selectedItems = selectedItems.filter(item => item !== content);
        }
    }
});

function addItems(contentToAdd) {
    const newElement = document.createElement('span');
    newElement.textContent = contentToAdd;
    selected.appendChild(newElement);
    newElement.classList.add("selected-items");
}

function removeItems(contentToRemove) {
    const children = selected.children;
    for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (child.textContent === contentToRemove) {
            selected.removeChild(child);
            break; // No need to continue once the item is removed
        }
    }
}
