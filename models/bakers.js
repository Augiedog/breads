const mongoose = require('mongoose')
const { Schema } = mongoose

const bakerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    bio: String
})

const Baker = mongoose.model('Baker', bakerSchema)
module.exports = Baker