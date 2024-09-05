import connectMongoDb from "@/app/(backend)/libs/mongodb";
import Podcast from "@/app/(backend)/models/podcast";
import { type NextRequest, NextResponse } from "next/server";
import {
	checkArray,
	checkData,
	checkFile,
	checkFiles,
	checkInstanceOfFile,
	getBuffer,
	randomName,
	uploadFileData,
} from "./actions";

connectMongoDb();
interface Author {
	name: string;
	title: string;
	profileImageUrl: string;
}
export async function GET() {
	try {
		const podcasts = await Podcast.find({});
		return NextResponse.json(podcasts, { status: 200 });
	} catch (error: any) {
		console.error(error.message);
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}

export async function POST(req: NextRequest) {
	try {
		const checkDataList = [
			"title",
			"description",
			"publisher",
			"publicationDate",
			"language",
		];
		const checkArrayList = ["authors", "authorFiles"];
		const form = await req.formData();
		const title = form.get("title") as string;
		const description = form.get("description") as string;
		const publisher = form.get("publisher") as string;
		const publicationDate = form.get("publicationDate") as string;
		const language = form.get("language") as string;
		let authors = form.getAll("authors[]").map(author => JSON.parse(author as string)) as Array<Author>;
		const authorFiles = form.getAll("authorFiles[]") as Array<File>;
		const audioFile = form.get("audioFile") as File;
		const thumnailFile = form.get("thumnailFile") as File;

		//check input
		for (let i = 0; i < checkDataList.length; ++i) {
			checkData(checkDataList[i], form);
		}
		for (let i = 0; i < checkArrayList.length; ++i) {
			checkArray(checkArrayList[i], form);
		}
		for (let i = 0; i < authorFiles.length; ++i) {
			checkInstanceOfFile(authorFiles[i], `authorFiles[${i}]`);
		}
		checkInstanceOfFile(audioFile, "authorFile");
		checkInstanceOfFile(thumnailFile, "thumnailFile");

		// authors = authors.map((item) => JSON.parse(item));

		if (
			checkFile(audioFile) &&
			checkFile(thumnailFile) &&
			checkFiles(authorFiles)
		) {
			const uploadObject = {
				title: title,
				description: description,
				authors: authors,
				publisher: publisher,
				publicationDate: publicationDate,
				language: language,
				thumnailFileUrl: "",
				audioFileUrl: "",
			};
			const audioFileName = randomName();
			const thumnailFileName = randomName();

			if (audioFile instanceof File) {
				await uploadFileData(
					await getBuffer(audioFile),
					audioFileName,
					audioFile.type,
					"Projects/Media"
				);
			}
			if (thumnailFile instanceof File) {
				await uploadFileData(
					await getBuffer(thumnailFile),
					thumnailFileName,
					thumnailFile.type,
					"Projects/Media"
				);
			}

			uploadObject.thumnailFileUrl = `https://d2prwyp3rwi40.cloudfront.net/Projects/Media/${thumnailFileName}`;
			uploadObject.audioFileUrl = `https://d2prwyp3rwi40.cloudfront.net/Projects/Media/${audioFileName}`;


			for (let i = 0; i < authorFiles.length; ++i) {
				const authorFileName = randomName();

				if (authorFiles[i] instanceof File) {
					await uploadFileData(
						await getBuffer(authorFiles[i]),
						authorFileName,
						authorFiles[i].type,
						"Projects/Media"
					);
				}
				uploadObject.authors[i].profileImageUrl =
					`https://d2prwyp3rwi40.cloudfront.net/Projects/Media/${authorFileName}`;
			}

			const podcast = await Podcast.create(uploadObject);
			podcast.save();
			return NextResponse.json(
				{ message: "create podcast success!" },
				{ status: 201 },
			);
		} else {
		}
	} catch (error: any) {
		console.error(error.message);
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
