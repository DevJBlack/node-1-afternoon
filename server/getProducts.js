const products = require('../products.json')


let getProducts = (req,res) => {
  let { price } = req.query
  if(price){
    let filterProduct = products.filter(product => {
      return product.price >= +price 
    })
    res.status(200).send(filterProduct)
  } else {
    res.status(200).send(products)
  }
}

let getProductsById = (req, res) => {
  let { id } = req.params
  let product = products.find(product => +product.id === +id)
  if(!product){
    return res.status(500).send('Item not in list')
  } else {
    res.status(200).send(product)
  }
}



module.exports = {
  getProducts,
  getProductsById,
  // getProductsByPrice
}