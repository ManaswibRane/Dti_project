const express=require("express")
const app =express();
app.listen(8080,()=>{
    console.log("listining on port");
})
app.get("/",(req,res)=>{
    res.render("Ridhima/index.ejs")
})