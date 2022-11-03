const checkData = (req, res, next) => {
    const { name, price, description } = req.body

    if(!name) return res.status(400).send({error: "Missing name"})
    if(!price) return res.status(400).send({error: "Missing price"})
    // estan todos los datos - puede continuar la ejecucion

    // si o si lleva return asi no pasa directo al next

    
    next();
}

module.exports = checkData;