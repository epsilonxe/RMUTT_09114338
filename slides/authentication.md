---
title       : Authentication and Authorization
marp        : true
paginate    : true
theme       : descartes
---

<!-- _class: titlepage -->

![bg left:33%](figures/banner_dummy.webp)

<div class="title">Authentication and Authorization</div>
<div class="subtitle">Modern Website Development</div>
<div class="author">R. Promkam, Dr.rer.nat.</div>
<div class="organization">Department of Mathematics and Computer Science, RMUTT</div>


---

<!-- _class: cool-list -->

# Agenda

1. *What is Authentication and Authorization?*
2. *User Authentication Basics*
3. *Introduction to JWT (JSON Web Tokens)*
4. *Implementing Authentication with JWT in Node.js*
5. *Role-Based Access Control (RBAC)*
6. *Workshop Activities*

---

# What is Authentication and Authorization?

## Authentication
- **Authentication** is the process of verifying the identity of a user.
- Typically involves **login** credentials such as:
  - Username or Email
  - Password

## Authorization
- **Authorization** is the process of determining what an authenticated user can do.
- Based on permissions, roles, or access levels (e.g., admin, user).


---

# User Authentication Basics

## Common Authentication Methods
1. **Password-based Authentication**
   - User provides a username/email and a password.
   - Server verifies these credentials against stored data.
   
2. **Token-based Authentication (JWT)**
   - User logs in with credentials and receives a **token**.
   - This token is used for all future API requests, allowing the user to remain authenticated.

---

## Steps in User Authentication
1. User enters credentials (e.g., username and password).
2. Server verifies credentials and generates a **token** (if valid).
3. Token is sent to the client, stored (typically in localStorage or cookies).
4. Client sends the token with each subsequent request.

---

# Introduction to JWT (JSON Web Tokens)

## What is JWT?
- A **JSON Web Token (JWT)** is a compact, URL-safe means of representing claims to be transferred between two parties.
- JWT is commonly used to **securely transmit information** for authentication and authorization.

---

## Structure of a JWT
- **Header**: Contains metadata such as the algorithm used to generate the token.
- **Payload**: Contains the claims or data (e.g., user information).
- **Signature**: Verifies that the token hasn’t been tampered with.

---

## Example JWT

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
eyJ1c2VySWQiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.
SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

---

# How JWT Works

1. **User Login**
   - User provides login credentials.
   - Server verifies credentials and creates a JWT that contains user information (e.g., user ID).
   
2. **Token Sent to Client**
   - The JWT is sent to the client and stored (e.g., in localStorage or cookies).

3. **Subsequent Requests**
   - Client includes the JWT in the header of each request for secure routes.
   
4. **Token Verification**
   - Server verifies the JWT and grants access to the requested resource if the token is valid.

---

# Implementing Authentication with JWT in Node.js

## Step 1: Setting Up the Project

1. Initialize a new Node.js project and install necessary packages.

```bash
mkdir authApp
cd authApp
npm init -y
npm install express bcryptjs jsonwebtoken body-parser
```

2. Create a `server.js` file.

---

## Step 2: User Registration

```javascript
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.json());

const users = []; // In-memory user storage for this demo

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username, password: hashedPassword });
    res.json({ message: "User registered successfully!" });
});

app.listen(3000, () => console.log('Server started on port 3000'));
```

---

## Step 3: User Login

```javascript
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ username: user.username }, 'your_jwt_secret', { expiresIn: '1h' });
    res.json({ token });
});
```

---

## Step 4: Securing Routes

```javascript
function authenticateToken(req, res, next) {
    const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, 'your_jwt_secret', (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

app.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: "Welcome to the protected route!", user: req.user });
});
```

---

# Role-Based Access Control (RBAC)

## What is RBAC?
- **Role-Based Access Control (RBAC)** allows you to assign different permissions to users based on their roles (e.g., admin, user).
- Limits what users can do or see in the system.

## Example Use Case
- **Admin**: Can view and modify all user data.
- **User**: Can only view their own data.

---

## Example Implementation

```javascript
const roles = {
    admin: ['getUsers', 'deleteUser'],
    user: ['getProfile']
};

function authorizeRole(role) {
    return (req, res, next) => {
        if (!roles[role].includes(req.user.role)) {
            return res.status(403).json({ message: "Access forbidden" });
        }
        next();
    };
}

app.get('/admin', authenticateToken, authorizeRole('admin'), (req, res) => {
    res.json({ message: "Welcome Admin!" });
});
```

---

# Workshop Activities

1. **Setting Up JWT Authentication**
   - Build a Node.js app with registration and login functionality using JWT.
   
2. **Securing Routes**
   - Create protected routes that require JWT authentication.
   
3. **Implement Role-Based Access Control**
   - Implement RBAC where different users have different access levels (e.g., admin, user).

---

# Setting Up JWT Authentication Activity

1. Initialize a Node.js project and install required packages.

```bash
npm init -y
npm install express bcryptjs jsonwebtoken body-parser
```

---

2. Create `server.js` and implement registration and login routes using bcrypt and JWT.

```javascript
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.json());

const users = [];

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username, password: hashedPassword });
    res.json({ message: "User registered successfully!" });
});

app.listen(3000, () => console.log('Server started on port 3000'));
```

---

# Securing Routes Activity

1. Add login route and protect sensitive routes using JWT tokens.

```javascript
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ username: user.username }, 'your_jwt_secret', { expiresIn: '1h' });
    res.json({ token });
});
```

---

# Implementing RBAC Activity

1. Add roles to users and authorize access based on roles.

```javascript
const roles = {
    admin: ['getUsers', 'deleteUser'],
    user: ['getProfile']
};

function authorizeRole(role) {
    return (req, res, next) => {
        if (!roles[role].includes(req.user.role)) {
            return res.status(403).json({ message: "Access forbidden" });
        }
        next();
    };
}

app.get('/admin', authenticateToken, authorizeRole('admin'), (req, res) => {
    res.json({ message: "Welcome Admin!" });
});
```

---

# Q&A

Feel free to ask any questions you have about the content covered today.

---

# Next Week

## Topic: Frontend Frameworks - React.js
- Introduction to React.js
- Components and Props
- State Management

See you next week!
