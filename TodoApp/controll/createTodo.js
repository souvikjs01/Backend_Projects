const Todo = require("../models/Todo")

exports.createTodo = async(req, res) =>{
    try {
        const {title, desc} = req.body;
        const response = await Todo.create({
            title,
            desc
        })
        res.status(200).json({
            success: true,
            data: response,
            message: "entry created successfully"
        })
    } catch (error) {
        console.error(error);
        console.log(error);
        res.status(500).json({
            success: false,
            data: "internal server error"
        })
    }
}