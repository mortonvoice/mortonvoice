document.addEventListener("DOMContentLoaded", () => {
    const targetElement = document.querySelector(".center-column")
    const storedInnerHTML = localStorage.getItem("innerHTMLData")

    if (targetElement && storedInnerHTML) {
        targetElement.innerHTML = storedInnerHTML
        document.querySelector(".see-more").remove()
    }
    else{
        targetElement.innerHTML = "<h1>Something went wrong displaying this piece, please try again later</h1>"
    }
})
