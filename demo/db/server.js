const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const port = 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname)));


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
});

const db = new sqlite3.Database('./mydatabase.db');

let query = `CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        age INTEGER
)`;

db.run(query);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/users', (req, res) => {

    let query = 'SELECT * FROM users';

    db.all(query, (err, rows) => {
        if (err) {
            let msg = {error: err.message};
            status(500).json(msg);
        }
        res.json(rows);
    });
});

app.post('/users', (req, res) => {
  const { name, age } = req.body;
  let query = `INSERT INTO users (name, age) VALUES (?, ?)`
  
  db.run(query, [name, age], (err) => {
    if (err) {
        let msg = { error: err.message };
        return res.status(500).json(msg);
    }
    res.json({ id: this.lastID, name, age });
  });

});
