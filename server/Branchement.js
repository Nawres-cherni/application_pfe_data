const mongoose=require('mongoose')

const BranchementShema =new mongoose.Schema({
    messageBranch:String,
    payerBranch:String,
    typeBranch:String
})
mongoose.model("branchement",BranchementShema)

