const express = require("express")
const { getAllTasks, addNewTask, updateTask, deleteTask, getSingleTask } = require("../controllers/taskController")
const router = express.Router()

router.route("/").get(getAllTasks).post(addNewTask)
router.route("/:id").put(updateTask).get(getSingleTask).delete(deleteTask)

module.exports = router