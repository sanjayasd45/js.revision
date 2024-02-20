const express = require("express");
const {Task} = require("../models/task.js")
const router = express.Router()



router.get('/', async(req, res) => {
    const data = await Task.find();
    res.render("pages/index.ejs", {data})
});

router.post('/', async(req, res) => {
    const newTask = new Task(req.body);
    console.log(newTask);
    newTask.save()
    res.redirect("/task")
})
router.put('/:id', async(req, res) => {
    const {id} = req.params;
    const data = req.body;
    const updatedTask = await Task.findByIdAndUpdate(id, data);
    updatedTask.save()
    res.redirect("/task")
})
router.delete('/:id', async(req, res) => {
    const {id} = req.params;
    let deleted = await Task.findByIdAndDelete(id)
    res.redirect('/task')
})

module.exports = router;