btnId = document.getElementById("btn");
colorId = document.getElementById("color");

const updateColor = () => {
    let randomNumber = Math.floor(Math.random() * 16777215);
    let randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;
    colorId.innerText = randomCode;
    navigator.clipboard.writeText(randomCode);
};

btnId.addEventListener("click", () => {
    updateColor();
});