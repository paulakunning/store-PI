const express = require('express')

const productsRouter = express.Router()

const { getAllProducts } = require('../controllers/getProducts')
const { Product } = require('../db.js')
const checkData = require('../middlewares/checkData')

//Rutas a generar:
    //una que nos devuelva todos los productos
    //una que nos de el detalle de un producto: por id.
    //Una que nos permita crear un producto
    //Una que busque por nombre del producto.
    //una para eliminar un prodcto

//¿Como le mandamos data desde el cliente al servidor? Por params, por body, por query (no genera una nueva ruta)

productsRouter.get("/",async (req,res)=>{
    const { name } = req.query
    try {
        if(name){
            res.send(`tamo ready desde el detalle del producto con query ${name}`)
        } else {
            const products = await getAllProducts()
            res.send(products)
        }  
    } catch (error) {
        res.status(400).send(error.message)
    }
})

productsRouter.get('/:id',(req,res)=>{
    const { id } = req.params
    res.send(`tamo ready desde el detalle del producto ${id}`)
})

productsRouter.post("/", checkData, async(req,res)=>{
    const { categories } = req.body
   try {
    const newProduct = await Product.create(req.body)
    newProduct.addCategories(categories)
    res.send('todo ok')
   } catch (error) {
    res.send(error.message)
   }
})


module.exports = productsRouter