class MemoryGame {
    constructor() {
        this.cards = document.querySelectorAll('.game-card'),
            this.cards.forEach(card => {
                card.addEventListener('click', this.flipCard.bind(this));
            }),
            this.h1 = document.querySelector('h1'),
            this.btn = document.querySelector('button'),
            this.hasFlippedCard = false,
            this.lockBoard = false,
            this.firstCard,
            this.secondCard,
            this.shuffle();
    }
    flipCard(e) {
        if (this.lockBoard) return;
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
        this.resetBoard();
    };
    unFlipCards() {
        this.lockBoard = true;
        setTimeout(() => {
            this.firstCard.classList.remove('flip');
            this.secondCard.classList.remove('flip');

            this.resetBoard();
        }, 1500);
    };
    resetBoard() {
        [this.hasFlippedCard, this.lockBoard] = [false, false];
        [this.firstCard, this.secondCard] = [null, null];
    }
    shuffle() {
        this.cards.forEach(card => {
            let random = Math.floor(Math.random() * 12);
            card.style.order = random;
        })
    }
};

const memory = new MemoryGame();