const taskModel= require('../model/task')

module.exports={
    createTask: async(req, res, next)=>{
        try {
            const newTask= new taskModel(req.body)
            await newTask.save()
            res.status(201).json({
                status: true,
                message: 'New task added successfully.',
                data:newTask
            })
        } catch (error) {
            res.status(500).json({
                status: false,
                message: error.message
            })
        }
      
    },
    getAllTask:async(req, res, next)=>{
        try {
            const allTasks = await taskModel.find({})
            res.status(201).json({
                status: true,
                message: 'Get all tasks successfully.',
                data: allTasks
            })
        } catch (error) {
            res.status(500).json({
                status: false,
                message: error.message
            })
        }
    },
    updateTask: async(req, res, next)=>{
        try {
            const {id}= req.params
            const updatedTask= await taskModel.findByIdAndUpdate(id, req.body,{new: true})
            res.status(201).json({
                status: true,
                message: 'Task updated successfully.',
                data: updatedTask
            })
        } catch (error) {
            res.status(500).json({
                status: false,
                message: error.message
            })
        }
    },
    deleteTask:async(req, res, next)=>{
        try {
            await taskModel.findByIdAndDelete(req.params.id)
            res.status(201).json({
                status: true,
                message: 'Task deleted successfully.',
                data: req.params.id
            })
            
        } catch (error) {
            res.status(500).json({
                status: false,
                message: error.message
            })
        }
    }

}