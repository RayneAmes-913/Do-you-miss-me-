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
