const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const workoutSchema = new Schema({

day: {
type: Date, 
default: () => new Date()
},

exercises: [
{
type: {

type: String, 
trim: true, 
required: "Enter an exercise type"

},

name: {

type: String,
trim: true,
required: "Enter an exercise name"

},

duration: {

type: Number,
required: "Enter exercise duration"

},

weight: {

type: Number,
required: "Enter weight"

},

reps: {

type: Number,
required: "Enter number of reps"

},

sets: {

type: Number,
required: "Enter number of sets"

},

distance: {

type: Number,
required: "Enter distance"

}

}

]


},

{

toJSON: {

    virtuals: true
}

})

workoutSchema.virtual("totalDuration").get(function () {

    return this.exercises.reduce((total, exercise) => {

        return total + exercise.duration;

    }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;