const cards = document.querySelectorAll('.game-card');
const h1 = document.querySelector('h1');
const btn = document.querySelector('button');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let check = 0;
let start = 0;
let time = 0;
let timing;

const flipCard = function() {
    start++;
    if (start === 1) {
        timing = setInterval(timer, 10);
    };
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
    check++;
    resetBoard();
    if (check === cards.length / 2) {
        clearInterval(timing);
        h1.innerHTML = `Your time: <span>${(time/100).toFixed(2)} seconds</span>`;
        time = 0;
        btn.style.display = "block";
        check = 0;
        start = 0;
    }

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

const timer = () => {
    time++;
}

const resetGame = () => {
    shuffleCards();
    btn.style.display = 'none';
    cards.forEach(card => {
        card.classList.remove('flip');
        card.addEventListener('click', flipCard);
    });
    h1.innerHTML = "";
}

shuffleCards();
cards.forEach(card => {
    card.addEventListener('click', flipCard);
});

btn.addEventListener('click', resetGame);