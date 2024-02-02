const express = require('express');
const path = require('path')
const { default: mongoose, connection } = require('mongoose');
const Chat = require('./models/chat.js')
const methodOverride = require('method-override')
const app = express();

app.use(methodOverride('_method'))
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({ extended: true }));

main()
   .then(() => console.log("Connection Done"))
   .catch((err) => console.log(err))
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp")
}

app.get('/chats', async (req, res) => {
    let chats = await Chat.find()
    res.render("index.ejs", {chats})
})
app.get('/chats/new', (req, res) => {
    res.render('newChat.ejs')
})
app.post('/chats/new', (req, res) => {
    let data = req.body
    let date = {created_at: new Date}
    let newData = new Chat({...data, ...date})
    newData.save().then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    })

    res.redirect('/chats')
})
app.get('/chats/:id/edit', async (req, res) => {
    let {id} = req.params
    let data = await Chat.findById(id);
    res.render('edit.ejs', {data})
})
app.put('/chats/:_id',  async (req, res) => {
    let {_id} = req.params
    let message = req.body
    let updatedChat = await Chat.findByIdAndUpdate(_id, {msg: message.msg}, {runValidators:true}, {new:true})
    res.redirect('/chats')
})
app.delete('/chats/:_id',  (req, res) => {
    let {_id} = req.params
    Chat.findByIdAndDelete(_id)
    .then((deletedChat) => {
      if (deletedChat) {
        console.log('Deleted user:', deletedChat);
      } else {
        console.log('User not found.');
      }
    })
    .catch((error) => {
      console.error('Error deleting user:', error);
    });
    res.redirect("/chats")
})

app.get('/', (req, res) => {
    res.send("every thing is good")
})


















app.listen((5000), ()  => console.log('server is running'))