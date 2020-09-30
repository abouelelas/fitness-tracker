const router = require("express").Router();
const Workout = require("../models/workout-table");

router.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then(workoutTracker => {
      res.json(workoutTracker);
    })
    .catch(err => {
      res.json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  console.log(params.id);
  console.log(body);
  Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    // "runValidators" will ensure new exercises meet our schema requirements
    { new: true, runValidators: true }
  )
  .then(workoutTracker => {
    res.json(workoutTracker);
  })
  .catch(err => {
    res.json(err);
  });
});
    
router.get("/api/workouts", (req, res) => {
  Workout.find()
    .then(workoutTracker => {
      res.json(workoutTracker);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({ }).limit(7)
    .then(workoutTracker => {
      res.json(workoutTracker);
    })
    .catch(err => {
      res.json(err);
    });
});

router.delete("/api/workouts", ({ body }, res) => {
  Workout.findByIdAndDelete(body.id)
    .then(() => {
      res.json(true);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;