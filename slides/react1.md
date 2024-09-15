---
title       : Frontend Frameworks - React.js
marp        : true
paginate    : true
theme       : descartes
---

<!-- _class: titlepage -->

![bg left:33%](figures/banner_dummy.webp)

<div class="title">Frontend Frameworks - React.js</div>
<div class="subtitle">Modern Website Development</div>
<div class="author">R. Promkam, Dr.rer.nat.</div>
<div class="organization">Department of Mathematics and Computer Science, RMUTT</div>


---

<!-- _class: cool-list -->

# Agenda

1. *What is React.js?*
2. *Why Use React.js?*
3. *Setting Up React.js*
4. *React Components and Props*
5. *State and Lifecycle*
6. *Event Handling in React*
7. *Workshop Activities*

---

# What is React.js?

## Overview
- **React.js** is a JavaScript library for building user interfaces.
- Developed and maintained by Facebook.
- Used for building **component-based** and **declarative** UIs.

---

## Key Features
1. **Component-Based Architecture**
   - UIs are built with reusable components.
   
2. **Declarative**
   - React updates the UI based on the state changes automatically.

3. **Virtual DOM**
   - Efficiently updates the UI by updating the Virtual DOM first, then syncing it with the actual DOM.

---

# Why Use React.js?

## Benefits of React
- **Reusable Components**
  - Build self-contained UI elements that can be reused across pages or projects.
  
- **Efficient Rendering**
  - React updates only the parts of the DOM that need changes, improving performance.

- **Strong Ecosystem**
  - A large community, rich tooling (like Redux, React Router), and various libraries.

- **Cross-Platform**
  - Can be used to build not only web apps but also mobile apps (with React Native).

---

# Setting Up React.js

## 1. Create React App (Recommended)
- **Create React App** is an official way to set up a React project with zero configuration.

```bash
npx create-react-app myapp
cd myapp
npm start
```

## 2. Project Structure
- Once the project is created, you will have the following important files:
  - `src/index.js`: The entry point of the app.
  - `src/App.js`: Main React component.

---
  
## Example `App.js`

```javascript
import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>Hello, React!</h1>
    </div>
  );
}

export default App;
```

---

# React Components and Props

## What are Components?
- **Components** are the building blocks of a React application.
- Components can be **functional** or **class-based**.

## Functional Components

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

---

## Class Components

```javascript
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

## Props (Properties)
- **Props** are arguments passed into React components.
- They allow you to pass data from parent components to child components.

---

# State and Lifecycle

## What is State?
- **State** is a built-in object in React components that is used to hold and manage data.
- State is mutable (unlike props) and can be updated using `setState()`.

---

## Example: Using State in a Functional Component with Hooks

```javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Counter;
```

---

## Component Lifecycle

- Every React component has a lifecycle, which is managed in different phases:
  1. **Mounting** (When the component is first rendered)
  2. **Updating** (When the component’s state or props change)
  3. **Unmounting** (When the component is removed)

- Class-based components can use lifecycle methods like `componentDidMount()`, `componentDidUpdate()`, and `componentWillUnmount()`.

---

# Event Handling in React

## Handling Events
- Handling events in React is similar to handling events in DOM elements, but with some syntactic differences.

---

## Example: Button Click Event

```javascript
function MyButton() {
  function handleClick() {
    alert('Button clicked!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

export default MyButton;
```

---

## Differences from DOM Event Handling
1. Events are named using camelCase (`onClick` instead of `onclick`).
2. You pass a function reference, not a string.

---

# Workshop Activities

1. **Setting Up a React App**
   - Create a new React app using `create-react-app`.
   - Start building components.
   
2. **Building a Simple Component**
   - Build a simple functional component with props.
   
3. **Implementing State in Components**
   - Create a counter or toggle component using the `useState` hook.
   
4. **Event Handling in React**
   - Implement a button with a click event handler that updates the component's state.

---

# Setting Up a React App Activity

1. **Create a React App**
   - Open the terminal and run the following commands to set up a React app:

```bash
npx create-react-app myapp
cd myapp
npm start
```

---

2. **Modify `App.js`**
   - Edit the `App.js` file to display a welcome message.

```javascript
function App() {
  return (
    <div>
      <h1>Welcome to React!</h1>
    </div>
  );
}

export default App;
```

---

# Building a Simple Component Activity

1. **Create a Component**
   - Create a `Welcome.js` file in the `src` folder.

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

export default Welcome;
```

---

2. **Use the Component in `App.js`**

```javascript
import Welcome from './Welcome';

function App() {
  return (
    <div>
      <Welcome name="Alice" />
      <Welcome name="Bob" />
    </div>
  );
}

export default App;
```

---

# Implementing State in Components Activity

1. **Create a Counter Component**

```javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Counter;
```

---

2. **Add the Counter to `App.js`**

```javascript
import Counter from './Counter';

function App() {
  return (
    <div>
      <h1>React State Example</h1>
      <Counter />
    </div>
  );
}

export default App;
```

---

# Event Handling in React Activity

1. **Create a Button Component**

```javascript
function MyButton() {
  function handleClick() {
    alert('Button clicked!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

export default MyButton;
```

---

2. **Add the Button to `App.js`**

```javascript
import MyButton from './MyButton';

function App() {
  return (
    <div>
      <h1>React Event Handling</h1>
      <MyButton />
    </div>
  );
}

export default App;
```

---

# Q&A

Feel free to ask any questions you have about the content covered today.

---

# Next Week

## Topic: React.js Advanced Topics
- State Management with Context API
- React Router for Navigation
- Handling Side Effects with useEffect

See you next week!
