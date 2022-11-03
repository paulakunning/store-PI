const { DataTypes } = require("sequelize")

module.exports = (database)=>{
database.define("Product",{
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
    }
}, {timestamps: false})
}