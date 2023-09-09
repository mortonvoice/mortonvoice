document.addEventListener("DOMContentLoaded", () => {
    const targetElement = document.querySelector(".center-column")
    const storedInnerHTML = localStorage.getItem("innerHTMLData")

    if (targetElement && storedInnerHTML) {
        targetElement.innerHTML = storedInnerHTML
        document.querySelector(".see-more").remove()
    }
});
