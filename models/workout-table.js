const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExampleSchema = new Schema({


    day: {
        type: Date,
        default: Date.now
    },

    exercises: [
        {
            type: {
                type: String,
            },
            name: {
                type: String,
            },
            duration: {
                type: Number,
            },
            weight: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            distance: {
                type: Number,
            }
        }
    ]
}, {
    toJSON: {
        // include any virtual properties when data is requested     
        virtuals: true
    }
});
ExampleSchema.virtual("totalDuration").get(function () {
    // "reduce" array of exercises down to just the sum of their durations  
    return this.exercises.reduce((total, exercise) => { return total + exercise.duration; }, 0);
});
const Example = mongoose.model("workouts", ExampleSchema);

module.exports = Example;