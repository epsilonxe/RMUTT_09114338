---
title       : Modern Website Development
marp        : true
paginate    : true
theme       : descartes
---

<!-- _class: titlepage -->

![bg left:33%](figures/cover_w02.webp)

<div class="title">HTML Fundamentals</div>
<div class="subtitle">Modern Website Development (Week 2)</div>
<div class="author">R. Promkam and W.Kuangsatung</div>
<div class="organization">Department of Mathematics and Computer Science, RMUTT</div>


---

<!-- _class: cool-list -->

# Agenda

1. *HTML Elements and Attributes*
2. *Semantic HTML*
3. *Forms and Input Types*
5. *HTML5 Features*
7. *Workshop Activities*

---

# HTML Elements and Attributes

## HTML Elements
- Basic building blocks of HTML.
- Represented by tags, e.g., `<div>`, `<p>`, `<h1>`, etc.
- Examples: 
	- `<h1>My Topic</h1>`
	- `<p>This is a single paragraph. It may contain several sentences.</p>`

## HTML Attributes
- Provide additional information about elements.
- Placed within the opening tag, e.g., `<img src="image.jpg" alt="Description">`.

---

# Common HTML Elements

## Headings
- `<h1>` to `<h6>` for different levels of headings.

## Paragraph
- `<p>` for paragraphs.

## Links
- `<a href="url">Link text</a>` for hyperlinks.

---

# Common HTML Elements

## Images
- An image: `<img src="image.jpg" alt="Description">`

## Lists

<div class="columns">
<div>
Ordered

```html
<ol>
	<li>Item 1</li>
	<li>Item 2</li>
</ol>
```

</div>
<div>
Unordered

```html
<ul>
	<li>Item 1</li>
	<li>Item 2</li>
</ul>
```
	
</div>	
</div>

---

# HTML Elements Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Example</title>
</head>
<body>
    <h1>Welcome to HTML</h1>
    <p>This is a paragraph of text.</p>
    <a href="https://example.com">Visit Example</a>
    <img src="image.jpg" alt="Example Image">
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>
</body>
</html>
```

---

# Semantic HTML

<div class="columns">
<div>

## What is Semantic HTML?

- HTML5 introduced semantic elements that clearly describe their meaning in a human- and machine-readable way.
- Examples:
	`<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`

</div>
<div>

## Benefits of Semantic HTML

- Improved accessibility.
- Better search engine optimization (SEO).
- Easier to understand and maintain.

</div>
</div>

---

# Semantic HTML Example

```html
...
<body>
    <header>
        <h1>My Website</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    ...
</body>
```

---

# Semantic HTML Example

```html
...
<body>
    ...
    <main>
        <article>
            <h2>Welcome</h2>
            <p>This is a welcome message.</p>
        </article>
        <section id="about">
            <h2>About Us</h2>
            <p>Information about us.</p>
        </section>
    </main>
    <footer>
        <p>&copy; 2024 My Website</p>
    </footer>
</body>

```

---

# Forms and Input Types

<div class="columns">
<div>

## Basic Form Structure

- `<form>`: Defines a form.
- `<input>`: Input field.
- `<label>`: Labels for input fields.

## Common Input Types

- Text: `<input type="text">`
- Password: `<input type="password">`
- Email: `<input type="email">`
- Submit: `<input type="submit">`
</div>
<div>

## Other Input Types

- Radio buttons: `<input type="radio">`
- Checkboxes: `<input type="checkbox">`
- Date: `<input type="date">`
- Number: `<input type="number">`
</div>
</div>

---

# Forms Example

```html
<form action="/submit" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email">
    
    <label for="password">Password:</label>
    <input type="password" id="password" name="password">
    
    <input type="submit" value="Submit">
</form>
```
---

# Built-in Validation

- HTML5 provides built-in form validation.
- Attributes like `required`, `minlength`, `maxlength`, `pattern`, and `type` help validate input.

## Validation Example

```html
<form action="/submit" method="post">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" minlength="8" required>
    
    <input type="submit" value="Submit">
</form>
```

---

# HTML5 Features

<div class="columns">
<div>

## New Elements

- `<article>`, `<section>`, `<nav>`, `<aside>`, `<header>`, `<footer>`

## Audio and Video

- `<audio src="audio.mp3" controls></audio>`
- `<video src="video.mp4" controls></video>`
</div>
<div>

## Canvas

- `<canvas id="myCanvas"></canvas>`

## Local Storage

- `localStorage.setItem('key', 'value');`
- `localStorage.getItem('key');`
</div>
</div>

---

# HTML5 Features Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML5 Features</title>
</head>
<body>
    <header>
        <h1>HTML5 Features</h1>
    </header>
    <main>
        <section>
            <h2>Audio and Video</h2>
            <audio src="audio.mp3" controls></audio>
            <video src="video.mp4" controls></video>
        </section>
        <section>
            <h2>Canvas</h2>
            <canvas id="myCanvas" width="200" height="100"></canvas>
        </section>
    </main>
    <footer>
        <p>&copy; 2024 HTML5 Features</p>
    </footer>
    <script>
        var canvas = document.getElementById('myCanvas');
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = '#FF0000';
        ctx.fillRect(0, 0, 200, 100);
    </script>
</body>
</html>
```
---

<!-- _class: cool-list -->

# Best Practices
1. *Use Semantic HTML*
	- Improves accessibility and SEO.
1. *Validate User Input*
	- Ensures data integrity and security.
1. *Keep HTML Clean and Readable*
	- Use proper indentation and comments.
1. *Optimize Media*
	- Compress images and videos for faster load times.

---

<!-- _class: cool-list -->

# Workshop Activities

1. *Building a Multi-page Website*
	- Create multiple HTML files linked together.
1. *Form Creation and Validation*
	- Build a form with different input types.
	- Implement basic form validation using HTML5 attributes.

---

# Building a Multi-page Website

1. Create `index.html`, `about.html`, and `contact.html`.
1. Add a navigation menu with links to these pages.
1. Ensure all pages have a consistent structure and styling.

---

# Form Creation and Validation

1. Create a new HTML file for the form.
1. Add input fields for name, email, and password.
1. Add form validation using HTML5 attributes.

---

# Q&A

Feel free to ask any questions you have about the content covered today.

---

---

# Supplement Learning Resoures

<div class="columns">
<div>

<iframe width="90%" height="100%" src="https://www.youtube.com/embed/UB1O30fR-EE?si=lyvgGgHAOZLf4YNq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
<div>

## HTML Crash Course For Absolute Beginners

By Traversy Media.

A comprehensive introduction to HTML, covering essential concepts and practical steps to create a basic web page.
</div>
</div>

---

# Next Week

## Topic: CSS Fundamentals

- CSS Syntax and Selectors
- Box Model and Layout Techniques
- Responsive Design with Media Queries

See you next week!






