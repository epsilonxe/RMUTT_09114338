---
title       : Introduction to JavaScript
marp        : true
paginate    : true
theme       : descartes
style: |
    @import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css'
---

<!-- _class: titlepage -->

![bg left:33%](figures/cover_js1.webp)

<div class="title">Introduction to JavaScript</div>
<div class="subtitle">Modern Website Development</div>
<div class="author">R. Promkam, Dr. rer. nat.</div>
<div class="organization">Department of Mathematics and Computer Science, RMUTT</div>


---

<!-- _class: cool-list -->

# Agenda

1. *What is JavaScript?*
1. *JavaScript Basics*
1. *Data Types and Variables*
1. *Control Statements and Iterations (Loops)*
1. *Functions and Scope*
1. *Event Handling*
1. *Workshop Activities*

---

# What is JavaScript?

## Definition
- JavaScript is a high-level, interpreted programming language.
- It is used to create dynamic and interactive effects within web browsers.

## Key Features
- Lightweight and versatile.
- Can be used for both client-side and server-side development.
- Supports object-oriented, imperative, and functional programming styles.

---

**Create HTML structure**
   - Include a `<script>` tag for JavaScript and save it as `index.html`

```html
<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Introduction</title>
</head>
<body>
    <h1>Welcome to JavaScript</h1>
    <script src="script.js"></script>
</body>
</html>
```
**Create JavaScript File**
- Create a new file and save it as `script.js`

---

# JavaScript Basics

## Writing and Running JavaScript
- JavaScript can be written directly in an HTML file within `<script>` tags or in a separate `.js` file.

## Example

```javascript
console.log("Hello, World!");
```

- Open `index.html` in a web browser.
- Open the browser's developer tools (F12 or right-click > Inspect).
- Go to the "Console" tab to see the output.

---

# Data Types

<div class='columns'>
<div>

## Primitive Types
- **String**: Text, e.g., `"Hello"`
- **Number**: Numeric values, e.g., `42`
- **Boolean**: `true` or `false`
- **Null**: Represents "no value"
- **Undefined**: Variable declared but not assigned a value
</div>
<div>
    
## Non-primative Types

- **Array**: Ordered list of values
- **Fucntion**: Block of code designed to perform a task
- **Object**: Complex data structure
</div>
</div>


---

# Variables
- Used to store data values.
- Declared using `var`, `let`, or `const`.

## Examples

```javascript
let name = "Alice"; // String
const age = 30; // Number
var isStudent = true; // Boolean
let person = { firstName: "John", lastName: "Doe" }; // Object
let numbers = [1, 2, 3, 4, 5]; // Array
```

---

# Comparison of Declation Types

| Declaration Type |    Scope  | Declaration | Update  value  |   Re-declare |
|------------------|:-----------:|:-------------|:---------------:|:-----------:|
| `var` | global/function |  Without initialize |  <i class="fa-regular fa-check"></i> |  <i class="fa-regular fa-check"></i> |
| `const` |  block  | Need initialize| <i class="fa-regular fa-xmark"></i> | <i class="fa-regular fa-xmark"></i>|
| `let` | block |  Without initialize | <i class="fa-regular fa-check"></i>| <i class="fa-regular fa-xmark"></i>|

---


## Declared using `var`
- Function-scoped.
- Can be redeclared and updated.
- Hoisted to the top of their scope and initialized with `undefined`.

### Example

```javascript
var greeting = "Hello";
console.log(greeting); // Output: Hello

var greeting = "Hi";
console.log(greeting); // Output: Hi
```

---

## Declared using `let`
- Block-scoped.
- Cannot be redeclared in the same scope but can be updated.
- Hoisted to the top of their scope but not initialized.

<div class="columns">
<div>

### Example 1
    
```javascript
let greeting = "Hello";
console.log(greeting); // Output: Hello

greeting = "Hi";
console.log(greeting); // Output: Hi

let greeting = "Hey"; // Error
```
</div>    
<div>

### Example 2
    
