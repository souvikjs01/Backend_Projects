const Todo = require("../models/Todo")

exports.getTodoById = async(req, res) =>{
    try {
        const {id} = req.params;
        const response = await Todo.findById({_id: id});
        res.status(202).json({
            success: true,
            data: response,
            message: "Todo fetched successfully"
        })
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}