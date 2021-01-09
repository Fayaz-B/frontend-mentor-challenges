toggle = document.getElementById('toggle');
toggled = document.getElementById('toggled');

toggle.addEventListener('change', () =>{
    toggled.classList.toggle('show-monthly');
});