const mongoose = require('mongoose')

const conectarBaseDatos = async () => {

    try{
        await mongoose.connect("mongodb://localhost:27017/EF")

    }catch(error){
        console.log(error)
        process.exit(1)
    }

}

module.exports = conectarBaseDatos