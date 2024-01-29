const express = require('express');
const path = require('path')


let app = express()

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "public")))
app.set("views", path.join(__dirname, "/views"))

app.get('/', (req, res) => {
    const data = require("./work.json")
    const newdata = data.names
    console.log(newdata);
    res.render('app.ejs',{newdata});
})

app.listen(5000, () => {
    console.log('Server is runing at port no 50000');
})