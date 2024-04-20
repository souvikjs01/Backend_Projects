const mongoose = require("mongoose")
const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 50
    },
    desc: {
        type: String,
        required: true,
        maxLength: 100
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        required: true,
        default: Date.now()
    }
})
const Todo = mongoose.model("Todo", TodoSchema);
module.exports = Todo;