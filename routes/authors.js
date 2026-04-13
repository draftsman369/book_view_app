const express = require('express')
const router = express.Router()

//Get all authors route
router.get('/', (req, res) => {
    res.render('authors/index')
})

//New author creation route
router.get('/new', (req, res) => {
    res.render('authors/new')
})

//Publish new author
router.post('/', (req, res) => {
    res.send("New user created")
})

module.exports = router