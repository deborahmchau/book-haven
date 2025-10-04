# Book Haven - A Book Library App
Welcome to **Book Haven**, a React-based web application that allows users to search, explore, and discover books from the [Open Library API](https://openlibrary.org/developers/api). Users can search by title, author, or keywords, view detailed information about each book, and get personalized recommedations and goodread reviews - all in a clean, responsive interface built with Tailwind CSS.

## Project Overview
**Book Haven** is built as part of my **ALX Front-End SE Capstone Project**. It demonstrates the integration of third-party APIs, responsive design with Tailwid CSS, state management, and component-based UI development usig *React*.

## Features
- Search for booksby title, author, or keywords using the Open Library API.
- Click any book to view additional details like description, publication date, ISBN, page count, and subjects.
- View recommended books similar to your books of choice.
- Link to Goodreads reviews for deeper insights about books.
- Responsive design for both mobile and desktop devices.
- Handling of empty results, invalid inputs, and network issues.

## Tech Stack
- React - Component-based UI
- Tailwind CSS - Utility-first responsive styling
- Open Library API - Book data and metadata
- Vite - Lightning-fast build tool and dev server

## Project Structure
book-haven/
│
├─ node_modules
├─ public/                # Public assets
├─ src/
│  ├─ components/         # (SearchBar, BookList, BookDetails, etc.)
│  ├─ pages/              # (Home, BookDetail, Recommendations)
│  ├─ services/           # API functions (e.g., openLibrary.js)
│  ├─ App.jsx             # Main application component
│  ├─ main.jsx            # App entry point
│  └─ index.css           # Tailwind CSS imports
│
├─ .gitignore
├─ eslit.config.js
├─ index.html
├─ LICENSE.md
├─ package.json
├─ package-lock.json
├─ postcss.config.js
├─ README.md
├─ tailwind.config.js
└─ vite.config.js

## Deployment
The app willbe deployed on **Vercel** for free hosting. (Coming soon)

## License
This project is licensed under the **MIT License**. 

## Author
**Deborah Henry Mchau**
Front-End Developer | ALX SE Cohort 6
