const express = require("express");
const {v4: uuidv4} = require("uuid");
const path = require("path")
const app = express();
const port = 3000;
const methodOverride = require('method-override')
app.use(methodOverride('_method'))

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname + "/views"))
app.use(express.static(path.join(__dirname, "public")))

let user = [
    {
        id: 'a1',
        url: "https://images.unsplash.com/photo-1529397938791-2aba4681454f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "sanjayasd45",
        date: "30/01/2024",
        content: "lodjhfaks sjdfhalksjdhfk skdhfkjashdlkfja sdf askdkfjhaksdf jksdhlkfjhaksjdf ",
        topic:"This is topic of the post"
    } ,{
        id: 'a2',
        url: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "sanjayasd45",
        date: "30/01/2024",
        topic:"This is topic of the post",
        content: "lodjhfaks sjdfhalksjdhfk skdhfkjashdlkfja sdf askdkfjhaksdf jksdhlkfjhaksjdf "
    },{
        id: 'a3',
        url: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "nikhilsdf45d",
        date: "30/01/2024",
        topic:"This is topic of the post",
        content: "lodjhfaks sjdfhalksjdhfk skdhfkjashdlkfja sdf askdkfjhaksdf jksdhlkfjhaksjdf "
    },{
        id: 'a4',
        url: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "agam4564sdf",
        date: "30/01/2024",
        topic:"This is topic of the post",
        content: "lodjhfaks sjdfhalksjdhfk skdhfkjashdlkfja sdf askdkfjhaksdf jksdhlkfjhaksjdf "
    }
]
function getFormattedDate() {
    const currentDate = new Date();

    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // Month is zero-based, so add 1
    const year = currentDate.getFullYear();

    // Pad single-digit day and month with leading zero if needed
    const formattedDay = (day < 10) ? `0${day}` : day;
    const formattedMonth = (month < 10) ? `0${month}` : month;

    // Format the date as DD/MM/YYYY
    const formattedDate = `${formattedDay}/${formattedMonth}/${year}`;

    return formattedDate;
}

app.get('/', (req, res) =>{
    // console.log({user});
    res.render("index.ejs", {user})
})
app.get('/post', (req, res) =>{
    // console.log({user});
    res.render("post.ejs", {user})
})
app.post('/', (req, res) =>{
    let data = req.body
    const currentDate =  getFormattedDate();
    let date = {date: currentDate}
    let newid = {id: uuidv4()}
    let newData = {...data, ...date, ...newid}
    user.push(newData)
    res.redirect('/')
})
app.get('/:id', (req, res) =>{
    let {id} = req.params
    let data = user.find((p) => id === p.id);
    res.render("postDetails.ejs", {data})
})
app.get('/:id/edit', (req, res) =>{
    let {id} = req.params
    let data = user.find((p) => id ===p.id);
    res.render("edit.ejs", {data})
})
app.patch('/:id', (req, res) => {
    let {id} = req.params
    let post = user.find((p) => id === p.id)
    post.url = req.body.url
    post.topic = req.body.topic
    post.content = req.body.topic
    console.log(post);
    res.redirect('/')
})
app.delete('/:id',(req, res) => {
    let {id} = req.params
    user = user.filter((p) => id !== p.id)
    res.redirect('/')
    
})

app.listen((port), () => {
    console.log("server is running at port -: ", port);
})





