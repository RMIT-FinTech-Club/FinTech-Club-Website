import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import Podcast from "../models/podcast";
import connectMongoDB from "../libs/mongodb";
import type { Podcast as PodcastType } from "../types/podcast";

/**
 * Function: Get all podcasts with filtering and pagination.
 */
export async function getPodcasts(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const labels = searchParams.getAll("labels");
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "5", 10);
  const skip = (page - 1) * limit;

  // Validate pagination parameters
  if (page < 1 || limit < 1) {
    return NextResponse.json(
      { message: "Invalid pagination parameters" },
      { status: 400 }
    );
  }

  try {
    await connectMongoDB();

    // Build query - this handles cases where `labels` is empty or present
    const query: any = {};
    if (labels.length > 0) {
      // Using $in to find podcasts that have any of the specified labels
      query.labels = {
        $in: labels.map((label) => new RegExp(`^${label}$`, "i")),
      };
    }
    
    // Perform queries to get total count and the paginated podcasts
    const totalPodcasts = await Podcast.countDocuments(query);
    const totalPages = Math.ceil(totalPodcasts / limit);
    
    const podcasts = await Podcast.find(query)
      .select("_id title summary thumbnail_url labels publicationDate")
      .sort({ publicationDate: -1 })
      .skip(skip)
      .limit(limit);

    // Always return the same data structure for consistency
    return NextResponse.json(
      { 
        podcasts, 
        totalPages 
      }, 
      { status: 200 }
    );

  } catch (error) {
    console.error("Error fetching podcasts:", error);
    return NextResponse.json(
      { error: "Cannot fetch podcasts" },
      { status: 500 }
    );
  }
}

/**
 * Function: Get a single podcast by its ID and its related podcasts.
 */
export async function getPodcastById(id: string) {
  try {
    await connectMongoDB();
    const podcast = await Podcast.findById(id);

    if (!podcast) {
      return NextResponse.json({ error: "Podcast not found" }, { status: 404 });
    }

    // Find related podcasts based on the main podcast's labels
    const relatedPodcasts = await Podcast.find({
      labels: { $in: podcast.labels },
      _id: { $ne: podcast._id }, // Corrected: Exclude the main podcast
    })
      .select("_id title publicationDate thumbnail_url labels")
      .sort({ publicationDate: -1 })
      .limit(5);

    return NextResponse.json(
      { podcast, suggestedRelatedPodcasts: relatedPodcasts },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Cannot fetch podcast" },
      { status: 500 }
    );
  }
}

/**
 * Function: Create a new podcast.
 */
export async function createPodcast(data: Omit<PodcastType, "_id" | "createdAt" | "updatedAt">) {
  try {
    await connectMongoDB();
    const podcast = await Podcast.create(data);
    return NextResponse.json(
      { message: "Podcast created successfully", podcast },
      { status: 201 }
    );
  } catch (error) {
    console.error("Create podcast error:", error);
    return NextResponse.json(
      { error: "Cannot create podcast" },
      { status: 500 }
    );
  }
}

/**
 * Function: Update an existing podcast.
 */
export async function updatePodcast(id: string, data: Partial<PodcastType>) {
  try {
    await connectMongoDB();
    const podcast = await Podcast.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });

    if (!podcast) {
      return NextResponse.json({ error: "Podcast not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Podcast updated successfully", podcast },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Cannot update podcast" },
      { status: 500 }
    );
  }
}

/**
 * Function: Delete a podcast.
 */
export async function deletePodcast(id: string) {
  try {
    await connectMongoDB();
    const podcast = await Podcast.findByIdAndDelete(id);

    if (!podcast) {
      return NextResponse.json({ error: "Podcast not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Podcast deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Cannot delete podcast" },
      { status: 500 }
    );
  }
}
