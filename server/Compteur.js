const mongoose=require('mongoose')

const CompteurShema =new mongoose.Schema({
    messageCompt:String,
    payereCompt:String
})
mongoose.model("compteur",CompteurShema)

