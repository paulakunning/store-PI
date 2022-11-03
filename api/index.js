//Poner a escuchar el servidor en X puerto.
//sincronizar nuestra base de datos.

const server = require("./src/app");
const { database } = require('./src/db')

server.listen(3001,()=>{
    database.sync({force: true})
    console.log('Server is listening on port 3001')
})