const express = require('express');
const { getAllCategories } = require('../controllers/getCategories');
const {Category} = require('../db');

const categoriesRouter = express.Router();

categoriesRouter.get("/", async(req,res) => {
    try {
        const categories = await getAllCategories() //Category.findAll()
        res.send(categories)
    } catch (error) {
        res.send(error.message)
    }
})

categoriesRouter.post("/", async(req,res)=>{
   try {
    await Category.create(req.body)
    res.send('se creo la categoría')
   } catch (error) {
    res.send(error.message)
   }
})


module.exports = categoriesRouter