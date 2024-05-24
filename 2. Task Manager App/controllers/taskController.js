const taskModel = require("../models/taskModel")

const getAllTasks = async (req, res) => {
    const allTask = await taskModel.find()
    res.status(200).json({ data: allTask })
}

const getSingleTask = async (req, res) => {
    try {
        // Object destructuring 
        const { id: task_id } = req.params
        const task = await taskModel.findOne({ _id: task_id })
        if (!task) {
            return res.status(404).json({ msg: `task not found with an id:${task_id}` })
        }
    } catch (error) {
        res.status(404).json({ msg: error })
    }
}

const addNewTask = async (req, res) => {
    const taskToDB = await taskModel.create(req.body)
    res.status(200).json({ data: `task got saved with an id : ${taskToDB._id}` })
}

const updateTask = async (req, res) => {
    const id = req.params.id
    console.log(id);
    try {
        await taskModel.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
        res.status(200).json({ data: `data updated successfully !!!` })
    } catch (error) {
        res.status(404).json({ data: error })
    }

}

const deleteTask = async (req, res) => {
    const id = req.params.id
    await taskModel.findByIdAndDelete(id)
    res.status(200).json({ data: `data updated successfully !!!` })

}

module.exports = {
    getAllTasks,
    addNewTask,
    updateTask,
    deleteTask,
    getSingleTask
}