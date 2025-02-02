# Order Overview Kanban

## Local Development Setup

To run locally:

```shell
npm i & npm run dev
```

> [!IMPORTANT]
> Refresh the page after running the app for the first time to get tailwind styles working. Subsequent re-runs of the dev server won't have this issue. It happens only when you do a fresh install of dependencies.

## Overview

As stated in the coding challenge docs. I've focused on clean code rather than implementing all functionalities. The following requirements were not met:

- There is no sidebar
- The Task Detail dialog has no UI for viewing files
- Clicking outside the dialog doesn't close the dialog
- The data is not loaded from an API
- Not all component are broken down into re-usable components

### Folder Structure

```
src/
├── design-system/ # Collection of generic components
│   ├── Dialog.tsx
├── <kanban>/ # A page level feature
│   ├── index.tsx
│   ├── types.ts
│   ├── store.ts
│   ├── hooks/ # Hooks that smart components use to get slices of the store
│   ├── board/ # Independent feature in a page
│       ├── components # Collection of ui related components
│       ├── SmartComponent.tsx
package.json
README.md
```
