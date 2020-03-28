const mongoose = require("mongoose");

const workoutSchema = mongoose.Schema({
  day: {
    type: Date,
    default: Date.now(),
    required: true
  },
  exercises: [
    {
      type: {
        type: String
      },
      name: {
        type: String
      },
      duration: {
        type: Number
      },
      distance: {
        type: Number
      },
      weight: {
        type: Number
      },
      reps: {
        type: Number
      },
      sets: {
        type: Number
      }
    }
  ]
});

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;
