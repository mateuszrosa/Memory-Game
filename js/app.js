const cards = document.querySelectorAll('.memory-card');

const flipCard = function() {
    this.classList.toggle('flip');
};

cards.forEach(card => {
    card.addEventListener('click', flipCard);
})