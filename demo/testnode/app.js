const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' }
];

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

app.get('/items', (req, res) => {
    res.json(items);
});

app.post('/items', (req, res) => {
    // Get the name from the request body
    const itemName = req.body.name;

    // Create a new item with a unique id
    const newItem = { id: items.length + 1, name: itemName };

    // Add the new item to our items list
    items.push(newItem);

    // Send a response with the new item and status code 201 (Created)
    res.status(201).json(newItem);
});

function findItemById(id) {
    for (let i = 0; i < items.length; i++) {
        if (items[i].id == id) {
            return items[i]; // Return the item if the id matches
        }
    }
    return null; // Return null if no item is found
}

app.put('/items/:id', (req, res) => {
    const itemId = req.params.id; // Get the id from the URL
    const itemToUpdate = findItemById(itemId);

    // If the item exists, update its name
    if (itemToUpdate) {
        itemToUpdate.name = req.body.name;
        res.json(itemToUpdate); 
    } else {
        // If the item is not found, send a 404 error (not found)
        res.status(404).send('Item not found');
    }
});

function deleteItemById(id) {
    for (let i = 0; i < items.length; i++) {
        if (items[i].id == id) {
            // Remove the item from the array using splice
            items.splice(i, 1);
            return true; // Return true if the item was found and deleted
        }
    }
    return false; // Return false if no item was found with the given id
}

app.delete('/items/:id', (req, res) => {
    const itemId = req.params.id; // Get the id from the URL

    // Call the deleteItemById function
    const itemDeleted = deleteItemById(itemId);

    if (itemDeleted) {
        res.send('Item deleted successfully'); // Send success message if item was deleted
    } else {
        res.status(404).send('Item not found'); // Send error if item was not found
    }
});