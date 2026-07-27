# `config.js`

```javascript
/*
  EDIT THIS FILE TO PERSONALIZE THE SITE.
  Keep the quotation marks around your text.
*/
window.VALENTINE_CONFIG = {
  senderName: "Si Lester lang to pre😎",
  recipientName: "you",
  question: "Do you miss me?",
  openingLine: "I have a tiny question for you...",
  finalTitle: "You made it to the end!",
  finalMessage: [
    "Thank you for playing along with my little surprise.",
    "I made this tiny adventure just to steal a smile from you—nothing too dramatic... probably.",
    "Whether you clicked because you missed me, got curious, or simply wanted to defeat the runaway No button, I’m really glad you stayed until the end.",
    "And if you smiled even once, then mission accomplished. 💗"
  ],
  replyText: "Okay fine... I missed you too 😌"
};

```

---

# `index.html`

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#f7dce9">
  <meta name="description" content="A tiny interactive surprise.">
  <title>A tiny surprise 💌</title>
  <link rel="stylesheet" href="assets/css/styles.css">
</head>
<body>
  <div class="floating-layer" aria-hidden="true"></div>
  <main class="app-shell">
    <section class="page-card">
      <p class="eyebrow">Special delivery</p>
      <h1 data-config="openingLine">I have a tiny question for you...</h1>
      <p class="lead">It arrived in a very serious, totally official envelope.</p>

      <div id="envelopeStage" class="envelope-stage" role="button" tabindex="0" aria-label="Open the envelope">
        <div class="envelope">
          <div class="envelope-back"></div>
          <article class="letter-card">
            <strong>For <span data-config="recipientName">you</span> 💗</strong>
          </article>
          <div class="envelope-flap"></div>
          <div class="envelope-front-left"></div>
          <div class="envelope-front-right"></div>
          <div class="envelope-front-bottom"></div>
          <div class="wax-seal" aria-hidden="true">♥</div>
        </div>
      </div>

      <div class="btn-row">
        <button id="openLetterBtn" class="btn btn-primary tap-hint" type="button">Tap to open 💌</button>
        <button id="continueBtn" class="btn btn-primary hidden" type="button">Read the question →</button>
      </div>
      <p class="tiny-note">No paper cuts. Probably.</p>
    </section>
  </main>
  <script src="config.js"></script>
  <script src="assets/js/common.js"></script>
  <script src="assets/js/envelope.js"></script>
</body>
</html>

```

---

# `question.html`

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#f7dce9">
  <title>The question 👀</title>
  <link rel="stylesheet" href="assets/css/styles.css">
</head>
<body>
  <div class="floating-layer" aria-hidden="true"></div>
  <div class="progress-dots" aria-label="Step 2 of 5"><span></span><span class="active"></span><span></span><span></span><span></span></div>
  <main class="app-shell">
    <section class="page-card">
      <div id="questionContent" style="width:100%">
        <p class="eyebrow">Answer honestly</p>
        <h1 data-config="question">Do you miss me?</h1>
        <p class="lead">Choose carefully. One of these buttons has suspicious behavior.</p>
        <div id="questionZone" class="question-zone">
          <button id="yesBtn" class="btn btn-primary" type="button">Yes, a little 😌</button>
          <button id="noBtn" class="btn btn-soft" type="button">No</button>
        </div>
        <div id="dodgeCaption" class="dodge-caption" aria-live="polite"></div>
      </div>

      <div id="yesReveal" class="hidden">
        <div class="reaction-emoji" aria-hidden="true">🥹💗</div>
        <p class="eyebrow">Wait—you actually said yes?</p>
        <h2>I was fully prepared for you to fight the button.</h2>
        <p class="lead">Okay, okay. Since you admitted it, you’ve unlocked the next tiny challenge.</p>
        <div class="btn-row">
          <button id="questionNext" class="btn btn-primary" type="button">Bring on the challenge →</button>
        </div>
      </div>
    </section>
  </main>
  <script src="config.js"></script>
  <script src="assets/js/common.js"></script>
  <script src="assets/js/question.js"></script>
</body>
</html>

```

