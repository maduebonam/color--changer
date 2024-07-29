const colorBox = document.getElementById("color-box");
const colorBtn = document.getElementById("change-color-btn");



function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

colorBtn.addEventListener('click', function () {
  colorBox.style.background = getRandomColor();
});


