const express = require('express');
const router = express.Router();
var ObjectId = require('mongodb').ObjectID;
//routes
//Fetching the data
router.get('/api', (req, res) => {
        let task = require('../models/model');
        task.find({}, (err, tasks) => {
            res.json(tasks)
        })
    })
    //Posting the data
router.post('/api', (req, res) => {
    let task = require('../models/model');
    task = new task({
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        isCompleted: req.body.isCompleted
    })
    task.save(() => {
        res.json(task)
    })
})

//Updating the data

router.put('/api/:id', async(req, res) => {
    let task = require('../models/model');
    task = await task.findById(req.params.id)
    task.title = req.body.title;
    task.description = req.body.description;
    task.date = req.body.date;
    task.isCompleted = req.body.isCompleted;
    task.save(() => {
        res.json(task)
    })
})

//Deleting the data

router.delete('/api/:id', (req, res) => {
    let task = require('../models/model');
    task.findByIdAndDelete(req.params.id, (err) => {
        res.json({ 'message': 'deleted' });
    })
})

//Exports 

module.exports = router;