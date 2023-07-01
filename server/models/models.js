const mongoose=require("mongoose");

const TaskSchema=new mongoose.Schema({

    todo:String,
    isComplete:Boolean
})

const Task=mongoose.model('task',TaskSchema) //singulare form of collection 
//finds the database(todolists) plural form
module.exports=Task