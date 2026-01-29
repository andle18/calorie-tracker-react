# Calorie Tracker

## English

### Project overview

Calorie Tracker is a small React + TypeScript app to log meals and exercises, track calories, and display a daily summary. Data is stored locally in the browser.

### Features

- Add meals or exercises with calorie values
- Edit and delete items
- Calorie summary (consumed, burned, net)
- Local persistence using Local Storage

### Tech stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- ESLint

### Installation & setup

```bash
npm install
npm run dev
```

### Environment variables

This project does not require environment variables.

### Scripts

- `npm run dev` — start development server
- `npm run build` — type-check and build for production
- `npm run preview` — preview the production build
- `npm run lint` — run ESLint

### Project structure

```
src/
  components/
    ActivityList.tsx
    CalorieDisplay.tsx
    CalorieTracker.tsx
    Form.tsx
  data/
    categories.ts
  reducers/
    activity-reducer.ts
  types/
    index.ts
  App.tsx
  main.tsx
  index.css
```

### Future improvements

- Add tests for reducer and form validation
- Improve input validation and error feedback
- Replace hardcoded category IDs with enums/constants
- Move Local Storage logic to a dedicated persistence layer
- Add accessibility refinements (labels, focus states, ARIA)
- Add basic CI (lint + build)

## Live Demo
  https://calorie-traker.netlify.app/
