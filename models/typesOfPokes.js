const mongoose = require('mongoose')

const typeSchema= new mongoose.Schema({
    name:{
        require:true,
        type:String
    },
    icon:{
        require:true,
        type:String
    }
})

module.exports = mongoose.model("Type", typeSchema)