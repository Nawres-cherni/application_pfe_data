const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
require('./Reclamation')
require('./Branchement')
require('./Compteur')
require('./NoterService')






app.use(bodyParser.json())

const Reclamation=mongoose.model("reclamation")
const Branchement=mongoose.model("branchement")
const Compteur=mongoose.model("compteur")
const NoterService=mongoose.model("noterservice")






const mngoUri="mongodb+srv://admine:ZjwxeImQD00v6DvC@cluster0-280yh.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(mngoUri,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
mongoose.connection.on("connected",()=>{
    console.log("Mabroukk enty connecte")
})
mongoose.connection.on("error",(err)=>{
    console.log("error",err)
})

app.get('/',(req,res)=>{
    Reclamation.find({}).then(data=>{
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
    
  
})


app.post('/send-data',(req,res)=>{
   const reclamation=new Reclamation({
    message:req.body.message,
    //payer:req.body.payer,
    typeRec:req.body.typeRec
   })
     reclamation.save()
     .then(data=>{
        console.log(data)
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
   
})


app.post('/delete',(req,res)=>{
    Reclamation.findByIdAndRemove(req.body.id)    
    .then(data=>{
     console.log(data)
     res.send(data)
 }).catch(err=>{
  console.log(err)
 })
  })
 



app.post('/update',(req,res)=>{
    Reclamation.findByIdAndUpdate(req.body.id,{
     message:req.body.message,
     //distrbt:req.body.distrbt,
     //typeRec:req.body.typeRec
    })
    .then(data=>{
        console.log(data)
        res.send(data)
    }).catch(err=>{
     console.log(err)
    })
    
 })





 
app.get('/',(req,res)=>{
    Branchement.find({}).then(data=>{
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
    
  
})
app.post('/envoyer-Branchement',(req,res)=>{
   const branchement=new Branchement({
    messageBranch:req.body.messageBranch,
    payerBranch:req.body.payerBranch,
    //typeRec:req.body.typeRec
   })
   branchement.save()
     .then(data=>{
        console.log(data)
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
   
})



app.get('/',(req,res)=>{
    Compteur.find({}).then(data=>{
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
    
  
})
app.post('/envoyer-Compteur',(req,res)=>{
   const compteur=new Compteur({
    messageCompt:req.body.messageCompt,
    payereCompt:req.body.payereCompt,
    //typeRec:req.body.typeRec
   })
   compteur.save()
     .then(data=>{
        console.log(data)
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
   
})

app.post('/envoyer-noterService',(req,res)=>{
    const noterservice=new NoterService({
     starCount:req.body.starCount,

    })
    noterservice.save()
      .then(data=>{
         console.log(data)
         res.send(data)
     }).catch(err=>{
         console.log(err)
     })
    
 })
 
 




 app.listen(3000,()=>{
    console.log("server running")
})