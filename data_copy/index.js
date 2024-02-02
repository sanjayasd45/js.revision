const express = require('express')
const { default: mongoose } = require('mongoose')
const path = require('path')
const methodOverride =  require('method-override')

const app  = express()
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"))

const password = encodeURIComponent("@123barisH");

mongoose.connect(`mongodb+srv://sanjayasd45:${password}@datacluster.lgoji1f.mongodb.net/your_database?retryWrites=true&w=majority`)
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((err) => {
    console.log(`Error connecting to MongoDB Atlas: ${err}`);
  });


// main().then((res) => {
//     console.log("connected");
// }).catch((err) => {
//     console.log(err);
// })

const dataSchema = new mongoose.Schema({
    r1: String,
    r2: String
})
const Data = mongoose.model("Data", dataSchema);


// async function main(){
//     await mongoose.connect("mongodb://127.0.0.1:27017/dataCopy")
// }
app.post('/', (req, res) => {
    let data = req.body
    let newData = new Data({...data})
    newData.save().then((res) => {
        console.log("saved");
    }).catch((res) => {
        console.log(err);
    })
    res.redirect('/')
})
app.get('/', async (req, res) => {
    let data = await Data.find()
    res.render('index.ejs', {data})
})

app.get('/:id/edit',async (req, res) => {
    let {id} = req.params
    let data = await Data.findById(id)
    res.render('edit.ejs', {data})
} )
app.put('/:id', async (req, res) => {
    let {id} = req.params
    let msg = req.body
    let update = await Data.findByIdAndUpdate(id, {r1:msg.r1, r2:msg.r2},{new:true})
    res.redirect('/')
})
app.delete('/:id', (req, res) => {
    let {id} = req.params
    console.log(id);
    Data.findByIdAndDelete(id).then((res) => {
        console.log(res);
    }).catch((err) => console.log(err))
    res.redirect('/')
})

app.listen(3000, () => console.log("Done"));