const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExampleSchema = new Schema({


  day: {
    type: Date,
    default: Date.now
  },

  exercise: [
    {type:{
        type: String,
    },
    name:{
        type: String,
    },
    duration:{
        tyoe: Number,
    },
    weight:{
        type: Number,
    },
   reps:{
        tyoe: Number,
    },
    sets:{
        type: Number,
    },
    distance:{
        type: Number,
    }
}
  ]
});

const Example = mongoose.model("workouts", ExampleSchema);

module.exports = Example;