const express = require('express')
const router = express.Router()



const Pet = require('../models/pet')

/* ---------------------------- */

router.post('/', async (req,res)=> {
    res.send(req.json)
})





module.exports = router