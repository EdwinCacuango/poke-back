const cors = require('cors')
const express = require("express")
const { default: mongoose } = require('mongoose')
const Model = require('./models/models')

const mongoString = process.env.DATABASE_URL

mongoose.connect(mongoString)
const database = mongoose.connection

database.on('error', (err) => {
    console.log(err)
})

database.once('conected', () => {
    console.log('Database connected')
})


const app = express()
app.use(cors())

app.get("/", (req, res) => {
    res.send("Hola mundo desde server")
})

app.get("/api/pokemons", (req, res) => {
    res.send("lista de todos los objetos")
})

app.get("/api/one-poke/:id", (req, res) => {
    const id = req.params.id
    res.send(`${id}`)
})
app.listen(3000, () => {
    console.log("Service online")
})  