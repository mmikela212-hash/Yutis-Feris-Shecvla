
const colorBox = document.getElementById('colorBox');
const changeBtn = document.getElementById('changeBtn');


const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'cyan'];
let currentColorIndex = 0;


changeBtn.addEventListener('click', function() {

    currentColorIndex = (currentColorIndex + 1) % colors.length;
    

    colorBox.style.backgroundColor = colors[currentColorIndex];
    
  
    console.log('Color changed to:', colors[currentColorIndex]);
});
