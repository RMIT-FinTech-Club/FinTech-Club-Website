import connectMongoDb from "@/app/(backend)/libs/mongodb";
import Member from "@/app/(backend)/models/member";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(
	req: NextRequest,
	{ params }: { params: { id: string } },
) {
	const memberId = params.id;

	connectMongoDb();

	const member = await Member.findById(memberId);

	if (!member) {
		return NextResponse.json({
			status: 404,
			json: {
				message: "Member not found",
			},
		});
	} else {
		return NextResponse.json({
			status: 200,
			json: member,
		});
	}
}
