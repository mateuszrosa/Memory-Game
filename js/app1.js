class MemoryGame {
    constructor() {
        document.querySelectorAll('.game-card').forEach(card => {
            card.addEventListener('click', this.flipCard);
        });
        this.h1 = document.querySelector('h1');
        this.btn = document.querySelector('button');
        this.hasFlippedCard = false;
        this.lockBoard = false;
        this.firstCard,
            this.secondCard;
        this.check = 0;
        this.start = 0;
        this.startTime = 0;
        this.time = 0;
        this.timing;
    }
    flipCard(e) {
        this.start++;
        console.log(e.target)
        if (this.start === 1) {
            this.timing = setInterval(timer, 10);
        };
        if (this.lockBoard) return;
        if (e.target === this.firstCard) return;

        e.target.classList.add('flip');

        if (!this.hasFlippedCard) {
            this.hasFlippedCard = true;
            this.firstCard = e.target;
            return;
        };
        this.secondCard = e.target;
        // checkForPair();
    }
}

const memory = new MemoryGame();