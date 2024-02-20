const express = require("express");
const mongoose = require("mongoose");
const password = encodeURIComponent('@123railwaY');
const task = require("./routes/task.js")
const path = require('path')
const ejsMate = require("ejs-mate");
const methodOverride = require('method-override')
const bodyParser = require("body-parser")
const cors = require("cors")

const port = 3000

const app = express();

mongoose.connect(`mongodb+srv://sanjayasd45:${password}@datacluster.lgoji1f.mongodb.net/to-do-app?retryWrites=true&w=majority`)
     .then(() => {
        app.listen(port, () => {
            console.log("DB connected, Server is running at ", port);
        })
     })

app.use(bodyParser.json())
app.use(cors())
app.engine('ejs', ejsMate)
app.set("view engine", 'ejs')
app.use(methodOverride('_method'))
app.set("views", path.join(__dirname + "/views"))
app.use(express.static(path.join(__dirname + "/public")))
app.use(express.urlencoded({extended: true}))

app.use("/task", task)

app.get('/', (req, res) => {
   res.send("I Am Root")
})
