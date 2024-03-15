const mongoose = require('mongoose');
const CarSchema = new mongoose.Schema({
    ten:{
        type:String,
        require:true
    },
    namSX:{
        type:String,
    },
    hang:{
        type:String,
        require:true
    },
    gia:{
        type:Number,
        require:true
    },
})
const CarModel = new  mongoose.model('car',
CarSchema)
module.exports = CarModel;