---
title       : Advanced JavaScript
marp        : true
paginate    : true
theme       : descartes
---

<!-- _class: titlepage -->

![bg left:33%](figures/cover_js2.webp)

<div class="title">Advanced JavaScript</div>
<div class="subtitle">Modern Website Development</div>
<div class="author">R. Promkam, Dr. rer. nat.</div>
<div class="organization">Department of Mathematics and Computer Science, RMUTT</div>


---

<!-- _class: cool-list -->

# Agenda

1. *DOM Manipulation*
2. *Advanced Functions*
3. *Asynchronous JavaScript*
4. *Workshop Activities*

---

# DOM Manipulation

![bg right:50% contain](figures/dom.png)

## What is the DOM?
- The Document Object Model (DOM) represents the structure of a web page.
- JavaScript can interact with and manipulate the DOM to change the content and structure of a web page.

---

# Selecting Elements
- **getElementById**: Selects an element by its ID.
- **getElementsByClassName**: Selects elements by their class name.
- **querySelector**: Selects the first element that matches a CSS selector.

## Examples

```javascript
// Select by ID
let title = document.getElementById('title');

// Select by class name
let items = document.getElementsByClassName('item');

// Select by CSS selector
let firstItem = document.querySelector('.item');
```

---

# Manipulating Elements

<div class="columns">
<div>
    
## Changing Content
- **innerHTML**: Changes the HTML content of an element.
- **textContent**: Changes the text content of an element.

## Changing Styles
- **style.property**: Changes the CSS style of an element.
</div>
<div>
    
## Examples

```javascript
// Change content
title.innerHTML = 'New Title';
firstItem.textContent = 'First Item';

// Change style
firstItem.style.color = 'blue';
firstItem.style.fontSize = '20px';
```
</div>
</div>

---

# Creating and Removing Elements

<div class="columns">
<div>
    
## Creating Elements
- **createElement**: Creates a new HTML element.
- **appendChild**: Adds a new child element to a parent element.

## Removing Elements
- **removeChild**: Removes a child element from a parent element.
</div> 
<div>
    
### Examples

```javascript
// Create a new element
let newItem = document.createElement('li');
newItem.textContent = 'New Item';


// Add the new element to the list
let list = document.getElementById('list');
list.appendChild(newItem);


// Remove the first item from the list
list.removeChild(firstItem);
```
</div>
</div> 

---

# Advanced Functions

<div class="columns">
<div>

## Arrow Functions
- A shorter syntax for writing functions.
- Does not have its own `this` context.

## Example

```javascript
// Regular function
function add(a, b) {
    return a + b;
}

// Arrow function
const add = (a, b) => a + b;
```
</div>
<div>
    
## Higher-Order Functions
- Functions that take other functions as arguments or return functions.

## Example

```javascript
function greet(name) {
    return function(message) {
        console.log(message + ', ' + name);
    }
}


const greetAlice = greet('Alice');
greetAlice('Hello'); // Output: Hello, Alice
```    
</div>
</div>

---

# Asynchronous JavaScript:  Callbacks

- A function passed as an argument to another function to be executed later.

## Example

```javascript
function fetchData(callback) {
    setTimeout(() => {
        callback('Data loaded');
    }, 2000);
}

fetchData(data => {
    console.log(data); // Output: Data loaded
});
```

---

# Asynchronous JavaScript: Promises
- An object representing the eventual completion or failure of an asynchronous operation.

## Example

```javascript
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Data loaded');
    }, 2000);
});

promise.then(data => {
    console.log(data); // Output: Data loaded
});
```

---

# Async/Await
- A syntactic sugar for working with Promises.
- Makes asynchronous code look and behave like synchronous code.

## Example

```javascript
async function fetchData() {
    let data = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data loaded');
        }, 2000);
    });

    console.log(data); // Output: Data loaded
}

fetchData();
```

---

# Workshop Activities

1. **DOM Manipulation**
   - Practice selecting and manipulating DOM elements.
2. **Advanced Functions**
   - Implement arrow functions and higher-order functions.
3. **Asynchronous JavaScript**
   - Work with callbacks, Promises, and async/await.

---

# DOM Manipulation Activity

1. Create an HTML file with a list of items.
2. Write JavaScript to:
   - Select the list and its items.
   - Change the content and style of the first item.
   - Add a new item to the list.
   - Remove the last item from the list.

---

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Manipulation</title>
</head>
<body>
    <h1 id="title">Item List</h1>
    <ul id="list">
        <li class="item">Item 1</li>
        <li class="item">Item 2</li>
        <li class="item">Item 3</li>
    </ul>
    <script src="script.js"></script>
</body>
</html>
```

---

```javascript
// Select elements
let title = document.getElementById('title');
let list = document.getElementById('list');
let items = document.getElementsByClassName('item');

// Change content and style
items[0].textContent = 'Updated Item 1';
items[0].style.color = 'blue';

// Add new item
let newItem = document.createElement('li');
newItem.textContent = 'New Item';
list.appendChild(newItem);

// Remove last item
list.removeChild(items[items.length - 1]);
```

---

# Advanced Functions Activity

1. Write a higher-order function that takes a function and a value as arguments.
2. The higher-order function should return a new function that calls the original function with the value.

```javascript
function multiplyBy(factor) {
    return function(number) {
        return number * factor;
    }
}

const double = multiplyBy(2);
console.log(double(5)); // Output: 10
```

---

# Asynchronous JavaScript Activity

1. Create a function that simulates fetching data with a Promise.
2. Use async/await to call the function and log the result.

```javascript
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data loaded');
        }, 2000);
    });
}

async function loadData() {
    let data = await fetchData();
    console.log(data); // Output: Data loaded
}

loadData();
```

---

# Q&A

Feel free to ask any questions you have about the content covered today.

---

# Next Week

## Topic: Version Control with Git
- Introduction to Git and GitHub
- Basic Git Commands
- Branching and Merging

See you next week!
