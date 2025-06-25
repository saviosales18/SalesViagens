document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.cards-pacotes card-pacote');

  // Só o primeiro expandido
  cards.forEach((card, i) => {
    card.toggleAttribute('expandido', i === 0);
  });

  cards.forEach(card => {
    card.addEventListener('click', function () {
      cards.forEach(c => c.removeAttribute('expandido'));
      this.setAttribute('expandido', '');
    });
  });
});