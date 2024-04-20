const Todo = require("../models/Todo")

exports.updateTodo = async(req, res)=>{
    try {
        const {id} = req.params;
        const {title, desc} = req.body;
        const response = await Todo.findByIdAndUpdate({_id: id},{
            title,
            desc
        })
        res.status(200).json({
            success: true,
            data: response,
            message: "todo updated successfully"
        })
    } catch (err) {
        console.error(err)
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })        
    }
}