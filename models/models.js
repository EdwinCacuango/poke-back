const mongoose = require("mongoose")

const dataSchema = new mongoose.Schema({
    name: {
        require: true,
        type: String
    },
    image: {
        require: true,
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

module.exports = mongoose.model("Data", dataSchema)