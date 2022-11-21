
function changecolor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.background = "#" + randomColor
    const clicktext = document.getElementById("click-text")
    clicktext.innerText = "#" + randomColor;
}


