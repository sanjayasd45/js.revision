const mongoose = require("mongoose");

main()
  .then(res => console.log('connection done'))
  .catch(err => console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/test")
}

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number
})
const User = mongoose.model("User", userSchema)
const User1 = new User({
    name: 'sanjay',
    email:'sanjayasd45@gmail.com',
    age:19
}) 

User1.save() 

User.insertMany([
    {name:'priya', email:'priyaasd45@gmail.com', age:18},
    {name:'nikhil', email:'nikhilasd45@gmail.com', age:20},
    {name:'alok', email:'alokasd45@gmail.com', age:19}
]).then(res => console.log(res))
.catch(err => console.log(err))
