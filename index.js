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
        var latitude = req.body.latitude;
        var longitude= req.body.longitude;
        const response = await axios.get("https://api.openweathermap.org/data/2.5/weather",{params:{appid:"",lat:latitude,lon:longitude}});
        console.log(response.data.weather[0].description);
        res.render("index.ejs",{data:response.data})

    } catch (error) {
        console.log(error.message)
    }
})
