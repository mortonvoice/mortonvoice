const article_preview = document.querySelector(".article-preview")
const article_preview_mobile = document.querySelector(".article-preview-mobile")
const article_preview_mobile_fill = document.querySelector(".article-preview-mobile-fill")
const close_modal = document.querySelector(".close-modal")

document.body.addEventListener("click", (event) => {
    const target = event.target
    if (target.classList.contains("selector")) {
        const innerHTML = target.parentElement.innerHTML
        if (window.innerWidth <= 900) {
            article_preview_mobile_fill.innerHTML = innerHTML
            article_preview_mobile_fill.querySelector(".selector").remove()
            article_preview_mobile.showModal()
            document.body.classList.toggle("modal-open")
        }
        else{
            article_preview.innerHTML = innerHTML
            article_preview.querySelector(".selector").remove()
        }
    }
})

article_preview_mobile.addEventListener("click", e => {
    const dialogDimensions = article_preview_mobile.getBoundingClientRect()
    if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
    ) {
        article_preview_mobile.close()
    }
})

article_preview_mobile.addEventListener("close", () => {
    document.body.classList.toggle("modal-open")
})

close_modal.addEventListener("click", () => {
    article_preview_mobile.close()
})