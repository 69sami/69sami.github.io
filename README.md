# Your Portfolio Website

## Status: pre-filled with your real info

This copy already has your real name, experience, education, skills, and achievements
filled in from your CV, and your resume PDF is already in `assets/resume.pdf`. You can
upload this straight to GitHub as-is. Come back and edit `data.js` any time you want to
add more projects, update an internship, or add new achievements.

## File map (only one file matters for content)

- **`data.js`** ← edit THIS to add/remove/change your name, projects, achievements, skills, links. This is the only file you need to touch for regular updates.
- `index.html` — page structure (only touch if you want to add a whole new section)
- `style.css` — visual design
- `script.js` — animations + renders `data.js` onto the page
- `assets/` — put your resume PDF and project images here

## How to preview it on your own computer

Just double-click `index.html` — it opens in your browser. Edit `data.js`, save, refresh the browser tab to see changes.

## How to add a new project (example)

Open `data.js`, find the `projects: [ ... ]` array, and add a new block like this
(don't forget the comma after the previous project's closing `}`):

```js
{
  designator: "PRJ-04",
  title: "My New Project",
  period: "2026",
  description: "What it does and what you did.",
  tags: ["Power Electronics"],
  image: "assets/project4.jpg",   // or "" to skip an image
  link: "https://github.com/you/project4"  // or "" to skip a link
}
```

To delete a project, achievement, or education entry: delete its whole `{ ... }` block.

---

## Hosting it for free (GitHub Pages) — step by step, no coding required

You've never used GitHub, so here's the exact path.

### 1. Create a GitHub account
Go to **github.com** → Sign up (free).

### 2. Create a new repository
- Click the **+** icon (top right) → **New repository**
- Name it exactly: `yourusername.github.io` (replace `yourusername` with your actual GitHub username — this exact naming makes GitHub host it automatically)
- Set it to **Public**
- Click **Create repository**

### 3. Upload your files
- On the new repo page, click **"uploading an existing file"** (or **Add file → Upload files**)
- Drag in all files from this folder: `index.html`, `style.css`, `script.js`, `data.js`, and the whole `assets` folder
- Scroll down, click **Commit changes**

### 4. Turn on GitHub Pages
- Go to the repo's **Settings** tab → **Pages** (left sidebar)
- Under "Build and deployment" → Source: select **Deploy from a branch**
- Branch: select **main**, folder: **/ (root)** → **Save**
- Wait 1–2 minutes. Your site will be live at:
  `https://yourusername.github.io`

### 5. Updating it later
Whenever you want to add a project or achievement:
- Go to your repo on github.com
- Click on `data.js`
- Click the **pencil (edit) icon**
- Make your change
- Scroll down, click **Commit changes**
- Your live site updates automatically in about a minute — no re-uploading everything needed.

To add a new resume PDF or project photo: go to the `assets` folder in your repo → **Add file → Upload files**.

---

## Adding this to your CV / applications

Once live, put the link (`https://yourusername.github.io`) directly under your name/contact info on your CV, and in scholarship/job application "portfolio/website" fields.
