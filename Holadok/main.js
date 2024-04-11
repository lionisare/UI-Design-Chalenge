/*======MENU======*/
const navbarMenu = document.getElementById("navbar-menu"),
  btnMenu = document.getElementById("btn-menu"),
  btnClose = document.getElementById("btn-close");

/*show menu */
btnMenu.addEventListener("click", () => {
  navbarMenu.classList.add("show-menu");
});
btnClose.addEventListener("click", () => {
  navbarMenu.classList.remove("show-menu");
});
