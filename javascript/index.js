const hidden_on_mobile = Array.from(document.getElementsByClassName("hidden-on-mobile"));
const menu_wrapper = document.getElementsByClassName("menu-wrapper")[0];

function toggle_menu(){
    menu_wrapper.classList.toggle("change");
    hidden_on_mobile.forEach((element) => element.classList.toggle("change"));
}
