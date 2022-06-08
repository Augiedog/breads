const mongoose = require('mongoose')
const { Schema } = mongoose

const bakerSchema = new Schema({
    name: {
        type: String,
        required: true,
        enum: ['Rachel', 'Monica', 'Joey', 'Ross', 'Chandler', 'Phoebe']
    },
    startDate: {
        type: Date,
        required: true
    },
    bio: String
},{
    toJSON: { virtuals: true }
})

// virtuals
bakerSchema.virtual('breads', {
    ref: 'Bread',
    localField: '_id',
    foreignField: 'baker'
})

 
module.exports = mongoose.model('Baker', bakerSchema)