---

# `balloons.html`

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#f7dce9">
  <title>Pop the balloons 🎈</title>
  <link rel="stylesheet" href="assets/css/styles.css">
</head>
<body>
  <div class="floating-layer" aria-hidden="true"></div>
  <div class="progress-dots" aria-label="Step 3 of 5"><span></span><span></span><span class="active"></span><span></span><span></span></div>
  <main class="app-shell">
    <section class="page-card">
      <p class="eyebrow">Mini game</p>
      <h2>Pop every balloon</h2>
      <p class="lead">There’s a tiny message hiding inside. Very advanced technology.</p>

      <div class="balloon-game" aria-label="Balloon popping game">
        <button class="balloon" data-word="You" aria-label="Pop balloon 1" style="left:8%;top:10%;--balloon-color:#ef6f9f;--bob:2.7s"><span>?</span></button>
        <button class="balloon" data-word="make" aria-label="Pop balloon 2" style="left:38%;top:6%;--balloon-color:#9a86e8;--bob:3.2s"><span>?</span></button>
        <button class="balloon" data-word="my" aria-label="Pop balloon 3" style="right:9%;top:16%;--balloon-color:#f3ad4e;--bob:2.9s"><span>?</span></button>
        <button class="balloon" data-word="days" aria-label="Pop balloon 4" style="left:17%;bottom:19%;--balloon-color:#64becb;--bob:3.3s"><span>?</span></button>
        <button class="balloon" data-word="more" aria-label="Pop balloon 5" style="left:48%;bottom:10%;--balloon-color:#e85d8e;--bob:2.6s"><span>?</span></button>
        <button class="balloon" data-word="fun. 💗" aria-label="Pop balloon 6" style="right:11%;bottom:21%;--balloon-color:#7bc77e;--bob:3s"><span>?</span></button>
      </div>

      <div id="popCounter" class="game-status" aria-live="polite">0 / 6 popped</div>
      <div id="secretLine" class="secret-line" aria-live="polite"></div>
      <div class="btn-row">
        <button id="balloonNext" class="btn btn-primary hidden" type="button">Claim a surprise →</button>
      </div>
    </section>
  </main>
  <script src="config.js"></script>
  <script src="assets/js/common.js"></script>
  <script src="assets/js/balloons.js"></script>
</body>
</html>

```

---

# `gifts.html`

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#f7dce9">
  <title>Choose a gift 🎁</title>
  <link rel="stylesheet" href="assets/css/styles.css">
</head>
<body>
  <div class="floating-layer" aria-hidden="true"></div>
  <div class="progress-dots" aria-label="Step 4 of 5"><span></span><span></span><span></span><span class="active"></span><span></span></div>
  <main class="app-shell">
    <section class="page-card">
      <p class="eyebrow">One free prize</p>
      <h2>Pick your mystery gift</h2>
      <p class="lead">There are no wrong answers—only increasingly questionable prizes.</p>

      <div class="gift-grid">
        <button class="gift" data-gift="one" type="button">
          <span class="gift-emoji" aria-hidden="true">🎁</span>
          <span class="gift-label">Box number one</span>
        </button>
        <button class="gift" data-gift="two" type="button">
          <span class="gift-emoji" aria-hidden="true">🎁</span>
          <span class="gift-label">Box number two</span>
        </button>
        <button class="gift" data-gift="three" type="button">
          <span class="gift-emoji" aria-hidden="true">🎁</span>
          <span class="gift-label">The suspicious one</span>
        </button>
      </div>

      <div id="giftResult" class="gift-result" aria-live="polite"></div>
      <div class="btn-row">
        <button id="giftNext" class="btn btn-primary hidden" type="button">Open the final letter →</button>
      </div>
    </section>
  </main>
  <script src="config.js"></script>
  <script src="assets/js/common.js"></script>
  <script src="assets/js/gifts.js"></script>
</body>
</html>

```

---

