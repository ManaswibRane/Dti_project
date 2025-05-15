const express=require("express")
const app=express();
app.use('/public', express.static('public'));
app.listen(8080,()=>{
    console.log("Listning on root");
})
app.get("/",(req,res)=>{
    res.render("Ridhima.ejs")
})
app.get("/quiz",(req,res)=>{
    res.render("Manaswi.ejs");
})
app.get("/planetsinfo",(req,res)=>{
     res.render("Nihira.ejs");
})
app.get("/earth",(req,res)=>{
        res.render("knowmoreEarth.ejs");
})