const cards = document.querySelectorAll('.game-card');
console.log(cards);
const flipCard = function() {
    this.classList.toggle('flip');
};

cards.forEach(card => {
    card.addEventListener('click', flipCard);
})