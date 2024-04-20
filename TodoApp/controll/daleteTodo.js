const Todo = require("../models/Todo")

exports.deleteTodo = async(req,res)=>{
    try {
        const {id} = req.params
        await Todo.findByIdAndDelete({_id: id});
        res.status(203).json({
            success: true,
            message: "Todo successfully deleted"
        })
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}