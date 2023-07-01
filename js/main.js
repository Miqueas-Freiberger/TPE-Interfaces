var menuButton = document.querySelector('.menu-button');
var menuDropdown = document.querySelector('.menu');
menuButton.addEventListener('click',function(e){
    if (menuButton.classList.contains('active-menu')) {
        menuButton.classList.remove('active-menu');
        menuDropdown.classList.add('hidden');
    }
    else{
        menuButton.classList.add('active-menu');
        menuDropdown.classList.remove('hidden');
    }
});