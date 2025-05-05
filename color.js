const button = document.getElementById('colorBtn');
let isRed = false;

button.addEventListener('click', () => {
  document.body.style.backgroundColor = isRed ? '' : 'red';
  isRed = !isRed;
});
