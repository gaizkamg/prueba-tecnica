const botonMenu = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

botonMenu.addEventListener("click", showMenu);


function showMenu(){
    menu.classList.toggle("clicked");
    };