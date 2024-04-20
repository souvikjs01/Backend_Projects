const express = require("express")
const router = express.Router();

const {createTodo} = require("../controll/createTodo")
const {getTodos} = require("../controll/getTodos");
const {updateTodo} = require("../controll/updateTodo")
const {getTodoById} = require("../controll/getTodoById")
const {deleteTodo} = require("../controll/daleteTodo")

router.post("/createTodo", createTodo);
router.get("/getTodos", getTodos);
router.put("/updateTodo/:id", updateTodo);
router.get("/getTodoById/:id", getTodoById);
router.put("/deleteTodo/:id", deleteTodo);

module.exports = router;