const url = 'https://fakestoreapi.com/products/categories'
const axios = require('axios')
const {Category} = require('../db');


const getAllCategories = async () => {
    const categories = await axios.get(url)
    const apiCategories = categories.data

    const dbCategories = await Category.findAll()

    return [...apiCategories, ...dbCategories]
}

module.exports = {
    getAllCategories
}