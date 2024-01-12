
// Get the reference to the div element
const box2 = document.querySelector(".box2");

// Function to handle button click event
function handleClick(value) {
    // Update the content of the div with the button value
    box2.textContent = value;
}

// Add event listeners to the buttons
const buttons = document.querySelectorAll(".box3 button");
buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        const value = event.target.textContent;
        handleClick(value);
    });
});
