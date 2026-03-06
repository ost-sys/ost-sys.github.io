document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('toggleButton');
  const hiddenBlock = document.getElementById('hiddenBlock');

  let isVisible = false;

  toggleButton.addEventListener('click', () => {
    isVisible = !isVisible;

    if (isVisible) {
      hiddenBlock.style.display = 'flex';
      hiddenBlock.style.left = '0'
    } else {
      hiddenBlock.style.display = 'none';
    }
  });
});