const url = "https://fakestoreapi.com/products"
const { Product, Category } = require('../db.js')

const axios = require('axios')

const getAllProducts = async()=>{
    const products = await axios.get(url)
    const productsFromApi = products.data

    const dbProducts = await Product.findAll({
        include: {
            model: Category,
            attributes: ['name'],
            through:{
                attributes:[]
            }
        }
    })

    return [...productsFromApi, ...dbProducts]
}

module.exports = {
    getAllProducts
}