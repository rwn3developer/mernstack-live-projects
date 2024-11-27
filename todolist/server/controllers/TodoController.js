const Todo = require('../models/TodoModel');

const addtodo = async (req, res) => {
    try {
        const { task, description } = req.body;
        if (!task || !description) {
            return res.status(400).send({
                success: false,
                message: "All field is required"
            })
        }
        const todoadd = await Todo.create({
            userId: req.user._id,
            task: task,
            description: description
        })
        return res.status(200).send({
            success: true,
            message: "task successfully add",
            todoadd
        })
    } catch (err) {
        return res.status(501).send({
            success: false,
            message: err
        })
    }
}
const viewTodo = async (req, res) => {
    try {
        const userid = req.user._id;
        const todolist = await Todo.find({ userId: userid });
        return res.status(200).send({
            success: true,
            message: "record successfully fetch",
            todolist
        })
    } catch (err) {
        return res.status(501).send({
            success: false,
            message: err
        })
    }
}
module.exports = {
    addtodo, viewTodo
}