```javascript
let y = 1;
if (true) {
    let y = 2; // Different variable
    console.log(y); // Output: 2
}
console.log(y); // Output: 1
```
</div>   
</div>



---

## Declared using `const`
- Block-scoped.
- Cannot be redeclared or updated.
- Must be initialized at the time of declaration.


<div class="columns">
<div>

### Example 1
    
```javascript
const greeting = "Hello";
console.log(greeting); // Output: Hello

greeting = "Hi"; // Error

const greeting = "Hey"; // Error
```
</div>
<div>
  
### Example 2

```javascript
const z = 1;
if (true) {
    const z = 2; // Different variable
    console.log(z); // Output: 2
}
console.log(z); // Output: 1
```  
</div>
</div>


---

## Variable Hoisting

### `var` Hoisting

```javascript
console.log(a); // Output: undefined
var a = 3;
console.log(a); // Output: 3
```

### `let` and `const` Hoisting

```javascript
console.log(b); // Output: ReferenceError: Cannot access 'b' before initialization
let b = 3;
console.log(b); // Output: 3

console.log(c); // Output: ReferenceError: Cannot access 'c' before initialization
const c = 3;
console.log(c); // Output: 3
```
---



<div class="columns">
<div>

# Control Structures
## `if...else` Statements

- Used to execute code based on a condition.
</div>
<div>
    
## Example

```javascript
let age = 20;

if (age < 18) {
    console.log("You are a minor.");
} else if (age < 65) {
    console.log("You are an adult.");
} else {
    console.log("You are a senior.");
}
```
</div>
</div>

---

<div class="columns">
<div>

# Control Structures
## `switch` Statements

- Used to perform different actions based on different conditions.
</div>
<div>
    
### Example

```javascript
let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    default:
        dayName = "Invalid day";
}

console.log(dayName); // Output: Wednesday
```
</div>
</div>


---

# Arrays

## What is an Array?

- An array is a special variable that can hold more than one value at a time.
- Arrays are used to store multiple values in a single variable.

---

## Creating Arrays

```javascript
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]
```

## Accessing Array Elements

```javascript
let firstFruit = fruits[0];
console.log(firstFruit); // Output: "Apple"
```

## Modifying Arrays

```javascript
fruits[1] = "Blueberry";
console.log(fruits); // Output: ["Apple", "Blueberry", "Cherry"]
```

---

# Iterations (Loops)

<div class="columns">
<div>

## While Loops

```javascript
let i = 0;
while (i < fruits.length) {
    console.log(fruits[i]);
    i++;
}
```

```javascript
let i = 0;
do {
    console.log("Iteration " + i);
    i++;
} while (i < 5);
```
</div>
<div>

## For Loops

```javascript
for (let i = 0; i < fruits.length; i++) {

    console.log(fruits[i]);

}
```

``` javascript
for (let fruit of fruits) {

    console.log(fruit);

}
````
</div>
</div>

---

# Functions
- Block of code designed to perform a task.
- Defined using the `function` keyword.

## Examples

<div class='columns'>
<div>

```javascript
function greet(name) {
    words = 'Hello ' + name + '!'
    console.log(words);
}

greet('Alice'); // Hello Alice!
```
</div>
<div>
    
```javascript
function cal(x, y) {
    z = (x+y)*y/2;
    return z;
}

console.log(cal(1, 100)); // 5050
``` 
</div>   
</div>


---

# Scope
- **Global Scope**: Variables accessible anywhere in the code.
- **Local Scope**: Variables accessible only within a function.

## Example

```javascript
let globalVar = "I am global";

function testScope() {
    let localVar = "I am local";
    console.log(globalVar);
    console.log(localVar);
}

