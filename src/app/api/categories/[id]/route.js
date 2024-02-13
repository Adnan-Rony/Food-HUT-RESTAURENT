import { connectionSrt } from "@/lib/db";
import { CategoriesFood } from "@/lib/model/categories";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request,content) {

    const productId=content.params.id;
    const record={_id:productId};
  
    await mongoose.connect(connectionSrt);
    const result=await CategoriesFood.findById(record)
    return NextResponse.json({result,success:true})
  
}
