(() => {
  const config = window.VALENTINE_CONFIG || {};

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  function applyConfig() {
    $$('[data-config]').forEach((element) => {
      const key = element.dataset.config;
      if (Object.prototype.hasOwnProperty.call(config, key)) {
        element.textContent = config[key];
      }
    });
  }

  function createFloatingHearts(count = 16) {
    const layer = $('.floating-layer');
    if (!layer) return;
    const icons = ['💗', '💖', '💕', '♡', '✦'];

    for (let i = 0; i < count; i += 1) {
      const heart = document.createElement('span');
      heart.className = 'float-heart';
      heart.textContent = icons[i % icons.length];
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.setProperty('--size', `${14 + Math.random() * 22}px`);
      heart.style.setProperty('--duration', `${9 + Math.random() * 9}s`);
      heart.style.setProperty('--delay', `${-Math.random() * 14}s`);
      heart.style.setProperty('--drift', `${-70 + Math.random() * 140}px`);
      layer.appendChild(heart);
    }
  }

  function confetti(count = 90) {
    const colors = ['#e85d8e', '#ffb3ce', '#ffd166', '#8bd3dd', '#b8a1ff', '#ffffff'];
    for (let i = 0; i < count; i += 1) {
      const piece = document.createElement('span');
      piece.className = 'confetti-piece';
      piece.style.left = `${Math.random() * 100}vw`;
      piece.style.top = `${-8 - Math.random() * 20}vh`;
      piece.style.background = colors[Math.floor(Math.random() * colors.length)];
      piece.style.setProperty('--fall-time', `${1.8 + Math.random() * 2}s`);
      piece.style.setProperty('--fall-x', `${-160 + Math.random() * 320}px`);
      piece.style.setProperty('--spin', `${360 + Math.random() * 900}deg`);
      document.body.appendChild(piece);
      setTimeout(() => piece.remove(), 4400);
    }
  }

  function showToast(message) {
    let toast = $('.toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => toast.classList.remove('show'), 2200);
  }

  function goTo(url, delay = 0) {
    document.body.style.transition = 'opacity .32s ease, transform .32s ease';
    document.body.style.opacity = '0';
    document.body.style.transform = 'translateY(-8px)';
    window.setTimeout(() => { window.location.href = url; }, Math.max(280, delay));
  }

  window.Valentine = { config, $, $$, confetti, showToast, goTo };
  document.addEventListener('DOMContentLoaded', () => {
    applyConfig();
    createFloatingHearts();
  });
})();
