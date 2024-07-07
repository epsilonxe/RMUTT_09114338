---
title       : Introduction to Backend Development
marp        : true
paginate    : true
theme       : descartes
---

<!-- _class: titlepage -->

![bg left:33%](figures/cover_node.webp)

<div class="title">Introduction to Backend Development</div>
<div class="subtitle">Modern Website Development</div>
<div class="author">R. Promkam, Dr.rer.nat.</div>
<div class="organization">Department of Mathematics and Computer Science, RMUTT</div>


---

<!-- _class: cool-list -->

# Agenda

1. *Overview of Backend Technologies*
2. *Introduction to Node.js*
3. *Introduction to Express.js*
4. *RESTful API Design*
5. *Workshop Activities*

---

# Overview of Backend Technologies

## What is Backend Development?
- Backend development refers to server-side development.
- It focuses on databases, scripting, and website architecture.

---

## Key Components
- **Server**: Manages requests from the client.
- **Database**: Stores and retrieves data.
- **Application**: Processes logic and communicates between server and database.

## Common Backend Technologies
- **Languages**: JavaScript (Node.js), Python, Ruby, Java, PHP
- **Databases**: MySQL, PostgreSQL, MongoDB
- **Frameworks**: Express.js, Django, Ruby on Rails, Spring

---

![bg right:40% fit](figures/nodejs.png)

# Introduction to Node.js

## What is Node.js?
- Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- Allows running JavaScript on the server.

---

## Key Features
- **Asynchronous and Event-Driven**: Non-blocking I/O operations.
- **Single-Threaded**: Uses a single thread to handle requests.
- **NPM (Node Package Manager)**: Manages libraries and dependencies.

## Installing Node.js
- Download from [nodejs.org](https://nodejs.org/).
- Verify installation: `node -v` and `npm -v`.

---

![bg right:40% fit](figures/express-js.png)

# Introduction to Express.js

## What is Express.js?
- Express.js is a minimal and flexible Node.js web application framework.
- Provides robust features for web and mobile applications.

---

## Key Features
- **Routing**: Defines URL paths and methods.
- **Middleware**: Functions that process requests before they reach the route handler.
- **Templating**: Renders dynamic content using template engines.

## Installing Express.js

```bash
npm install express
```

---

# Setting Up a Basic Express.js Server

## Creating the Project

1. Initialize a new Node.js project.

```bash
mkdir myapp
cd myapp
npm init -y
```

2. Install Express.js.

```bash
npm install express
```

---

3. Create the server file `app.js`.

```javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
```

4. Run the server.

```bash
node app.js
```

---

# RESTful API Design

## What is a RESTful API?
- REST (Representational State Transfer) is an architectural style for designing networked applications.
- RESTful APIs use HTTP requests to perform CRUD operations.

---

## Key Principles
- **Stateless**: Each request from client to server must contain all necessary information.
- **Client-Server**: Separation of client and server concerns.
- **Uniform Interface**: Consistent and standard way of interacting with resources.

## HTTP Methods
- **GET**: Retrieve data
- **POST**: Create new data
- **PUT**: Update existing data
- **DELETE**: Delete data

---

# Creating a RESTful API with Express.js

```javascript
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' }
];

app.get('/items', (req, res) => {
    res.json(items);
});

app.post('/items', (req, res) => {
    const newItem = { id: items.length + 1, name: req.body.name };
    items.push(newItem);
    res.status(201).json(newItem);
});

app.put('/items/:id', (req, res) => {
    const item = items.find(i => i.id == req.params.id);
    if (item) {
        item.name = req.body.name;
        res.json(item);
    } else {
        res.status(404).send('Item not found');
    }
});

app.delete('/items/:id', (req, res) => {
    items = items.filter(i => i.id != req.params.id);
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
```

---

# Workshop Activities

1. **Setting Up Node.js and Express.js**
   - Install Node.js and Express.js.
   - Create a basic Express.js server.
2. **Building a RESTful API**
   - Define routes for CRUD operations.
   - Implement the API endpoints.
3. **Testing the API with Postman or Curl**
   - Perform CRUD operations using Postman or Curl.

---

# Setting Up Node.js and Express.js Activity

1. Initialize a new Node.js project.

```bash
mkdir myapp
cd myapp
npm init -y
```

2. Install Express.js.

```bash
npm install express
```

---

3. Create the server file `app.js`.

```javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
```

4. Run the server.

```bash
node app.js
```

---

# Building a RESTful API Activity

1. Update `app.js` to include routes for CRUD operations.

```javascript
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' }
];

app.get('/items', (req, res) => {
    res.json(items);
});

app.post('/items', (req, res) => {
    const newItem = { id: items.length + 1, name: req.body.name };
    items.push(newItem);
    res.status(201).json(newItem);
});

app.put('/items/:id', (req, res) => {
    const item = items.find(i => i.id == req.params.id);
    if (item) {
        item.name = req.body.name;
        res.json(item);
    } else {
        res.status(404).send('Item not found');
    }
});

app.delete('/items/:id', (req, res) => {
    items = items.filter(i => i.id != req.params.id);
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
```
---

2. Test the API using a tool like Postman or Curl.

---

# Testing the API with Postman

## Installing Postman
- Download and install Postman from [getpostman.com](https://www.getpostman.com/).

---

## Testing Endpoints

1. **GET /items**
   - Open Postman and create a new request.
   - Set the method to GET and the URL to `http://localhost:3000/items`.
   - Click "Send" to see the list of items.

2. **POST /items**
   - Change the method to POST.
   - Set the URL to `http://localhost:3000/items`.
   - Go to the "Body" tab and select "raw" and "JSON".
   - Enter the JSON data: `{ "name": "New Item" }`.
   - Click "Send" to add the new item.

---

## Testing Endpoints

3. **PUT /items/:id**
   - Change the method to PUT.
   - Set the URL to `http://localhost:3000/items/1`.
   - Go to the "Body" tab and select "raw" and "JSON".
   - Enter the JSON data: `{ "name": "Updated Item" }`.
   - Click "Send" to update the item.

4. **DELETE /items/:id**
   - Change the method to DELETE.
   - Set the URL to `http://localhost:3000/items/1`.
   - Click "Send" to delete the item.

---

# Testing the API with Curl

## Installing Curl
- Curl is typically pre-installed on MacOS and Linux.
- For Windows, download from [curl.haxx.se](https://curl.haxx.se/).

---

## Testing Endpoints

1. **GET /items**

```bash
curl -X GET http://localhost:3000/items
```

2. **POST /items**

```bash
curl -X POST http://localhost:3000/items -H "Content-Type: application/json" -d '{"name": "New Item"}'
```

---

## Testing Endpoints

3. **PUT /items/:id**

```bash
curl -X PUT http://localhost:3000/items/1 -H "Content-Type: application/json" -d '{"name": "Updated Item"}'
```

4. **DELETE /items/:id**

```bash
curl -X DELETE http://localhost:3000/items/1
```

---

# Q&A

Feel free to ask any questions you have about the content covered today.

---

# Supplement Learning Resoures

<div class="columns">
<div>

<iframe width="90%" height="100%" src="https://www.youtube.com/embed/fBNz5xF-Kx4?si=hOBrXDLpTN2AjgL1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
<div>

## Node.js Crash Course

By Traversy Media.

Explore Node.js fundamentals including modules such as path, url, fs, events and we will create an HTTP server from scratch without Express and deploy to Heroku.
</div>
</div>

---

# Next Week

## Topic: Database Integration
- Introduction to Databases (SQL vs NoSQL)
- Working with MongoDB