testScope(); //I am global /n I am local
console.log(localVar); // Error: localVar is not defined
```

---

# Objects

In real life, **objects** are things like: houses, cars, people, animals, or any other subjects.

## Example

<div class='columns'>
<div>
    <img src='./figures/beetle.png' width=80%>
</div>
<div>

|  Propertie    |    Method  |
|---------------|------------|
| `car.name = 'Volkswagen'` | `car.start()` |
| `car.model = 'Beetle'` | `car.drive()` |
| `car.weight = 850` | `car.brake()` |
| `car.color = 'red'` | `car.stop()` |

</div>
</div>

---

## Creating Objects

```javascript
let car = { 
    name: 'Volkswagen',
    model: 'Beetle',
    weight: 850,
    color: 'red',
    start: function() {
        let message = this.name + ' ' + this.model;
        message += ' is ready!';
        console.log(message);
    }
};
```

## Accessing Object Elements

```javascript
console.log(car.color) // red
car.start(); // Volkswagen Beetle is ready
```
---


## Modifying Objects

```javascript
car.weight = 945;   // Modify an existed value
car.maxspeed = 185; // Add a new property

// Modify a method
car.start = function() { 
    console.log('This car is ready to run!')
}

console.log(car.weight)     // Output: 945
console.log(car.maxspeed)   // Output: 185
car.start();                // Output: This car is ready to run!
```
---

# Event Handling

## What are Events?
- Actions that occur in the web browser, e.g., clicking, loading, typing.

---

## Event Listeners
- Functions that run when an event occurs.
- See a list of events, [here](https://www.w3schools.com/jsref/dom_obj_event.asp).

### Example

```html
<button id="myButton">Click me</button>
```
    
```JavaScript
function calling() {
    alert('Button was clicked!');
}

button = document.getElementById('myButton');
button.addEventListener('click', calling);
```

---

# Workshop Activities

1. **Writing Basic JavaScript Programs**
   - Practice writing simple JavaScript programs and running them in the browser.
2. **Data Types and Variables**
   - Create variables of different data types and log them to the console.
3. **Arrays and Iterations**
    - Create and manipulate arrays, and use loops to iterate through them.
4. **Creating and Calling Functions**
   - Write functions and call them with different arguments.
5. **Event Handling**
   - Add event listeners to HTML elements and handle different events.

---

# Writing Basic JavaScript Programs

1. Create a new HTML file and include a `<script>` tag.
2. Write JavaScript code to display a message in the console.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Workshop</title>
</head>
<body>
    <h1>Writing Basic JavaScript Programs</h1>
    <script src="script.js"></script>
</body>
</html>
```

---

# Data Types and Variables

1. Create a new JavaScript file.
2. Declare variables of different data types and log them to the console.

```javascript
let name = ...
const age = ...
var isStudent = ...

```

---

# Arrays and Iterations

1. Create an array of days and a variable for a number of days.
```javascript
let days = ["Monday", "Tuesday", ..., "Sunday"];
let n = days.length;
```
2. Use different loops to iterate through days and log to the console.

<div class="columns">
<div>
    
```javascript
let i = 0;
while (i < n) {
    console.log(days[i]);
    i++;
}
```
</div>
<div>

```javascript
for (let i = 0; i < n; i++) {
    console.log(days[i]);
}

for (let d of days) {
    console.log(d);
}
```
</div>
</div>

---

# Creating and Calling Functions

1. Write a function that takes a name as a parameter and logs a greeting message.
2. Call the function with different arguments.

```javascript
function greet(name) {
    console.log(...);
}

greet("Alice");
greet("Bob");
```

---

# Event Handling

1. Create a button element in HTML.
2. Add an event listener to the button that displays an alert when clicked.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Handling</title>
</head>
<body>
    <button id="myButton">Click me</button>
</body>
</html>
```

---

# Q&A

Feel free to ask any questions you have about the content covered today.

---

# Supplement Learning Resoures

<div class="columns">
<div>

<iframe width="90%" height="100%" src="https://www.youtube.com/embed/hdI2bqOjy3c?si=b5vS7WvUyXOwCh6l" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
<div>

## JavaScript Crash Course For Beginners

By Traversy Media.

The fundamentals of JavaScript including more modern syntax like classes, arrow functions, etc. This is the starting point on my channel for learning JS.
</div>
</div>

---

# Next Week

## Topic: Advanced JavaScript
- DOM Manipulation
- Advanced Functions
- Asynchronous JavaScript

See you next week!
