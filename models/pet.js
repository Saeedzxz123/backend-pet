const mongoose = require ('mongoose')




const petSchema = mongoose.Schema({
    name: {
        type: String,
        required:true
    },

    age:{
        type: Number,
        required:true,
        min: 0
    },

    breed : String,
})


const Pet = mongoose.model('pet', petSchema)

module.exports = Pet;