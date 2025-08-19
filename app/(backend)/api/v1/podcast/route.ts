import type {NextRequest} from "next/server";
import { addNewPodcast, getAllPodcasts, getPodcastByLabel } from "@/app/(backend)/controllers/podcastController";

export async function GET(request:NextRequest) {
    const {searchParams} = new URL(request.url);
    const labels = searchParams.getAll("labels");
    if(labels.length > 0 ){
        return getPodcastByLabel(request);
    }else {
        return getAllPodcasts(request)
        
    }
}
export async function POST(request: NextRequest){
    const podcast = await request.json();
    return addNewPodcast(podcast);
}
