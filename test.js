const names = ["John", "Jane", "Bob", "Alice", "Charlie"];

function logNamesWithDelay() {
    names.forEach((name, index) => {
        setTimeout(() => {
            console.log(name);
        }, index * 2000);
    });
}


logNamesWithDelay();

