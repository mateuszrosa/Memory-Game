const cards = document.querySelectorAll('.game-card');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

const flipCard = function() {
    if (lockBoard) return;
    this.classList.add('flip');
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    };
    secondCard = this;
    hasFlippedCard = false;
    checkForPair();
};

const checkForPair = function() {
    let isMatch = firstCard.dataset.type === secondCard.dataset.type;
    isMatch ? excludeCards() : unFlipCards();
};

const excludeCards = () => {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
};

const unFlipCards = () => {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        lockBoard = false;
    }, 1500)
};

cards.forEach(card => {
    card.addEventListener('click', flipCard);
});