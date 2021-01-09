menu = document.getElementById('menu');
hamburger =  document.getElementById('hamburger');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('show');
    menu.classList.toggle('show');
});