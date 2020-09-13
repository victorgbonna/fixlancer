const express=require("express")
const app = express()

app.set("views","views")
app.set("view engine","ejs")

app.get("/",(req,res)=>{
    res.render("index")
})


const PORT= process.env.PORT||4000
app.listen(PORT,()=>{
    console.log(`Now listening to port ${PORT}`)
})