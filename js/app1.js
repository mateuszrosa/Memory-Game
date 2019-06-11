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
            this.secondCard,
            this.check = 0,
            this.start = 0,
            this.startTime = 0,
            this.time = 0,
            this.timing
    }
    flipCard(e) {
        this.start++;
        if (this.start === 1) {
            this.timing = setInterval(this.timer, 10);
        };
        if (this.lockBoard) return;
        if (e.target.parentNode === this.firstCard) return;

        e.target.parentNode.classList.add('flip');

        if (!this.hasFlippedCard) {
            this.hasFlippedCard = true;
            this.firstCard = e.target.parentNode;
            return;
        };
        this.secondCard = e.target.parentNode;
        // checkForPair();
        console.log(this.firstCard);
        console.log(this.secondCard);
    }
    timer() {
        this.time++;
    }
}

const memory = new MemoryGame();