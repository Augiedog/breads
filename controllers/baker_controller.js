const express = require('express')
const router = express.Router()

const Baker = require('../models/bakers.js')
const oldBaker = require('../models/old_bakers.js')

router.get('/seed', async (req, res) => {
    try {
        await Baker.insertMany(oldBaker)
        res.redirect('/breads')
    } catch (error) {
        console.log(error)
        res.send("ERROR")
    }
})

module.exports = router