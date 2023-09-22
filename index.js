// Get references to the menu icon and the menu list
const menuIcon = document.getElementById("menu");
const menuList = document.getElementById("menu-list");



menuIcon.addEventListener('click', ()=>{
    menuList.classList.toggle('hambergur');
})

