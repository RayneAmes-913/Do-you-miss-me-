document.addEventListener('DOMContentLoaded', () => {
  const { $, goTo } = window.Valentine;
  const stage = $('#envelopeStage');
  const openButton = $('#openLetterBtn');
  const continueButton = $('#continueBtn');
  let opened = false;

  function openEnvelope() {
    if (opened) return;
    opened = true;
    stage.classList.add('open');
    openButton.classList.add('hidden');
    continueButton.classList.remove('hidden');
    continueButton.focus({ preventScroll: true });
  }

  stage.addEventListener('click', openEnvelope);
  stage.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openEnvelope();
    }
  });
  openButton.addEventListener('click', openEnvelope);
  continueButton.addEventListener('click', () => goTo('question.html'));
});
