---
title       : Building a Full-Stack Application
marp        : true
paginate    : true
theme       : descartes
---

<!-- _class: titlepage -->

![bg left:33%](figures/banner_dummy.webp)

<div class="title">Building a Full-Stack Application</div>
<div class="subtitle">Modern Website Development</div>
<div class="author">R. Promkam, Dr.rer.nat.</div>
<div class="organization">Department of Mathematics and Computer Science, RMUTT</div>


---

<!-- _class: cool-list -->

# Agenda

1. *What is a Full-Stack Application?*
2. *Overview of Frontend and Backend Communication*
3. *Setting Up the Backend with Node.js and Express*
4. *Building RESTful APIs*
5. *Connecting Frontend (React.js) with Backend (Express)*
6. *Workshop Activities*

---

# What is a Full-Stack Application?

## Definition
- A **Full-Stack Application** refers to a web application that includes both:
  - **Frontend** (client-side): The user interface and user experience, typically built with HTML, CSS, and JavaScript (e.g., React.js).
  - **Backend** (server-side): The logic, databases, and APIs that interact with the frontend (e.g., Node.js, Express.js).

---

## Why Build Full-Stack Applications?
- Full-stack development enables the integration of both the frontend and backend, allowing data to flow smoothly between the two.
- Full-stack developers have the ability to build and maintain both the frontend and backend systems.

---

# Overview of Frontend and Backend Communication

## How Frontend Communicates with Backend
1. **API (Application Programming Interface)**
   - Frontend makes HTTP requests to interact with backend APIs.
   - Common API format: **RESTful APIs** using HTTP methods (GET, POST, PUT, DELETE).

2. **HTTP Request/Response**
   - **Frontend** sends requests (e.g., form submission, data fetching) via **AJAX**, **fetch**, or **Axios**.
   - **Backend** processes the request, interacts with databases, and sends back a response (e.g., JSON data).

---

# Setting Up the Backend with Node.js and Express

## 1. Initialize a Node.js Project

```bash
mkdir myfullstackapp
cd myfullstackapp
npm init -y
npm install express cors mongoose
```

---

## 2. Create `server.js`

```javascript
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
```

---

# Building RESTful APIs

## What is a RESTful API?
- A **RESTful API** is an API that follows the principles of **REST** (Representational State Transfer), a standardized way to provide web services using HTTP methods.

---

## Common HTTP Methods
- **GET**: Retrieve data
- **POST**: Create new data
- **PUT**: Update existing data
- **DELETE**: Remove data

---

## Example: Building a Simple API with Express

```javascript
const express = require('express');
const app = express();
app.use(express.json());

let users = [];

app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/users', (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).json(user);
});

app.listen(5000, () => console.log('Server running on port 5000'));
```

---

# Connecting Frontend (React) with Backend (Express)

## Setting Up Frontend (React.js)
1. Create a React app:

```bash
npx create-react-app myfullstackfrontend
cd myfullstackfrontend
npm start
```

## Fetching Data from Backend
- React can fetch data from the Express backend using **fetch** or **Axios**.

---

### Example: Fetching Users from API

```javascript
import React, { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

---

## Posting Data from React to Express

### Example: Sending Data to Backend API

```javascript
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name }),
    })
      .then((response) => response.json())
      .then((newUser) => setUsers((prevUsers) => [...prevUsers, newUser]));
  };

  return (
    <div>
      <h1>Add User</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter user name"
        />
        <button type="submit">Add User</button>
      </form>

      <h2>User List</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

---

# Workshop Activities

1. **Set Up Backend with Express**
   - Create a simple Express server that handles basic CRUD operations (e.g., create, read, update, delete users).
   
2. **Set Up React Frontend**
   - Create a React app that interacts with the backend using `fetch` or Axios to retrieve and post data.

3. **Connecting React to Express API**
   - Fetch data from your Express backend in a React component.
   - Create a form in React that sends data to the backend API.

4. **Deploying Your Full-Stack Application**
   - Learn how to deploy the frontend and backend together on platforms like Heroku or Vercel.

---

# Setting Up Backend with Express Activity

1. **Create Express Server**:
   - Initialize a Node.js project and set up Express.

---
   
2. **Create CRUD Routes**:
   - Implement basic CRUD (Create, Read, Update, Delete) routes for user data.

```javascript
const express = require('express');
const app = express();
app.use(express.json());

let users = [];

app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/users', (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).json(user);
});

app.listen(5000, () => console.log('Server running on port 5000'));
```

---

# Setting Up React Frontend Activity

1. **Create React App**:
   - Create a React app using `create-react-app`.

```bash
npx create-react-app myfullstackfrontend
cd myfullstackfrontend
npm start
```

---

2. **Fetch Data from Express API**:
   - Fetch data from your Express backend in a React component using `fetch`.

```javascript
useEffect(() => {
  fetch('http://localhost:5000/users')
    .then((response) => response.json())
    .then((data) => setUsers(data));
}, []);
```

---

# Connecting React to Express API Activity

1. **Create a Form in React**:
   - Create a simple form in React to send data to the backend.

```javascript
const handleSubmit = (e) => {
  e.preventDefault();
  fetch('http://localhost:5000/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name }),
  });
};
```

---

2. **Update UI After Submission**:
   - After successfully sending data to the backend, update the frontend state to reflect the new data.

---

# Q&A

Feel free to ask any questions you have about building and connecting your full-stack application.

---

# Next Week

## Topic: Testing and Debugging
- Unit Testing in JavaScript
- Debugging Tools for Frontend and Backend
- Writing Integration Tests

See you next week!
