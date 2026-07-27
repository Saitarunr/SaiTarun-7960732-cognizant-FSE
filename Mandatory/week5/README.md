# React Labs — Week 5 Hands-On Exercises

This single project contains **all 10 hands-on labs** as separate, switchable views:

| # | Lab | Topic |
|---|-----|-------|
| 1 | myfirstreact | Basic setup, heading |
| 2 | StudentApp | Class components (Home/About/Contact) |
| 3 | scorecalculatorapp | Function component + props + CSS |
| 4 | blogapp | Lifecycle hooks (componentDidMount, componentDidCatch) + fetch API |
| 5 | Cohort Styling | CSS Modules |
| 6 | cricketapp | ES6: map, filter, arrow functions, destructuring, spread/merge |
| 7 | officespacerentalapp | JSX, attributes, JS expressions, inline CSS |
| 8 | eventexamplesapp | Event handling, `this`, SyntheticEvent |
| 9 | ticketbookingapp | Conditional rendering (Guest vs User) |
| 10 | bloggerapp | 5 different conditional rendering techniques |

Each lab lives in its own folder under `src/labs/`. The sidebar in the running
app lets you switch between all 10 labs without restarting anything.

## How to run this in VS Code

1. **Unzip** this project anywhere on your computer.
2. Open the `reactlabs` folder in **VS Code** (`File > Open Folder`).
3. Open a terminal in VS Code (Ctrl+backtick or `Terminal > New Terminal`).
4. Install dependencies:
   ```
   npm install
   ```
5. Start the app:
   ```
   npm start
   ```
6. Your browser will open automatically at `http://localhost:3000`
   (if not, open it manually).
7. Use the left sidebar to switch between Lab 1 through Lab 10.

## Requirements
- Node.js (v16+) and npm — https://nodejs.org/en/download/
- VS Code — https://code.visualstudio.com/

## Notes
- Lab 4 (blogapp) fetches live data from https://jsonplaceholder.typicode.com/posts,
  so you'll need an internet connection for that view to load posts.
- Every lab's source code has inline comments explaining which objective it
  demonstrates, so you can read src/labs/<LabName>/... directly to study
  each concept independently.
