---
title       : Bootstrap Framework
marp        : true
paginate    : true
theme       : descartes
---

<!-- _class: titlepage -->

![bg left:33%](figures/cover_git.webp)

<div class="title">Bootstrap Framework</div>
<div class="subtitle">Modern Website Development</div>
<div class="author">R. Promkam, Dr. rer. nat.</div>
<div class="organization">Department of Mathematics and Computer Science, RMUTT</div>


---

<!-- _class: cool-list -->

# Agenda

1. *What is Bootstrap?*
2. *Setting Up Bootstrap*
3. *Bootstrap Grid System*
4. *Common Bootstrap Components*
5. *Customizing Bootstrap*
6. *Workshop Activities*

---

# What is Bootstrap?

## Overview
- **Bootstrap** is a free, open-source CSS framework directed at responsive, mobile-first front-end web development.
- It contains HTML, CSS, and JavaScript-based design templates for:
  - **Typography**
  - **Forms**
  - **Buttons**
  - **Navigation**
  - **Other interface components**

---

## Why Use Bootstrap?
- Makes it easier to build responsive and mobile-first websites.
- Speeds up development with ready-to-use components.
- Compatible with all modern browsers.

---

# Setting Up Bootstrap

## 1. Bootstrap via CDN (Content Delivery Network)
- Add the following links to your HTML file's `<head>` section to include Bootstrap via a CDN.

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
```

```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
```

---

## 2. Local Installation (Optional)
- **Download Bootstrap** from [getbootstrap.com](https://getbootstrap.com) and include the CSS and JavaScript files in your project.

## Example HTML Setup

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Example</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <h1 class="text-center">Hello, Bootstrap!</h1>
</body>
</html>
```

---

# Bootstrap Grid System

## What is the Bootstrap Grid System?
- The grid system is the heart of Bootstrap's layout design.
- It uses a **12-column system** that is responsive, allowing content to adapt to different screen sizes.
- Breakpoints: `xs`, `sm`, `md`, `lg`, and `xl` (extra-small, small, medium, large, extra-large).

---

## Basic Grid Example

```html
<div class="container">
  <div class="row">
    <div class="col-md-6">Column 1</div>
    <div class="col-md-6">Column 2</div>
  </div>
</div>
```

---

## Responsive Layout Example

```html
<div class="container">
  <div class="row">
    <div class="col-md-4">Column 1</div>
    <div class="col-md-4">Column 2</div>
    <div class="col-md-4">Column 3</div>
  </div>
</div>
```

---

# Common Bootstrap Components

## Buttons

- Bootstrap provides several predefined button styles.
  
```html
<button class="btn btn-primary">Primary Button</button>
<button class="btn btn-secondary">Secondary Button</button>
```

---

## Navbar

- A responsive navigation bar.

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
    </ul>
  </div>
</nav>
```

---

## Cards

- A flexible content container with options for headers, footers, and images.

```html
<div class="card" style="width: 18rem;">
  <img src="image.jpg" class="card-img-top" alt="Image">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
```

---

# Forms and Input

## Form Structure Example

```html
<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

---

## Input Groups

- Combining inputs with buttons or text.

```html
<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Username">
  <div class="input-group-append">
    <button class="btn btn-outline-secondary" type="button">Button</button>
  </div>
</div>
```

---

# Customizing Bootstrap

## Overriding Bootstrap Styles
- You can override Bootstrap styles by adding your own CSS after the Bootstrap CSS file.

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
<link rel="stylesheet" href="custom.css">
```

- Example of custom CSS that overrides Bootstrap styles.

```css
.btn-primary {
    background-color: #ff6347; /* Changing primary button color */
}
```

---

## Using Bootstrap Themes
- You can use free and premium Bootstrap themes from sites like [BootstrapMade](https://bootstrapmade.com/).

## Customizing with SASS
- Bootstrap can also be customized using SASS (CSS preprocessor), which allows you to modify variables like colors, font sizes, etc.

---

# Workshop Activities

1. **Building a Responsive Web Page with Bootstrap**
   - Use Bootstrap's grid system to create a responsive layout.
2. **Using Bootstrap Components**
   - Add Bootstrap components like buttons, navbars, and cards to a webpage.
3. **Customizing Bootstrap**
   - Override Bootstrap’s default styles with custom CSS.
4. **Building a Contact Form**
   - Use Bootstrap to build a responsive contact form.

---

# Building a Responsive Web Page

1. Create a new HTML file and include Bootstrap via CDN.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Web Page</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col-md-4">Column 1</div>
            <div class="col-md-4">Column 2</div>
            <div class="col-md-4">Column 3</div>
        </div>
    </div>
</body>
</html>
```

2. Add some components like buttons and cards to your page.

---

# Building a Contact Form

1. Create an HTML form using Bootstrap's form structure.

```html
<form>
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" class="form-control" id="name" placeholder="Enter your name">
  </div>
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" class="form-control" id="email" placeholder="Enter your email">
  </div>
  <div class="form-group">
    <label for="message">Message</label>
    <textarea class="form-control" id="message" rows="4"></textarea>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

---

# Customizing Bootstrap Activity

1. Download or link to Bootstrap.
2. Create a custom CSS file to override Bootstrap's styles.

```css
body {
    background-color: #f0f0f0;
}

.btn-primary {
    background-color: #ff6347; /* Custom color */
}
```

3. Add the custom styles to your project and observe the changes.

---

# Q&A

Feel free to ask any questions you have about the content covered today.

---

# Next Lesson

## Topic: Authentication and Authorization
- User Authentication Concepts
- JWT (JSON Web Tokens)
- Role-Based Access Control

See you next week!
