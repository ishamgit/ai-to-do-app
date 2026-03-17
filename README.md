# ai-to-do-app
.
# AI To-Do App

A full-stack to-do app that uses **Claude AI** to automatically
assign priority and suggest an action tip for every task you add.

🔗 **Live Demo:** [View App](https://ishamgit.github.io/ai-todo-app)

---

## Features

- Add tasks and get instant AI-powered priority (High / Medium / Low)
- AI suggests a smart action tip for each task
- Delete tasks when done
- Clean, responsive design — works on mobile too

---

## Tech Stack

| Layer     | Technology          |
|-----------|---------------------|
| Frontend  | HTML, CSS, JavaScript |
| Backend   | Node.js, Express.js |
| AI        | Anthropic Claude API (Haiku model) |
| Hosting   | GitHub Pages (frontend), Render (backend) |

---

## How It Works

1. User types a task in the browser
2. Frontend sends it to the Node.js backend
3. Backend calls the Claude AI API with the task
4. Claude replies with a priority level and action tip
5. Frontend displays the task card with AI data

---

## Run Locally

```bash
# Clone the repo
git clone https://github.com/ishamgit/ai-todo-app.git

# Go to backend folder
cd ai-todo-app/backend

# Install dependencies
npm install

# Create a .env file with your API key
echo "ANTHROPIC_API_KEY=your-key-here" > .env
echo "PORT=3000" >> .env

# Start the server
node server.js
```

Then open `frontend/index.html` in your browser.

---

## Project Structure

```
ai-todo-app/
├── backend/
│   ├── server.js       ← Express server + Claude API call
│   ├── .env            ← API key (not uploaded to GitHub)
│   └── package.json
└── frontend/
    ├── index.html      ← Main page
    ├── style.css       ← All styles
    └── app.js          ← Frontend logic
```

---

## What I Learned

- How to build a REST API with Node.js and Express
- How to integrate an AI API (Anthropic Claude) into a real app
- How to connect a frontend to a backend using fetch()
- How to deploy a full-stack app for free (Render + GitHub Pages)

---

## Author

**Isham Firoz** — CSE Student, BEU Patna (Batch 2023–27)

[LinkedIn](https://linkedin.com/in/your-profile) • [GitHub](https://github.com/ishamgit)
