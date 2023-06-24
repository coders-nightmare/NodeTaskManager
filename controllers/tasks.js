const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
const getTask = async (req, res) => {
  try {
    // const id = req.params.id;
    const { id: taskID } = req.params;
    const task = await Task.findById(taskID);
    if (!task)
      res.status(404).json({ msg: `No element with Id:${taskID} found.` });
    else res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
const updateTask = (req, res) => {
  res.send("update task");
};
const deleteTask = async (req, res) => {
  try {
    // const id = req.params.id;
    const { id: taskID } = req.params;
    const task = await Task.findByIdAndDelete(taskID);
    if (!task)
      return res
        .status(404)
        .json({ msg: `No element with Id:${taskID} found.` });
    res.status(200).json({ task });
    // res.status(200).send()
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
