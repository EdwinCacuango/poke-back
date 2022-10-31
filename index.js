const cors = require('cors')
const express = require("express")

const mongoose=require('mongoose')

const Type = require('./models/typesOfPokes')

const mongoString 

main().catch(err=> console.log(err))

async function  main () {
    await mongoose.connect(mongoString)
}

const app = express()

//To allow request from diferent ip adress 
app.use(cors())

// To parsed json information sended from client
app.use(express.json())


//Home page
app.get("/", (req, res) => {
    res.send("Hola mundo desde server")
})


// Apply all routes
const routes = require('./routes/routes');
app.use('/api', routes)


//PORTS
const port= process.env.PORT || 3000
app.listen(port, () => {
    console.log("Service online")
})  