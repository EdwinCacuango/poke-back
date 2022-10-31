const mongoose = require("mongoose")

const pokemonSchema = new mongoose.Schema({
    name: {
        require: true,
        type: String
    },
    image: {
        // require: true,
        type: String
    },
    description: {
        require: true,
        type: String
    },
    type: {
        type: String
    },
    evolution: {
        type: String
    },
    height: {
        type: Number
    },
    weight: {
        type: Number
    }
})

//Used schema for create and export a model
module.exports = mongoose.model("Pokemon", pokemonSchema)