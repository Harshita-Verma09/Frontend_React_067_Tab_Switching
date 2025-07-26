# React Tab Switching App

This project is a simple tab switching interface built with **React**, **TypeScript**, and **Vite**. It demonstrates how to implement a tabbed UI with stateful switching between "Home", "Profile", and "Settings" tabs.

## Features

- Three tabs: Home, Profile, Settings
- Active tab highlighting
- Responsive and minimal design
- Built with React 19, TypeScript, and Vite

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```sh
   git clone <your-repo-url>
   cd 9_Tab_Switching
   ```

2. Install dependencies:

   ```sh
   npm install
   # or
   yarn install
   ```

### Running the App

Start the development server:

```sh
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

### Building for Production

```sh
npm run build
```

### Linting

```sh
npm run lint
```

## Project Structure

```
src/
  App.tsx
  main.tsx
  component/
    SwitchTab.tsx
    Tab.css
```

- `SwitchTab.tsx`: Main tab switching component
- `Tab.css`: Styling for the tabs

