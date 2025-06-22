let drawpile = [];

async function initializeDeck() {
    try {
        const [sharedRes, charRes] = await Promise.all([
            fetch("./scripts/cards/shared_cards.json"),
            fetch("./scripts/cards/gunslinger.json")
        ])

        const sharedCards = await sharedRes.json();
        const charData = await charRes.json();
        const charCards = charData.cards;

        drawpile = [...sharedCards, ...charCards];
        shuffle(drawpile);
        console.log(drawpile)
    } catch(error) {
        console.error("Failed to load cards: ", error)
    }
}

function shuffle(array) {
    
}

function addCard() {
    
}


initializeDeck();
document.getElementById("draw").addEventListener("click", () => addCard());