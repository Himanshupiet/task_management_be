const express = require('express')
const {getAllTask, createTask, updateTask, deleteTask}=require('../controller/task')
const router = express.Router()
router.get('/tasks', getAllTask)
router.post('/tasks', createTask)
router.put('/tasks/:id', updateTask)
router.delete('/tasks/:id', deleteTask)

module.exports= router

