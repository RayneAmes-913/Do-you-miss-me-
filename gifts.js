document.addEventListener('DOMContentLoaded', () => {
  const { $, $$, confetti, goTo } = window.Valentine;
  const gifts = $$('.gift');
  const result = $('#giftResult');
  const next = $('#giftNext');
  let chosen = false;

  const messages = {
    one: 'You found: one premium, unlimited-use hug. Redeemable whenever we meet. No expiration date. 🤗',
    two: 'You found: a coupon for one honest answer from me. Dangerous choice, honestly. 😅',
    three: 'You found the jackpot: proof that I made an entire website just to make you smile. A little extra? Maybe. Worth it? Absolutely. 💗'
  };

  gifts.forEach((gift) => {
    gift.addEventListener('click', () => {
      if (chosen) return;
      chosen = true;
      gift.classList.add('opened');
      gift.querySelector('.gift-emoji').textContent = '💝';
      result.textContent = messages[gift.dataset.gift];
      result.classList.add('show');
      gifts.forEach((item) => { item.disabled = true; });
      next.classList.remove('hidden');
      confetti(75);
      window.setTimeout(() => next.focus({ preventScroll: true }), 250);
    });
  });

  next.addEventListener('click', () => goTo('final.html'));
});
