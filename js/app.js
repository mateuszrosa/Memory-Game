const cards = document.querySelectorAll('.game-card');
let hasFlippedCard = false;
let firstCard, secondCard;

const flipCard = function() {
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

const checkForPair = () => {
    let isMatch = firstCard.dataset.name === secondCard.dataset.name;
    isMatch ? excludeCards() : unFlipCards();
};

const excludeCards = () => {
    console.log('disable');
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
};

const unFlipCards = () => {
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        console.log('unflip');
    }, 1500)
};

cards.forEach(card => {
    card.addEventListener('click', flipCard);
});