# `final.html`

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#f7dce9">
  <title>One last thing 💗</title>
  <link rel="stylesheet" href="assets/css/styles.css">
</head>
<body>
  <div class="floating-layer" aria-hidden="true"></div>
  <div class="progress-dots" aria-label="Step 5 of 5"><span></span><span></span><span></span><span></span><span class="active"></span></div>
  <main class="app-shell">
    <section class="page-card">
      <p class="eyebrow">Final message</p>
      <h2 data-config="finalTitle">You made it to the end!</h2>
      <div class="final-letter">
        <div id="finalLetterBody"></div>
        <div id="signature" class="signature"></div>
      </div>
      <div class="btn-row">
        <button id="copyReply" class="btn btn-primary" type="button">Copy a cute reply 💬</button>
        <button id="replayBtn" class="btn btn-soft" type="button">Replay ↺</button>
      </div>
      <p class="tiny-note">Warning: side effects may include random smiling and thinking of me.</p>
    </section>
  </main>
  <div class="toast" role="status" aria-live="polite"></div>
  <script src="config.js"></script>
  <script src="assets/js/common.js"></script>
  <script src="assets/js/final.js"></script>
</body>
</html>

```

---

# `assets/css/styles.css`

```css
:root {
  --ink: #541f38;
  --ink-soft: #7c455d;
  --rose: #e85d8e;
  --rose-deep: #c93670;
  --blush: #ffd8e6;
  --cream: #fffaf7;
  --paper: rgba(255, 255, 255, 0.86);
  --shadow: 0 26px 80px rgba(130, 43, 82, 0.18);
  --radius: 30px;
  --ease: cubic-bezier(.2,.8,.2,1);
}

* { box-sizing: border-box; }

html { min-height: 100%; }

body {
  margin: 0;
  min-height: 100vh;
  overflow-x: hidden;
  color: var(--ink);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background:
    radial-gradient(circle at 12% 14%, rgba(255,255,255,.95) 0 4%, transparent 23%),
    radial-gradient(circle at 88% 18%, rgba(255,222,236,.95) 0 8%, transparent 28%),
    linear-gradient(135deg, #fff7fb 0%, #fce8f1 46%, #f7dce9 100%);
}

body::before,
body::after {
  content: "";
  position: fixed;
  inset: auto;
  border-radius: 999px;
  filter: blur(6px);
  z-index: -2;
  opacity: .65;
  animation: blobFloat 12s ease-in-out infinite alternate;
}

body::before {
  width: 320px;
  height: 320px;
  top: -90px;
  right: -100px;
  background: rgba(255, 149, 190, .35);
}

body::after {
  width: 270px;
  height: 270px;
  bottom: -90px;
  left: -80px;
  background: rgba(255, 210, 151, .25);
  animation-delay: -5s;
}

@keyframes blobFloat {
  to { transform: translate3d(20px, 30px, 0) scale(1.08); }
}

button,
input { font: inherit; }

button { -webkit-tap-highlight-color: transparent; }

button:focus-visible,
a:focus-visible,
input:focus-visible {
  outline: 3px solid rgba(201, 54, 112, .28);
  outline-offset: 4px;
}

.app-shell {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 24px;
  position: relative;
  isolation: isolate;
}

.page-card {
  width: min(92vw, 720px);
  min-height: 520px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: clamp(28px, 6vw, 58px);
  border: 1px solid rgba(255,255,255,.72);
  border-radius: var(--radius);
  background: var(--paper);
  box-shadow: var(--shadow);
  backdrop-filter: blur(18px);
  overflow: hidden;
  animation: cardIn .75s var(--ease) both;
}

.page-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(120deg, transparent, rgba(255,255,255,.55), transparent),
    radial-gradient(circle at top left, rgba(255,255,255,.74), transparent 42%);
  pointer-events: none;
}

@keyframes cardIn {
  from { opacity: 0; transform: translateY(22px) scale(.97); }
  to { opacity: 1; transform: none; }
}

