const express=require("express");
const router=require("./routes/routes")
const app=express()
const cors=require("cors")

require("./models/db")
app.use(express.json()) //check if json and pass //matches content type
app.use(cors())
app.use('/api/tasks',router)

//Server
const port=7000
app.listen(port,err=>{
if(err)console.log(err)
console.log(`Server is started at port number ${port}`)
})
