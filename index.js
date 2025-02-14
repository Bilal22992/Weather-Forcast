import axios from "axios";
import bodyParser from "body-parser";
import express from "express";

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.listen(3000,()=>{
    console.log("server running successfully");
})


app.get("/", async(req,res)=>{
    try {
        
        // const response = await axios.get("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99",{params:{appid:""}});
        // console.log(response.data);

    } catch (error) {
        console.log(error.message)
    }
})
