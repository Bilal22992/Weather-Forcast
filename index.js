import axios from "axios";
import bodyParser from "body-parser";
import express from "express";

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.listen(3000,()=>{
    console.log("server running successfully");
})

app.get("/",(req,res)=>{
    res.render("index.ejs");
})

app.post("/", async(req,res)=>{
    try {
        
        // const response = await axios.get("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99",{params:{appid:"5c72e798f3fc801d33823ffd0906d10b"}});
        // console.log(response.data);

    } catch (error) {
        console.log(error.message)
    }
})
