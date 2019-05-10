const cards = document.querySelectorAll('.game-card');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

const flipCard = function() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    };
    secondCard = this;
    checkForPair();
};

const checkForPair = function() {
    let isMatch = firstCard.dataset.type === secondCard.dataset.type;
    isMatch ? excludeCards() : unFlipCards();
};

const excludeCards = () => {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
};

const unFlipCards = () => {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 1500)
};

const resetBoard = () => {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

const shuffleCards = () => {
    cards.forEach(card => {
        let shuffle = Math.floor(Math.random() * 12);
        card.style.order = shuffle;
    })
}


shuffleCards();
cards.forEach(card => {
    card.addEventListener('click', flipCard);
});