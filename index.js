
function theme_switch() {
    const button = document.querySelector(".toggle");
    const theme = document.querySelector("#theme");

    button.addEventListener("click", function () {
        if (theme.getAttribute("href") === "style.css") {
            theme.href = "dark.css";
        } else {
            theme.href = "style.css";
        }
    });
}