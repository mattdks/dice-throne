const dice = document.querySelectorAll("#dice-section h3");
const rollButton = document.querySelector("#roll-dice");
const resetButton = document.querySelector("#reset-dice")
let unlockedDice = Array.from(dice);

dice.forEach((d) => {
    d.addEventListener("click", () => lockDie(d));
});

rollButton.addEventListener("click", () => rollDice(unlockedDice));

function lockDie(die) {
    die.classList.toggle("locked");
    if (unlockedDice.includes(die)) {
        unlockedDice.splice(unlockedDice.indexOf(die), 1);
    }
    else {
        unlockedDice.push(die);
    }
}

function rollDice(rolls) {
    for (let die of rolls) {
        rollDie(die);
    }
}

function rollDie(die) {
    die.textContent = Math.floor(Math.random() * 6) + 1;
}

function resetDice() {
    unlockedDice = Array.from(dice)
    for (let die of dice) {
        die.classList.remove("locked");
        die.textContent = "-"
    }
}

resetButton.addEventListener("click", () => resetDice());
