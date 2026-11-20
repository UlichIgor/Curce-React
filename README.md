# Curce-React

Навчальний React-проєкт та інтерактивний курс React Hooks українською мовою.

## Онлайн-курс

**[Відкрити ReactLab](https://ulichigor.github.io/Curce-React/)**

Курс містить:
- 7 навчальних модулів: правила Hooks, useState, useReducer, useEffect, useContext, useRef, useMemo, useCallback та власні хуки;
- мінітести з поясненнями;
- інтерактивну лабораторію useState;
- фінальний іспит із 10 запитань;
- збереження прогресу в локальному сховищі браузера.

## Структура репозиторію

- `course/` — вихідні файли інтерактивного курсу, який публікується на GitHub Pages;
- `src/` — вихідний код React-застосунку;
- `public/` — статичні ресурси React-застосунку;
- `.github/workflows/deploy-course.yml` — автоматична перевірка та публікація курсу;
- `docs/` — альтернативна копія курсу для режиму GitHub Pages із папки `docs`.

## Запуск React-застосунку локально

Потрібен встановлений Node.js та npm.

```bash
npm ci
npm start
```

Для production-збірки:

```bash
npm run build
```

> Поточний React-застосунок використовує Create React App. Цей інструмент офіційно застарів; для нових React-проєктів варто орієнтуватися на актуальні рекомендації React.

## Публікація курсу

GitHub Actions автоматично публікує каталог `course/` у GitHub Pages після змін у курсі або workflow. Джерело GitHub Pages має бути встановлене як **GitHub Actions**.

- [Переглянути GitHub Actions](https://github.com/UlichIgor/Curce-React/actions)
- [Налаштування GitHub Pages](https://github.com/UlichIgor/Curce-React/settings/pages)

## Корисні посилання

- [React — навчання](https://react.dev/learn)
- [React Hooks — довідник](https://react.dev/reference/react/hooks)
- [Правила React Hooks](https://react.dev/reference/rules)
- [Власні Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)

## Репозиторій

[UlichIgor/Curce-React](https://github.com/UlichIgor/Curce-React)
