const mongoose=require('mongoose')

const newsSchema=mongoose.Schema({

    title:{
        type:String
    },
    details:{
        type:String
    },
    date:{
        type:String
    }
})

module.exports=mongoose.model('News',newsSchema)