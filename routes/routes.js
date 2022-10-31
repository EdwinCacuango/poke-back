const express = require('express');
const pokemons = require('../models/pokemon')


const router = express.Router()

//Get all pokemons
router.get("/pokemons", async (req, res) => {
    try {
        const data = await pokemons.find()
        res.json(data)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get one pokemon according to body's id
router.get("/one-poke/:id", async (req, res) => {
    const id = req.params.id
    try {
        const data = await pokemons.find({ _id: id })
        res.json(data)
    } catch {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router