.eyebrow {
  margin: 0 0 12px;
  color: var(--rose-deep);
  font-weight: 800;
  letter-spacing: .14em;
  text-transform: uppercase;
  font-size: .78rem;
}

h1, h2, .serif {
  font-family: Georgia, "Times New Roman", serif;
}

h1, h2, p { position: relative; z-index: 1; }

h1 {
  max-width: 650px;
  margin: 0;
  font-size: clamp(2.3rem, 8vw, 5rem);
  line-height: .98;
  letter-spacing: -.045em;
}

h2 {
  margin: 0 0 14px;
  font-size: clamp(2rem, 6vw, 3.8rem);
  line-height: 1.03;
}

.lead {
  max-width: 570px;
  margin: 18px auto 0;
  color: var(--ink-soft);
  font-size: clamp(1rem, 2.4vw, 1.18rem);
  line-height: 1.7;
}

.tiny-note {
  margin: 14px 0 0;
  color: rgba(84, 31, 56, .62);
  font-size: .86rem;
}

.btn-row {
  position: relative;
  z-index: 4;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin-top: 30px;
}

.btn {
  min-height: 54px;
  padding: 14px 26px;
  border: 0;
  border-radius: 999px;
  cursor: pointer;
  font-weight: 800;
  letter-spacing: .01em;
  transition: transform .2s var(--ease), box-shadow .2s var(--ease), filter .2s ease;
}

.btn:hover { transform: translateY(-3px); }
.btn:active { transform: translateY(0) scale(.98); }

.btn-primary {
  color: white;
  background: linear-gradient(135deg, var(--rose), var(--rose-deep));
  box-shadow: 0 14px 30px rgba(201, 54, 112, .28);
}

.btn-primary:hover { box-shadow: 0 18px 38px rgba(201, 54, 112, .36); }

.btn-soft {
  color: var(--ink);
  background: rgba(255,255,255,.74);
  border: 1px solid rgba(84,31,56,.12);
  box-shadow: 0 10px 24px rgba(84,31,56,.08);
}

.btn-link {
  border: 0;
  background: transparent;
  color: var(--ink-soft);
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 4px;
}

.progress-dots {
  position: fixed;
  top: 18px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
  display: flex;
  gap: 8px;
  padding: 9px 12px;
  border-radius: 999px;
  background: rgba(255,255,255,.52);
  border: 1px solid rgba(255,255,255,.78);
  backdrop-filter: blur(10px);
}

.progress-dots span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(84,31,56,.18);
}

.progress-dots span.active {
  width: 23px;
  border-radius: 10px;
  background: var(--rose);
}

.floating-layer {
  position: fixed;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: -1;
}

.float-heart {
  position: absolute;
  bottom: -60px;
  opacity: 0;
  animation: rise var(--duration, 12s) linear infinite;
  animation-delay: var(--delay, 0s);
  font-size: var(--size, 24px);
  filter: drop-shadow(0 7px 8px rgba(179, 57, 106, .13));
}

@keyframes rise {
  0% { transform: translate3d(0,0,0) rotate(0deg); opacity: 0; }
  10% { opacity: .65; }
  85% { opacity: .45; }
  100% { transform: translate3d(var(--drift, 40px), -115vh, 0) rotate(28deg); opacity: 0; }
}

/* ENVELOPE PAGE */
.envelope-stage {
  width: min(82vw, 420px);
  height: 320px;
  position: relative;
  z-index: 3;
  margin: 18px auto 4px;
  perspective: 1000px;
  cursor: pointer;
}

.envelope {
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 100%;
  height: 235px;
  transform: translateX(-50%);
  filter: drop-shadow(0 30px 30px rgba(113, 35, 67, .18));
}

