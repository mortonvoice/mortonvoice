const hidden_on_mobile = Array.from(document.querySelectorAll(".hidden-on-mobile"));
const menu_wrapper = document.querySelectorAll(".menu-wrapper")[0];
const english_form = document.querySelector(".english-form")
const spanish_form = document.querySelector(".spanish-form")

function toggle_menu(){
    menu_wrapper.classList.toggle("change");
    hidden_on_mobile.forEach((element) => element.classList.toggle("change"));
}

function toggle_iframe(show, hide){
    show.classList.toggle("hidden")
    hide.classList.toggle("hidden")
}
