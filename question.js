document.addEventListener('DOMContentLoaded', () => {
  const { $, confetti, goTo } = window.Valentine;
  const zone = $('#questionZone');
  const yes = $('#yesBtn');
  const no = $('#noBtn');
  const caption = $('#dodgeCaption');
  const questionContent = $('#questionContent');
  const yesReveal = $('#yesReveal');
  const next = $('#questionNext');
  let attempts = 0;

  const captions = [
    'Hmm... that button seems shy.',
    'Nice try 😌',
    'It has trust issues.',
    'Nope, it moved again.',
    'Are you chasing it now? 😂',
    'Okay, this is getting personal.',
    'The No button has left the chat.'
  ];

  function dodge() {
    attempts += 1;
    const padding = 12;
    const buttonWidth = no.offsetWidth;
    const buttonHeight = no.offsetHeight;
    const maxX = Math.max(padding, zone.clientWidth - buttonWidth - padding);
    const maxY = Math.max(padding, zone.clientHeight - buttonHeight - padding);

    let x = padding + Math.random() * (maxX - padding);
    let y = padding + Math.random() * (maxY - padding);

    const yesRect = yes.getBoundingClientRect();
    const zoneRect = zone.getBoundingClientRect();
    const candidate = {
      left: zoneRect.left + x,
      right: zoneRect.left + x + buttonWidth,
      top: zoneRect.top + y,
      bottom: zoneRect.top + y + buttonHeight
    };

    const overlapsYes = !(
      candidate.right < yesRect.left - 18 ||
      candidate.left > yesRect.right + 18 ||
      candidate.bottom < yesRect.top - 18 ||
      candidate.top > yesRect.bottom + 18
    );

    if (overlapsYes) {
      x = x < zone.clientWidth / 2 ? maxX - padding : padding;
      y = y < zone.clientHeight / 2 ? maxY - padding : padding;
    }

    no.style.left = `${x}px`;
    no.style.top = `${y}px`;
    no.style.transform = `rotate(${Math.random() * 12 - 6}deg)`;
    no.textContent = attempts > 5 ? 'Still no 🙈' : 'No';
    caption.textContent = captions[Math.min(attempts - 1, captions.length - 1)];
  }

  ['pointerenter', 'pointerdown', 'focus'].forEach((eventName) => {
    no.addEventListener(eventName, (event) => {
      if (eventName === 'pointerdown') event.preventDefault();
      dodge();
    });
  });

  yes.addEventListener('click', () => {
    questionContent.classList.add('hidden');
    yesReveal.classList.remove('hidden');
    confetti(100);
    window.setTimeout(() => next.focus({ preventScroll: true }), 300);
  });

  next.addEventListener('click', () => goTo('balloons.html'));
});
