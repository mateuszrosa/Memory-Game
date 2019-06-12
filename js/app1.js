class MemoryGame {
    constructor() {
        document.querySelectorAll('.game-card').forEach(card => {
            card.addEventListener('click', this.flipCard.bind(this));
        }),
            this.h1 = document.querySelector('h1'),
            this.btn = document.querySelector('button'),
            this.hasFlippedCard = false,
            this.lockBoard = false,
            this.firstCard,
            this.secondCard
    }
    flipCard(e) {
        e.target.parentNode.classList.add('flip');

        if (!this.hasFlippedCard) {
            // first click
            this.hasFlippedCard = true;
            this.firstCard = e.target.parentNode;

            return;
        }
        // second click
        this.hasFlippedCard = false;
        this.secondCard = e.target.parentNode;

        this.checkForPair();
    }
    checkForPair() {
        let isMatch = this.firstCard.dataset.type === this.secondCard.dataset.type;
        isMatch ? this.excludeCards() : this.unFlipCards();
    }
    excludeCards() {
        this.firstCard.removeEventListener('click', this.flipCard);
        this.secondCard.removeEventListener('click', this.flipCard);
    };
    unFlipCards() {
        setTimeout(() => {
            this.firstCard.classList.remove('flip');
            this.secondCard.classList.remove('flip');
        }, 1500);
    };
    // resetBoard() {
    //     [this.hasFlippedCard, this.lockBoard] = [false, false];
    //     [this.firstCard, this.secondCard] = [null, null];
    // }
};

const memory = new MemoryGame();