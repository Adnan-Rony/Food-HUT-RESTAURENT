const { default: mongoose } = require("mongoose");


const foodModel= new mongoose.Schema({
    picture:String,
    name:String,
    categories:String,
    price:String,
    description:String,
    rating:String,
})

mongoose.models={};

export const Food=mongoose.models.foods || mongoose.model("specialloffers",foodModel)