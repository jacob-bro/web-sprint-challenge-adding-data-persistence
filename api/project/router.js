const express = require('express')
const Project = require('./model')

const router = express.Router()



router.get('/', async (req,res,next)=>{
    try {
        const data = await Project.get()
        res.json(data)
    }  catch (err) {
        next(err)
    }
})

router.get('/:id', async (req,res,next)=>{
    try {
        const data = await Project.getById(req.params.id)
        res.json(data)
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req,res,next)=>{
    try {
        const data = await Project.create(req.body)
        res.json(data)
    } catch (err) {
        next(err)
    }
})

router.put('/:id', async (req,res,next)=>{
    try {
       const data = await Project.update(req.params.id, req.body)
       res.json(data)
    } catch (err) {
        next(err)
    }
})

router.delete('/:id', async (req,res,next)=>{
    try {
        const data = await Project.remove(req.params.id)
        res.json(data)
    } catch (err) {
        next(err)
    }
})

router.use((err,req,res,next)=> {
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router