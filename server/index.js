let express = require('express')
const {getProducts, getProductsById} = require('./getProducts')

let app = express()
let port = 4242

app.get('/api/products', getProducts)

app.get('/api/products/:id', getProductsById)

// app.get('/api/products', getProductsByPrice)

app.listen(port, () => {
  console.log('Listening on port', port)
})