.envelope-back {
  position: absolute;
  inset: 0;
  border-radius: 16px;
  background: linear-gradient(145deg, #f4a5bf, #df6f99);
}

.envelope-front-left,
.envelope-front-right,
.envelope-front-bottom {
  position: absolute;
  inset: 0;
  z-index: 4;
  border-radius: 16px;
  overflow: hidden;
}

.envelope-front-left::before,
.envelope-front-right::before,
.envelope-front-bottom::before {
  content: "";
  position: absolute;
  inset: 0;
}

.envelope-front-left::before {
  background: #f49fbd;
  clip-path: polygon(0 0, 52% 55%, 0 100%);
}

.envelope-front-right::before {
  background: #ec8db0;
  clip-path: polygon(100% 0, 48% 55%, 100% 100%);
}

.envelope-front-bottom::before {
  background: linear-gradient(155deg, #f8b0ca, #e378a1);
  clip-path: polygon(0 100%, 50% 42%, 100% 100%);
}

.envelope-flap {
  position: absolute;
  inset: 0;
  z-index: 5;
  transform-origin: top center;
  transform-style: preserve-3d;
  transition: transform 1s var(--ease), z-index 0s linear .48s;
}

.envelope-flap::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 16px;
  background: linear-gradient(160deg, #ffb8d0, #ec86ab);
  clip-path: polygon(0 0, 50% 64%, 100% 0);
  backface-visibility: hidden;
}

.letter-card {
  position: absolute;
  left: 8%;
  right: 8%;
  bottom: 18px;
  height: 245px;
  z-index: 2;
  padding: 34px 24px;
  border-radius: 15px 15px 10px 10px;
  background:
    repeating-linear-gradient(0deg, rgba(104,38,64,.035) 0 1px, transparent 1px 28px),
    #fffdfa;
  border: 1px solid rgba(91, 34, 58, .11);
  transition: transform 1.05s var(--ease) .35s;
  display: grid;
  place-items: center;
  text-align: center;
}

.letter-card strong {
  font-family: Georgia, serif;
  font-size: clamp(1.55rem, 5vw, 2.15rem);
}

.wax-seal {
  position: absolute;
  z-index: 7;
  left: 50%;
  top: 57%;
  width: 76px;
  height: 76px;
  transform: translate(-50%,-50%);
  display: grid;
  place-items: center;
  border-radius: 50%;
  color: #fff0f6;
  font-size: 30px;
  background: radial-gradient(circle at 35% 28%, #f6749d, #b82860 68%);
  border: 5px double rgba(255,255,255,.28);
  box-shadow: 0 12px 22px rgba(95,19,51,.28);
  transition: opacity .25s ease, transform .5s var(--ease);
}

.envelope-stage.open .envelope-flap {
  transform: rotateX(180deg);
  z-index: 1;
}

.envelope-stage.open .letter-card { transform: translateY(-138px); }
.envelope-stage.open .wax-seal { opacity: 0; transform: translate(-50%,-50%) scale(.5) rotate(-30deg); }

.tap-hint { animation: pulse 1.7s ease-in-out infinite; }
@keyframes pulse { 50% { transform: translateY(-3px); opacity: .65; } }

/* QUESTION */
.question-zone {
  width: 100%;
  min-height: 210px;
  position: relative;
  margin-top: 22px;
  border-radius: 22px;
  background: rgba(255,255,255,.32);
  border: 1px dashed rgba(135, 52, 83, .18);
}

.question-zone .btn {
  position: absolute;
  min-width: 118px;
}

#yesBtn { left: calc(50% - 130px); top: 76px; }
#noBtn { left: calc(50% + 12px); top: 76px; transition: left .22s var(--ease), top .22s var(--ease), transform .18s var(--ease); }

.dodge-caption {
  min-height: 28px;
  margin-top: 12px;
  font-weight: 700;
  color: var(--rose-deep);
}

.reaction-emoji {
  font-size: clamp(3.4rem, 11vw, 6rem);
  animation: emojiBounce .65s var(--ease) both;
}

@keyframes emojiBounce {
  0% { transform: scale(.2) rotate(-22deg); opacity: 0; }
  70% { transform: scale(1.15) rotate(7deg); }
  100% { transform: scale(1); opacity: 1; }
}

/* BALLOONS */
.balloon-game {
  position: relative;
  z-index: 3;
  width: 100%;
  height: min(53vh, 420px);
  min-height: 340px;
  margin-top: 20px;
  border-radius: 24px;
  background:
    linear-gradient(rgba(255,255,255,.22), rgba(255,255,255,.08)),
    radial-gradient(circle at 50% 120%, rgba(255,255,255,.85), transparent 55%);
  border: 1px solid rgba(255,255,255,.65);
  overflow: hidden;
}

.balloon {
  position: absolute;
  width: 68px;
  height: 84px;
  border: 0;
  cursor: pointer;
  border-radius: 52% 48% 48% 52%;
  background: var(--balloon-color);
  box-shadow: inset -10px -12px 18px rgba(93,25,53,.13), inset 10px 8px 16px rgba(255,255,255,.25), 0 15px 22px rgba(111,35,65,.12);
  animation: balloonBob var(--bob, 3s) ease-in-out infinite alternate;
  transition: transform .18s ease, opacity .18s ease;
}

.balloon::before {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -9px;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-top: 11px solid var(--balloon-color);
  transform: translateX(-50%);
}

.balloon::after {
  content: "";
  position: absolute;
  width: 1px;
  height: 80px;
  left: 50%;
  top: 94%;
  background: rgba(84,31,56,.35);
}

.balloon span {
  color: white;
  font-weight: 900;
  font-size: 1.15rem;
  text-shadow: 0 2px 6px rgba(82,18,45,.25);
}

.balloon:hover { transform: scale(1.07); }
.balloon.popped { animation: pop .28s ease forwards; pointer-events: none; }

@keyframes balloonBob { to { transform: translateY(-13px) rotate(2deg); } }
@keyframes pop {
  40% { transform: scale(1.35); opacity: .9; }
  100% { transform: scale(.1); opacity: 0; }
}

.game-status {
  margin-top: 14px;
  font-weight: 800;
  color: var(--ink-soft);
}

.secret-line {
  min-height: 38px;
  margin-top: 8px;
  font-family: Georgia, serif;
  font-size: clamp(1.3rem, 4vw, 1.8rem);
  font-weight: 800;
}

/* GIFTS */
.gift-grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin-top: 30px;
  position: relative;
  z-index: 3;
}

.gift {
  min-height: 180px;
  border: 0;
  border-radius: 24px;
  background: rgba(255,255,255,.58);
  border: 1px solid rgba(255,255,255,.8);
  box-shadow: 0 16px 30px rgba(93,29,57,.1);
  cursor: pointer;
  transition: transform .25s var(--ease), box-shadow .25s ease;
}

.gift:hover { transform: translateY(-8px) rotate(-1deg); box-shadow: 0 24px 42px rgba(93,29,57,.16); }
.gift:disabled { cursor: default; }

.gift-emoji {
  display: block;
  font-size: 4.2rem;
  transition: transform .55s var(--ease);
}

.gift.opened .gift-emoji { transform: rotateY(180deg) scale(1.14); }

.gift-label {
  display: block;
  margin-top: 8px;
  color: var(--ink-soft);
  font-weight: 800;
}

.gift-result {
  min-height: 88px;
  margin-top: 24px;
  padding: 18px 20px;
  border-radius: 20px;
  background: rgba(255,255,255,.45);
  font-size: 1.03rem;
  line-height: 1.6;
  opacity: 0;
  transform: translateY(8px);
  transition: .35s var(--ease);
}

.gift-result.show { opacity: 1; transform: none; }

/* FINAL LETTER */
.final-letter {
  width: min(100%, 620px);
  position: relative;
  z-index: 3;
  padding: clamp(26px, 6vw, 46px);
  border-radius: 24px;
  text-align: left;
  background:
    repeating-linear-gradient(0deg, rgba(114,42,69,.035) 0 1px, transparent 1px 31px),
    rgba(255,253,249,.9);
  border: 1px solid rgba(84,31,56,.1);
  box-shadow: 0 18px 50px rgba(83,25,51,.11);
}

.final-letter p {
  margin: 0 0 18px;
  color: #69394e;
  line-height: 1.8;
  font-size: clamp(1rem, 2.2vw, 1.13rem);
  opacity: 0;
  transform: translateY(10px);
  animation: lineIn .55s var(--ease) forwards;
  animation-delay: var(--line-delay);
}

.final-letter p:last-of-type { margin-bottom: 0; }

.signature {
  margin-top: 25px;
  text-align: right;
  font-family: Georgia, serif;
  font-weight: 800;
  font-size: 1.15rem;
}

@keyframes lineIn { to { opacity: 1; transform: none; } }

.confetti-piece {
  position: fixed;
  z-index: 99;
  width: 10px;
  height: 16px;
  border-radius: 3px;
  pointer-events: none;
  animation: confettiFall var(--fall-time, 2.2s) cubic-bezier(.15,.65,.3,1) forwards;
}

@keyframes confettiFall {
  0% { transform: translate3d(0,-12vh,0) rotate(0deg); opacity: 1; }
  100% { transform: translate3d(var(--fall-x),110vh,0) rotate(var(--spin)); opacity: .9; }
}

.toast {
  position: fixed;
  left: 50%;
  bottom: 24px;
  z-index: 100;
  transform: translate(-50%, 18px);
  padding: 12px 18px;
  border-radius: 999px;
  color: white;
  background: rgba(84,31,56,.92);
  box-shadow: 0 12px 30px rgba(54,15,31,.2);
  opacity: 0;
  pointer-events: none;
  transition: .28s var(--ease);
}

.toast.show { opacity: 1; transform: translate(-50%,0); }

.hidden { display: none !important; }

@media (max-width: 650px) {
  .app-shell { padding: 66px 14px 20px; }
  .page-card { width: 100%; min-height: 540px; padding: 30px 18px; border-radius: 24px; }
  .envelope-stage { width: min(92vw, 380px); transform: scale(.92); margin-block: 0 -8px; }
  .gift-grid { grid-template-columns: 1fr; }
  .gift { min-height: 118px; display: flex; align-items: center; justify-content: center; gap: 18px; }
  .gift-emoji { font-size: 3.4rem; }
  .gift-label { margin: 0; }
  .question-zone { min-height: 245px; }
  #yesBtn { left: calc(50% - 122px); top: 92px; }
  #noBtn { left: calc(50% + 5px); top: 92px; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: .01ms !important;
  }
}

```

---

# `assets/js/common.js`

```javascript
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

```

---

# `assets/js/envelope.js`

```javascript
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

```

---

# `assets/js/question.js`

```javascript
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
    'sure ka?',
    'Hmm... that button seems shy.',
    'Nice try 😌',
    'HAHAHAHAHAHA',
    'It has trust issues.',
    'Nope, it moved again.',
    'Are you chasing it now? 😂',
    'Okay, this is getting personal.',
    'Maldita😛',
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

```

---

# `assets/js/balloons.js`

```javascript
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

```

---

# `assets/js/gifts.js`

```javascript
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

```

---

# `assets/js/final.js`

```javascript
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

```

---

# `README.md`

```markdown
# Miss Me? — Interactive Valentine Website

A complete, mobile-friendly multi-page website with:

- Animated envelope opening
- A playful “Do you miss me?” question
- A No button that runs away
- Balloon-popping mini game
- Mystery gift selection
- Confetti and floating hearts
- A customizable final thank-you letter
- A one-tap copyable reply

## Personalize it

Open `config.js` and edit:

- `senderName`
- `recipientName`
- `question`
- `openingLine`
- `finalTitle`
- `finalMessage`
- `replyText`

You can also edit the prize messages in `assets/js/gifts.js` and the balloon message in `balloons.html`.

## Run locally

You can double-click `index.html`, but using a local server is better:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish as a shareable link

This project is static—no PHP or database needed. Upload the entire folder to any static host such as Netlify, Vercel, GitHub Pages, Cloudflare Pages, or Replit.

For Netlify, you can drag the whole project folder into Netlify Drop. Make sure `index.html` stays at the root.

```

---

