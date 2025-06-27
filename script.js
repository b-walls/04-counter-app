let count = 0;
let countLabel = document.getElementById("count");
let incrementButton = document.getElementById("increase");
let decrementButton = document.getElementById("decrease");

function updateCount() {
    countLabel.textContent = count;
}

function increment() {
    count++;
    if ( count > 50 ) {
        count = 50; // Limit the count to a maximum of 50
    }
    updateCount();
}

function decrement() {
    count--;
    updateCount();
}

incrementButton.addEventListener("click", increment);
decrementButton.addEventListener("click", decrement);