const express = require("express");
const {v4: uuidv4} = require("uuid");
const path = require("path")
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname + "/views"))
app.use(express.static(path.join(__dirname, "public")))

let user = [
    {
        url: "https://images.unsplash.com/photo-1529397938791-2aba4681454f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "sanjayasd45",
        date: "30/01/2024",
        content: "lodjhfaks sjdfhalksjdhfk skdhfkjashdlkfja sdf askdkfjhaksdf jksdhlkfjhaksjdf "
    } ,{
        url: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "alokasdsd",
        date: "30/01/2024",
        content: "lodjhfaks sjdfhalksjdhfk skdhfkjashdlkfja sdf askdkfjhaksdf jksdhlkfjhaksjdf "
    },{
        url: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "nikhilsdf45d",
        date: "30/01/2024",
        content: "lodjhfaks sjdfhalksjdhfk skdhfkjashdlkfja sdf askdkfjhaksdf jksdhlkfjhaksjdf "
    },{
        url: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "agam4564sdf",
        date: "30/01/2024",
        content: "lodjhfaks sjdfhalksjdhfk skdhfkjashdlkfja sdf askdkfjhaksdf jksdhlkfjhaksjdf "
    }
]

app.get('/', (req, res) =>{
    console.log({user});
    res.render("index.ejs", {user})
})





app.listen((port), () => {
    console.log("server is running at port -: ", port);
})





