
# DailyBuzz: Modern React News Portal

A visually rich, modular news web app built with React and Vite, fetching live news from NewsAPI.org. Explore trending stories, search topics, and browse by category with a beautiful, responsive UI.

---

## Table of Contents
1. [About the Project](#about-the-project)
2. [Tech Stack](#tech-stack)
3. [Getting Started](#getting-started)
4. [Folder Structure](#folder-structure)
5. [Color Palette](#color-palette)
6. [Image Credits](#image-credits)
7. [API Credits](#api-credits)
8. [What I Learned](#what-i-learned)
9. [More Info](#more-info)

[⬆️ Back to Top](#dailybuzz-modern-react-news-portal)

---

## About the Project
DailyBuzz is a personal project that delivers the latest news in a modern, card-based UI. Users can:
- Browse top headlines by category (Sports, Technology, Business, Entertainment, etc.)
- Search for news topics and keywords
- Explore editor's favorite topics
- Enjoy a responsive, mobile-friendly experience

[⬆️ Back to Top](#table-of-contents)

---

## Tech Stack
- **React** (with Hooks)
- **Vite** (for fast dev/build)
- **NewsAPI.org** (live news data)
- **React Router** (navigation)
- **CSS Modules** & custom styles
- **.env** for API key management

[⬆️ Back to Top](#table-of-contents)

---

## Getting Started
1. **Clone the repo:**
   ```sh
   git clone https://github.com/ayush-sleeping/DailyBuzz.git
   cd DailyBuzz
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Add your NewsAPI key:**
   - Create a `.env` file in the root:
     ```env
     VITE_NEWS_API_KEY=your_api_key_here
     ```
4. **Run the app:**
   ```sh
   npm run dev
   ```
5. **Open in browser:**
   - Visit [http://localhost:5173](http://localhost:5173)

[⬆️ Back to Top](#table-of-contents)

---

## Folder Structure
```
DailyBuzz/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/           # Images, logos, icons
│   ├── components/
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── News/
│   │   └── homepage/
│   ├── data/             # (Optional) Mock data
│   ├── pages/            # Home, Category, Search, etc.
│   ├── styles/           # Global styles
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env                  # API key (not committed)
├── package.json
├── vite.config.js
└── README.md
```
- Components are modular and grouped by feature.
- Pages handle routing and data fetching.
- All API keys are kept in `.env` (never commit this file).

[⬆️ Back to Top](#table-of-contents)

---

## Color Palette
- **Primary:** #d96570 (rose red)
- **Accent:** #f7c873 (golden yellow)
- **Background:** #fff, #f7f7f7
- **Text:** #222, #444
- **Other:** #eaeaea, #f3f3f3

[⬆️ Back to Top](#table-of-contents)

---

## Image Credits
All images and logos used in this project are downloaded from Pinterest. Thanks to the creators and Pinterest for the resources.

[⬆️ Back to Top](#table-of-contents)

---

## API Credits
Thanks to [NewsAPI.org](https://newsapi.org/) for providing a developer subscription with 100 requests per day.

[⬆️ Back to Top](#table-of-contents)

---

## What I Learned
- Building a modular, scalable React project structure
- Integrating real-world APIs and handling async data
- Advanced React Router usage for dynamic pages
- Responsive UI/UX with modern CSS
- Managing API keys securely with .env
- Handling API request limits and error states

[⬆️ Back to Top](#table-of-contents)

---

## More Info
- This is a personal project; contributions are not accepted.
- Explore, learn, and enjoy the news!

[⬆️ Back to Top](#table-of-contents)
