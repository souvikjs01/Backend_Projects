const Todo = require("../models/Todo")

exports.getTodos = async(req,res)=>{
    try {
        const data = await Todo.find({})
        res.status(200).json({
            success: true,
            data: data,
            message: "todos fetched successfully"
        })
    } catch (err) {
        console.error(err)
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}