const express = require('express')
const path = require('path')



const app = express()
let port = 5000
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))



app.get(("/contact"), (req, res) => {
    res.send('You connected with contact path')
})
app.get(("/"), (req, res) => {
    res.render('home.ejs')
})
app.get(("*"), (req, res) => {
    res.send('This path dose not exist')
})

// app.use((req, res) => {
//     console.log('request resicved');
//     res.send('This is basic response')
// })



app.listen(port, () => {
    console.log(`App is live on port no. ${port}`);
})