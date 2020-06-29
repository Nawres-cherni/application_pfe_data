const mongoose=require('mongoose')

const NoterServiceShema =new mongoose.Schema({
    starCount:Number,

})
mongoose.model("noterservice",NoterServiceShema)

