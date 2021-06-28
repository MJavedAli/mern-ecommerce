const express = require('express');
const products = require('./data/products')
const app = express()

app.get('/', (req, res) => {
    res.send('<h1>Welcome to Node Server</h1>')
});

app.get('/product', (req, res) => {
    res.json(products);
})

app.get('/product/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
})

app.listen(8080, () => {
    console.log('Server is running on port 8080')
})