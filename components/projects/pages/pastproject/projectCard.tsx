import React from 'react';
import { Card, CardBody } from "@heroui/react";

type datatype = {
	_id: string;
	thumbnail: string;
	title: string;
	thumbnailDescription: string;
};

const Project: React.FC<datatype> = ({
	thumbnail,
	title,
	thumbnailDescription,
	_id,
}: datatype) => {
	return (
		<div className="pl-20">
			<Card className="w-[500px] h-[400px] bg-blueMist rounded-xl">
				<CardBody className="p-0 border-yellowCream">
					<img src={thumbnail} className="rounded-md w-full h-1/2" />
					<div className="flex flex-col p-5 w-full">
						<p className="font-semibold"> {title} </p>
						<p className="font-normal">{thumbnailDescription} </p>
					</div>
				</CardBody>
			</Card>
		</div>
	);
};

export default Project;