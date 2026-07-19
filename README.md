# Travel Agency Frontend Prototype

A responsive React frontend prototype for a travel agency startup. It uses React Router for navigation, a reusable component-based architecture, CSS Modules for consistent styling, and controlled forms with JavaScript-based validation.

## Features

- Responsive and mobile-friendly UI
- Reusable React components
- Client-side routing using React Router
- Controlled contact form with validation
- Modular styling with CSS Modules
- Data-driven content using JavaScript


## Routes

- `/` — Home landing page
- `/packages` — Tour package listings, plans, testimonials, FAQ accordion
- `/contact` — Trip enquiry form with controlled inputs and validation
- `/about` — Agency mission, team guide cards, and story timeline

## Tech Stack

- React with functional components and hooks
- React Router DOM
- CSS Modules
- Git and GitHub-ready project structure

## Features

- Responsive and mobile-friendly UI
- Reusable React components
- Client-side routing using React Router
- Controlled contact form with validation
- Modular styling with CSS Modules
- Data-driven content using JavaScript 

## Folder Structure

```bash
src/
├── components/
├── data/
├── pages/
└── styles/
```

## Setup

```bash
npm install
npm start
```

## Build

```bash
npm run build
```

## Notes

- Dynamic cards and content are driven by arrays in `src/data/siteData.js`.
- Form validation is handled with component state and conditional error rendering.
- State stays local because the current prototype does not require cross-page shared state; Context API is not warranted yet.

## Suggested Commit Flow

1. `chore: initialize react travel agency prototype`
2. `feat: add shared layout and navigation`
3. `feat: build home and packages pages`
4. `feat: add enquiry form validation`
5. `feat: complete about page and documentation`
