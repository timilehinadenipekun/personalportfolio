# Timilehin's Portfolio

A complete, responsive, static personal website for GitHub Pages. No Node.js, build step or paid hosting needed.

## Quick start

1. Open `index.html` in your browser to preview.
2. **Photo:** Put your portrait at the **root** of this folder, alongside `index.html`, and name it **`photo.jpeg`** (exact spelling and extension, all lowercase). Until then, a monogram placeholder is displayed.
3. **Email and LinkedIn:** Already configured in `script.js` with your Outlook email and LinkedIn URL. Change them there whenever needed.
4. **CV:** Export your CV as a PDF named **`resume.pdf`** and save it inside `assets/` (path `assets/resume.pdf`). Until you do, the résumé button will point to a missing file.
5. **Portfolio project details:** Update the `projects` object in `script.js` with your final project descriptions, results and demos. The current copy is based on known information but still needs your review. This version deliberately does not invent GitHub repository URLs, demo results or screenshots.
6. **Visuals:** Project illustrations are custom CSS placeholders, not screenshots of the actual software. You can replace them with authentic screenshots later.

## Publish at your personal GitHub Pages URL

1. On GitHub, create a **public** repository named `timilehinadenipekun.github.io` (matching your username).
2. Upload **the contents of this folder** (`index.html`, `styles.css`, `script.js`, `assets/`, plus `photo.jpeg` and CV when ready) to the **root** of the repository. Do not upload only the parent ZIP file.
3. Open your repository **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**, **main**, and **/(root)**; save.
4. Visit `https://timilehinadenipekun.github.io` after GitHub finishes deployment.

## Structure

```
index.html
styles.css
script.js
photo.jpeg             ← add your image here
assets/
  favicon.svg
  resume.pdf           ← add your CV here
```

## Notes

- Responsive layout, accessible keyboard-operable project cards and modal, mobile navigation, dark/light mode, scroll animations, and reduced-motion support.
- Google Fonts are loaded from Google; the site falls back to locally installed fonts when offline.
- No analytics or contact form collecting personal data. Email is a `mailto:` link.
- The skills section is intentionally selective and can be tailored for different jobs.
- Test the website on desktop and mobile before putting it on your CV.

## Personalized content

- Colorful, creative palette and interactive theme toggle.
- Internship interests: software engineering, full-stack/mobile, VR/AR and computer vision.
- Community activities: Women in AI Hackathon, Alberta Drone Ecosystem Workshop volunteering, and University of Buckingham leadership.
- Personal interests: Among Us, board games, Genshin Impact and Brooklyn Nine-Nine.
- Review the activities descriptions and dates before publishing; they are intentionally conservative and do not claim hackathon results or workshop duties not supplied.
