const express = require('express')
const router = express.Router()



const Pet = require('../models/pet')

/* ---------------------------- */

router.post('/', async (req,res)=> {
    try{
        const pet = await Pet.create(req.body)
        res.status(201).json({pet})

    }
    catch(err){
        console.log(err)
        res.status(500).json({err: 'failed to create pet'})
    }
})


router.get('/', async (req,res)=>{
    try{
    const pets = await Pet.find({})
    res.status(200).json({pets})
    }
    catch(err){
    console.log(err)
    res.status(500).json({err: 'failed to get pets'})
    }
})



router.get('/:id', async (req,res)=>{
    try{
        const {id} = req.params
    const onePet = await Pet.findById(id)
    
    if(!onePet){res.status(404).json({error: 'No pet found'})}

    else{res.status(200).json({onePet})}
    }
    catch(err){
    console.log(err)
    res.status(500).json({err: 'failed to get pet'})
    }
})


router.delete('/:id', async (req,res)=>{
    try{  const {id} = req.params
    const pet = await Pet.findByIdAndDelete(id)
    if(!pet){
        res.status(404).json({error: 'pet not found'})
    }
    else{
        res.status(200).json({pet})
    }
}
catch(err){
        console.log(err)
  res.status(500).json({error: 'pet cant be deleted'})}
})






module.exports = router