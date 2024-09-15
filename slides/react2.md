---
title       : React.js Advanced Topics
marp        : true
paginate    : true
theme       : descartes
---

<!-- _class: titlepage -->

![bg left:33%](figures/banner_dummy.webp)

<div class="title">React.js Advanced Topics</div>
<div class="subtitle">Modern Website Development</div>
<div class="author">R. Promkam, Dr.rer.nat.</div>
<div class="organization">Department of Mathematics and Computer Science, RMUTT</div>


---

<!-- _class: cool-list -->

# Agenda

1. *State Management in React*
2. *Introduction to React Context API*
3. *React Router for Navigation*
4. *Handling Side Effects with `useEffect`*
5. *Workshop Activities*

---

# State Management in React

## What is State Management?
- In React, **state** refers to the data that changes over time within a component.
- Managing state becomes more complex as applications grow larger, especially when state needs to be shared between multiple components.

---

## Basic State Management

### Using `useState` Hook
- Manages state locally within a component.

```javascript
const [count, setCount] = useState(0);
```

### Passing State as Props
- You can share state between components by passing it as **props**.

---

# Introduction to React Context API

## What is the Context API?
- **Context API** is a way to pass data (state) deeply through a component tree without passing props down manually at every level.

## When to Use Context API
- Useful for **global state management**, such as:
  - User authentication status
  - Theme settings (dark/light mode)
  - Language preferences

---

## Creating Context

1. **Create a Context**:
```javascript
const MyContext = React.createContext();
```

2. **Provide the Context**:
```javascript
<MyContext.Provider value={/* some value */}>
  {children}
</MyContext.Provider>
```

3. **Consume the Context**:
```javascript
const value = useContext(MyContext);
```

---

# Example: Context API

## Step 1: Create the Context and Provider

```javascript
import React, { createContext, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
```

---

## Step 2: Using the Context in a Component

```javascript
import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      style={{
        background: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
      }}
      onClick={toggleTheme}
    >
      Toggle Theme
    </button>
  );
}

export default ThemedButton;
```

---

# React Router for Navigation

## What is React Router?
- **React Router** is a standard library for routing in React applications.
- It enables your app to navigate between different components (pages) without reloading the page.

## Installing React Router

```bash
npm install react-router-dom
```

---

## Basic Routing Example

1. Import necessary components from React Router.

```javascript
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
```

---

2. Define Routes in `App.js`.

```javascript
function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}
```

---

# Handling Side Effects with `useEffect`

## What is a Side Effect?
- **Side effects** refer to anything that affects something outside the scope of the current function (e.g., fetching data, subscribing to an event).

## The `useEffect` Hook
- The **`useEffect` hook** lets you perform side effects in functional components.

---

### Basic Example of `useEffect`

```javascript
import React, { useState, useEffect } from 'react';

function DataFetchingComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetching data when the component mounts
    fetch('https://api.example.com/data')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []); // Empty array means it runs only once on component mount

  return (
    <div>
      <h1>Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default DataFetchingComponent;
```

---

# useEffect Cleanup Function

## Why Cleanup?
- Some effects, like setting up a subscription or a timer, require **cleanup** to avoid memory leaks.

---

## Example: Cleanup with `useEffect`

```javascript
useEffect(() => {
  const timer = setInterval(() => {
    console.log('Timer running');
  }, 1000);

  // Cleanup when the component unmounts
  return () => {
    clearInterval(timer);
  };
}, []);
```

---

# Workshop Activities

1. **Implementing Global State with Context API**
   - Create a global theme state and toggle functionality using the Context API.
   
2. **Building Navigation with React Router**
   - Add navigation to your React app using `react-router-dom`.
   
3. **Fetching Data with `useEffect`**
   - Implement data fetching in a React component and handle loading states.
   
4. **Effect Cleanup with `useEffect`**
   - Create an effect that sets a timer and cleans it up when the component unmounts.

---

# Implementing Global State with Context API Activity

1. **Create a Theme Context**
   - Define a context to manage the theme (light/dark) and a function to toggle it.

```javascript
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
```

---

2. **Consume the Context in Components**
   - Create a button that toggles the theme using the context.

```javascript
function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      style={{
        background: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
      }}
      onClick={toggleTheme}
    >
      Toggle Theme
    </button>
  );
}
```

---

# Building Navigation with React Router Activity

1. **Install React Router**
   - Install `react-router-dom`:

```bash
npm install react-router-dom
```

---

2. **Add Routes to `App.js`**

```javascript
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}
```

---

# Fetching Data with `useEffect` Activity

1. **Create a Component to Fetch Data**

```javascript
import React, { useState, useEffect } from 'react';

function DataFetchingComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h1>Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default DataFetchingComponent;
```

---

# Q&A

Feel free to ask any questions you have about the content covered today.

---

# Next Week

## Topic: Building a Full-Stack Application
- Connecting Frontend and Backend
- Building RESTful APIs with Express
- Fetching Data from the Backend in React

See you next week!

