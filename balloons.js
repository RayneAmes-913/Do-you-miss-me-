document.addEventListener('DOMContentLoaded', () => {
  const { $, $$, confetti, goTo } = window.Valentine;
  const balloons = $$('.balloon');
  const counter = $('#popCounter');
  const secret = $('#secretLine');
  const next = $('#balloonNext');
  const words = [];
  let popped = 0;

  balloons.forEach((balloon, index) => {
    balloon.addEventListener('click', () => {
      if (balloon.classList.contains('popped')) return;
      balloon.classList.add('popped');
      popped += 1;
      words[index] = balloon.dataset.word;
      counter.textContent = `${popped} / ${balloons.length} popped`;
      secret.textContent = words.filter(Boolean).join(' ');

      if (popped === balloons.length) {
        confetti(65);
        next.classList.remove('hidden');
        counter.textContent = 'You found the secret message!';
        window.setTimeout(() => next.focus({ preventScroll: true }), 250);
      }
    });
  });

  next.addEventListener('click', () => goTo('gifts.html'));
});
