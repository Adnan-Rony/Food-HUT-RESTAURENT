import { connectionSrt } from "@/lib/db";
import { Food } from "@/lib/model/food";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function GET(){

    let data=[];

    try{
        await mongoose.connect(connectionSrt)
        data=await Food.find();
    }
    catch (error){
        data={success:false}
    }

    return NextResponse.json({result:data,success:true})
}