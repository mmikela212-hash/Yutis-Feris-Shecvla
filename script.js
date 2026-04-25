// Get references to the DOM elements
const colorBox = document.getElementById('colorBox');
const changeBtn = document.getElementById('changeBtn');

// Array of colors to cycle through
const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'cyan'];
let currentColorIndex = 0;

// Add click event listener to the button
changeBtn.addEventListener('click', function() {
    // Move to the next color in the array
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    
    // Change the background color of the div
    colorBox.style.backgroundColor = colors[currentColorIndex];
    
    // Optional: Log the current color to console
    console.log('Color changed to:', colors[currentColorIndex]);
});
