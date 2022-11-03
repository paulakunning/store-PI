const { Sequelize } = require('sequelize')
//Data para instanciar sequelize: usuario, password, nombre base datos, puerto.

const productModel = require('./models/Products')
const categoryModel = require('./models/Categories')

require('dotenv').config()

const { DB_HOST, DB_PASSWORD, DB_USER }  = process.env 

const database = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/store-pi`,{logging:false})

productModel(database)
categoryModel(database)

const { Product, Category } = database.models

Product.belongsToMany(Category,{ through: 'ProductCategory'})
Category.belongsToMany(Product,{ through: 'ProductCategory'})

module.exports = { database, ...database.models }