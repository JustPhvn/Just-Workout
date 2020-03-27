const mongoose = require("mongoose")

const workoutSchema = mongoose.Schema({
    date: {
        type: Date,
        default: Date.now(),
        required: true
    },
    duration: {
        type: Number,
        require: true
    },
    name: {
        type: Number,
        require: true
    },
    weight: {
        type: Number
    },
    sets: {
        type: Number
    },
    reps: {
        type: Number
    },
    distance:{
        type: Number
    }
})

const