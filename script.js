const tensDisplay = document.getElementById("tens");
const onesDisplay = document.getElementById("ones");
const cpDisplay = document.getElementById("cp");
const dice = document.querySelectorAll("#dice-section p");

dice.forEach((d) => {
    d.addEventListener("click", () => rollDie(d));
});

function rollDie(die) {
    die.textContent = Math.floor(Math.random() * 5) + 1
}

function changeDigit(displayElement, value) {
    let curr = parseInt(displayElement.textContent);
    curr += value;

    if ((curr > 9 && displayElement != cpDisplay) || curr > 15 && displayElement == cpDisplay) curr = 0
    if (curr < 0) { 
        if (displayElement != cpDisplay) curr = 9 
        else curr = 15
    }
    displayElement.textContent = curr;
}

document.getElementById("ten-up").addEventListener("click", () => changeDigit(tensDisplay, 1));
document.getElementById("ten-down").addEventListener("click", () => changeDigit(tensDisplay, -1));
document.getElementById("one-up").addEventListener("click", () => changeDigit(onesDisplay, 1));
document.getElementById("one-down").addEventListener("click", () => changeDigit(onesDisplay, -1));
document.getElementById("cp-up").addEventListener("click", () => changeDigit(cpDisplay, 1));
document.getElementById("cp-down").addEventListener("click", () => changeDigit(cpDisplay, -1));