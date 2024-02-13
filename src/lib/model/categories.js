const { default: mongoose } = require("mongoose");
import { categories } from '@/lib/model/categories';


const categoriesModel=new mongoose.Schema({
    title:String,
    image:String,
    rating:String,
    category:String,
    price:String,
    price:String,
})

mongoose.models={};

export const CategoriesFood=mongoose.models.categories || mongoose.model("categories",categoriesModel)