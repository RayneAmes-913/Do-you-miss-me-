document.addEventListener('DOMContentLoaded', () => {
  const { $, config, confetti, showToast, goTo } = window.Valentine;
  const letterBody = $('#finalLetterBody');
  const signature = $('#signature');
  const copyReply = $('#copyReply');
  const replay = $('#replayBtn');

  const paragraphs = Array.isArray(config.finalMessage) ? config.finalMessage : [];
  paragraphs.forEach((text, index) => {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    paragraph.style.setProperty('--line-delay', `${.25 + index * .42}s`);
    letterBody.appendChild(paragraph);
  });

  signature.textContent = `— ${config.senderName || 'Me'}`;
  confetti(110);

  copyReply.addEventListener('click', async () => {
    const reply = config.replyText || 'Okay fine... I missed you too 😌';
    try {
      await navigator.clipboard.writeText(reply);
      showToast('Reply copied — now send it to me 😌');
    } catch {
      window.prompt('Copy this reply:', reply);
    }
  });

  replay.addEventListener('click', () => goTo('index.html'));
});
