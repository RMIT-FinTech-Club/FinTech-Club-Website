import ExecutiveBoard from "../models/executiveBoard";
import connectMongoDB from "../libs/mongodb";
import { NextResponse } from "next/server";

export async function addExecutiveBoardMember(data:{
    name: string;
    position: string;
    generation: string;
    photo_url: string;
    linkedin_url: string;
}){
    try { await connectMongoDB();
        const newMember = await ExecutiveBoard.create(data);
        return NextResponse.json({Message: "Executive Board member added successfully", newMember}, {status: 201});
    }
    catch (error) {
        console.error("Error adding executive board member:", error);
        return NextResponse.json({error: "Cannot add executive board member, so saddddd"}, {status: 500});
    }
    
}