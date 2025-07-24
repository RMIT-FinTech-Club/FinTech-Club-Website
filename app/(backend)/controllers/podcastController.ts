import { NextRequest, NextResponse } from "next/server";
import Podcast from "../models/podcast";
import connectMongoDB from "../libs/mongodb";
import type { Podcast as PodcastType } from "../types/podcast";

export async function addNewPodcast (data: Omit< PodcastType, '_id' | 'creatAt' | 'updatedAt'>) {
    try {
        await connectMongoDB();
        const newPodcast = await Podcast.insertMany(data);
        return NextResponse.json(
            {message: "Podcast added successfully", newPodcast},
            {status: 201}
        );
    }
    catch (error) {
        return NextResponse.json(
            {error: "Cannot add podcast"},
            {status: 500});
    }
}

export async function updatePodcast(id: String, data: Partial<PodcastType>) {
    try {
        await connectMongoDB();
        const updatedPodcast = await Podcast.findByIdAndUpdate(id, data,{
            new: true,
            runValidators: true
        });
        if (!updatedPodcast) {
            return NextResponse.json(
                {message: "Podcast not found"},
                {status: 404});
        }else{
            return NextResponse.json(
            {message: `Update successful the podcast with id: ${id}`, updatedPodcast},
            {status: 200}
        )
        }
}
    catch (error) {
        return NextResponse.json(
            {error: "Failed to update"},
            {status: 500});
}
}

export async function deletePodcast(id: String) {
    try{
        await connectMongoDB();
        const deletedPodcast = await Podcast.findByIdAndDelete(id);
        if(!deletedPodcast){
            return NextResponse.json(
            {error: "Podcast not found"},
            {status: 404}
            )
        }
        return NextResponse.json(
            {message:"Delete podcast successfully"},
            {status: 200}
    )

    }catch(error){
        return NextResponse.json(
            {error:"Cannot delete podcast"},
            {status:500})
    }
}

export async function getAllPodcasts(request:NextRequest){
    const { searchParams } = new URL(request.url);

    const labels = searchParams.getAll("labels");
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "5", 10);
    const skip = (page - 1) * limit;

// If no label, page, or limit is provided, return the latest 5 articles  
  if ( labels.length === 0 && !request.nextUrl.searchParams.has("page") && !request.nextUrl.searchParams.has("limit")) {  
    const lastestArticles = await Podcast.find({}).sort({publicationDate: -1 }).limit(5);
    return NextResponse.json(lastestArticles, { status: 200 });
  }
// Validate pagination parameters
  if (page < 1 || limit < 1) {
    return NextResponse.json({ message: "Invalid pagination parameters" }, { status: 400 });
  }
    try{
        await connectMongoDB();
        const podcast = await Podcast.find({}).sort({publicationDate: -1}).skip(skip).limit(limit); 
        return NextResponse.json(podcast, {status: 200});
    }catch(error){
        return NextResponse.json(
            {error: "Cannot fetch all the podcasts"},
            {status: 500})
 }
}
export async function getPodcastById(id: string) {
    try{
        await connectMongoDB();
        const podcast = await Podcast.findById(id);
        if (!podcast){
            return({message: `Podcast with id: ${id} is not found`})
        }
        const relatedPodcasts = await Podcast.find({
            labels: {$in: podcast.labels},
            _id: {$ne: podcast._id}  //bug: $ne not $en
        }).sort({publicationDate: -1}).limit(5);
        
        const suggestedRelatedPodcast = relatedPodcasts.map((relatedPodcast) => ({
            _id: relatedPodcast._id,
            title: relatedPodcast.title,
            publicationDate: relatedPodcast.publicationDate,
            thumbnail_url: relatedPodcast.thumbnail_url,
            labels: relatedPodcast.labels
        }));
        return NextResponse.json({podcast, suggestedRelatedPodcast},{status: 200})   
    
    }catch(error){
        return NextResponse.json(
            {Message:"Error, cannot get the podcast with given ID"},
            {status: 500})
    }
}
//Get Podcast By Labels
export async function getPodcastByLabel(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const labels = searchParams.getAll("labels");
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "5", 10);
  const skip = (page - 1) * limit;

// If no label, page, or limit is provided, return the latest 5 articles  
  if ( labels.length === 0 && !request.nextUrl.searchParams.has("page") && !request.nextUrl.searchParams.has("limit")) {  
    const lastestArticles = await Podcast.find({}).sort({publicationDate: -1 }).limit(5);
    return NextResponse.json(lastestArticles, { status: 200 });
  }
// Validate pagination parameters
  if (page < 1 || limit < 1) {
    return NextResponse.json({ message: "Invalid pagination parameters" }, { status: 400 });
  }

  try {
    await connectMongoDB();
     // Build query
    const query: any = {};
    // 2 If labels are provided
    if (labels.length ===1) {
      query.labels = {
        $in: labels.map(label => new RegExp(`^${label}$`, "i"))
      };
    }else {
      query.labels = {
        $all: labels.map(label => new RegExp(`^${label}$`, "i"))
      };
    }

    const totalArticles = await Podcast.countDocuments(query);
    const totalPages = Math.ceil(totalArticles / limit);
    //
    const articles = await Podcast.find(query).sort({publicationDate: -1 }).skip(skip).limit(limit);
    if(articles.length === 0){
      return NextResponse.json({
        message: "No articles with your selected lables"
      }
      )
    }else{  
      return NextResponse.json(
        {articles,},
        {status: 200 }
      );
    }
    
  } catch (error) {
    console.error("Error in GET /article:", error);
    return NextResponse.json(
      { error: "Cannot fetch articles" },
      { status: 500 }
    );
  }
}

/*
export async function pagination(request: NextRequest){
    const {searchParams} = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "5", 10);
    const skip = (page - 1) * limit

    // Validate pagination parameters
  if (page < 1 || limit < 1) {
    return NextResponse.json({ message: "Invalid pagination parameters" }, { status: 400 });
  }
  */
