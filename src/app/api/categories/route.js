import { connectionSrt } from "@/lib/db";
import categories, { CategoriesFood } from "@/lib/model/categories";
import mongoose from "mongoose";
import { NextResponse } from "next/server";





export async function GET(){
    let data=[];
    try{
            await mongoose.connect(connectionSrt)
            data=await CategoriesFood.find();

    }
    catch(error){
        data={success:false}
    }

    return NextResponse.json({result:data,success:true})
}