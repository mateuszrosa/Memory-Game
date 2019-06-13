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
            this.shuffle(),
            this.check = 0,
            this.start = 0,
            this.time = 0,
            this.timing;
    }
    flipCard(e) {
        this.start++;
        if (this.start === 1) {
            this.timing = setInterval(this.countTime, 10);
        }
        if (this.lockBoard) return;
        e.target.parentNode.classList.add('flip');

        if (!this.hasFlippedCard) {
            this.hasFlippedCard = true;
            this.firstCard = e.target.parentNode;

            return;
        }
        this.hasFlippedCard = false;
        this.secondCard = e.target.parentNode;

        this.checkForPair();
    }
    checkForPair() {
        let isMatch = this.firstCard.dataset.type === this.secondCard.dataset.type;
        isMatch ? this.excludeCards() : this.unFlipCards();
    }
    excludeCards() {
        this.check++;
        this.firstCard.removeEventListener('click', this.flipCard);
        this.secondCard.removeEventListener('click', this.flipCard);
        this.resetBoard();
        if (this.check === this.cards.length / 2) {
            clearInterval(this.timing);
            this.h1.innerHTML = `Your time: <span>${(this.time / 100).toFixed(2)} seconds</span>`;
            this.time = 0;
            this.btn.style.display = "block";
            this.check = 0;
            this.start = 0;
        }
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
    countTime = () => {
        this.time++;
    }
};

const memory = new MemoryGame();