const express = require('express')
const router = express.Router()
const Bread = require('../models/bread.js')

// INDEX
router.get('/', (req, res) => {
    res.render('index', {
        'breads': Bread,
        title: 'index Page'
    })
})

router.get('/new', (req, res) => {
    res.render('new')
})

// Create
router.post('/', (req, res) => {
    if (!req.body.image) {
        req.body.image = 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    }
    if (req.body.hasGluten === 'on') {
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }
    Bread.push(req.body)
    res.redirect('/breads')
})

// SHOW
router.get('/:arrayIndex', (req, res) => {
    const { arrayIndex } = req.params
    res.render('show', {
        bread: Bread[arrayIndex]
    })
})
  
module.exports = router
