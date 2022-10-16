const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.send("Hola mundo desde server")
})
app.listen(3000, () => {
    console.log("Service online")
})