const express = require('express')
const Task = require('./model')

const router = express.Router()



router.get('/', async (req,res,next)=>{
    try {
        const data = await Task.get()
        res.json(data)
    }  catch (err) {
        next(err)
    }
})

router.get('/:id', async (req,res,next)=>{
    try {
        const data = await Task.getById(req.params.id)
        res.json(data)
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req,res,next)=>{
    try {
        const data = await Task.create(req.body)
        res.json(data)
    } catch (err) {
        next(err)
    }
})

router.put('/:id', async (req,res,next)=>{
    try {
       const data = await Task.update(req.params.id, req.body)
       res.json(data)
    } catch (err) {
        next(err)
    }
})

router.delete('/:id', async (req,res,next)=>{
    try {
        const data = await Task.remove(req.params.id)
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