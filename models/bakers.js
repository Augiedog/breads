const mongoose = require('mongoose')
const { Schema } = mongoose

const bakerSchema = new Schema({
    name: {
        type: String,
        required: true,
        enum: ['Rachel', 'Monica', 'Joey', 'Chandler', 'Phoebe']
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
    localField: 'id',
    foreignField: 'baker'
})

const Baker = mongoose.model('Baker', bakerSchema)
module.exports = Baker