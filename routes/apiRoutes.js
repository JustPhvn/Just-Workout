const router = require("express").Router();
const workout = require("../models/workoutSchema.js");

router.get("/api/workouts", (req, res) => {
  workout
    .find({})
    .sort({ date: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/workouts", (req, res) => {
  workout
    .create(req.body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  workout
    .findByIdAndUpdate(req.params.id, {
      $push: { exercises: req.body }
    })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", function(req, res) {
  workout
    .find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
