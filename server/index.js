const express = require('express')

const products = require('../products.json')
const getProducts = require('./getProducts')
const getProduct = require('./getProduct')

const app = express();

app.use(express.json())

app.get('/api/products', getProducts)

app.get('/api/product/:id', getProduct)

const port = 4000

app.listen(port, () => console.log(`Server listening on ${port}`))