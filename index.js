
const button = document.querySelector(".toggle");
const theme = document.querySelector("#theme");


function theme_switch() {


    button.addEventListener("click", function () {
        if (theme.getAttribute("href") === "style.css") {
            theme.href = "dark.css";
        } else {
            theme.href = "style.css";
        }
    });
}


function test1() {

    if (theme.getAttribute("href") === "style.css") {
        theme.href = "dark.css";
    } else {
        theme.gref ="style.css"
    }
}

function toggle(value) {
    let sheets = document.getElementsByTagName("link");
    sheets[0].href = value;
}