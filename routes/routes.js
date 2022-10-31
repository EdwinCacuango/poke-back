const express = require('express');
const pokemons = require('../models/pokemon')


const router = express.Router()



//Get all pokemons
router.get("/pokemons", async (req, res) => {
    try {
        const data = await pokemons.find()
        res.json(data)
        console.log(data)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get one pokemon according to body's id
router.get("/one-poke/:id", (req, res) => {
    const id = req.params.id
    res.send(`${id}`)
})


//Create a new pokemon
router.post("/new-poke", (req, res)=>{
    const data= req.params.body
    const newPoke = new Poke(data)
})

//Create a new type of pokemon
router.post("/new-type", (req, res)=>{
    const data=req.params.body
    const newTypeOfPoke= new Type(data)
})

module.exports= router