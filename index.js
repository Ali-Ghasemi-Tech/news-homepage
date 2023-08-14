const navBar = document.getElementById('nav-bar');
const navToggleClose = document.getElementById('nav-toggle-close');
const navToggleOpen = document.getElementById('nav-toggle-open');
const filter = document.getElementById('filter');

navToggleOpen.addEventListener('click' , () =>{
    navBar.classList.remove('mobile:translate-x-full', 'brightness-100');
    filter.classList.remove('hidden');
});

navToggleClose.addEventListener('click' , () => {
    navBar.classList.add('mobile:translate-x-full');
    filter.classList.add('hidden');

});