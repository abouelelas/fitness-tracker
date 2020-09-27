const router = require("express").Router();
const Workout = require("../models/");

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

router.get("/api/workouts/range", ({ query }, res) => {
  Workout.find({ day: { $gte: query.start, $lte: query.end } })
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