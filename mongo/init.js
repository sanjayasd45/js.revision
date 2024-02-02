const { default: mongoose, connection } = require('mongoose');
const Chat = require('./models/chat.js')



main()
   .then(() => console.log("Connection Done"))
   .catch((err) => console.log(err))
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp")
}

let allChats= ([
    {
     from:'alok',
     to:'nikhil',
     msg:'whats your name',
     created_at:new Date()
  },{
    from:'sanjay',
    to:'alok',
    msg:'sent your exam sheets',
    created_at:new Date()
 },{
    from:'neha',
    to:'priya',
    msg:'sent your exam sheets',
    created_at:new Date()
 },
])

// chat1.save().then((res) => {
//     console.log(res);
// })
Chat.insertMany(allChats)