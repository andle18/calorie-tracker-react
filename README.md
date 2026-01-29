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

---

## Español

### Descripción del proyecto

Calorie Tracker es una app pequeña en React + TypeScript para registrar comidas y ejercicios, calcular calorías y mostrar un resumen diario. Los datos se guardan localmente en el navegador.

### Funcionalidades

- Agregar comidas o ejercicios con sus calorías
- Editar y eliminar registros
- Resumen de calorías (consumidas, quemadas, netas)
- Persistencia local con Local Storage

### Tech stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- ESLint

### Instalación y configuración

```bash
npm install
npm run dev
```

### Variables de entorno

Este proyecto no requiere variables de entorno.

### Scripts

- `npm run dev` — inicia el servidor de desarrollo
- `npm run build` — type-check y build de producción
- `npm run preview` — previsualiza el build
- `npm run lint` — ejecuta ESLint

### Estructura del proyecto

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

### Futuras mejoras

- Agregar tests para el reducer y la validación del formulario
- Mejorar validaciones y mensajes de error
- Reemplazar IDs hardcodeados por enums/constantes
- Mover la lógica de Local Storage a una capa de persistencia
- Mejoras de accesibilidad (labels, focus, ARIA)
- Añadir CI básico (lint + build)
