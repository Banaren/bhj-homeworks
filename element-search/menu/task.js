const menuLink = Array.from(document.querySelectorAll(".menu__item"));

menuLink.forEach(element => {
if (element.querySelector(".menu_sub")) {
element.onclick = () => {
document.querySelectorAll(".menu_sub").forEach(element => { element.classList.remove('menu_active') });
element.querySelector(".menu_sub").classList.toggle('menu_active');
}
}
});