const mongoose=require('mongoose')

const ReclamationShema =new mongoose.Schema({
    message:String,
    typeRec:String
})
mongoose.model("reclamation",ReclamationShema)

