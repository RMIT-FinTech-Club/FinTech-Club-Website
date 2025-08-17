import React from 'react';
import { Card, CardBody } from "@heroui/react";

type datatype = {
	_id: string;
	year: number;
	image_url: string;
	title: string;
	description: string;
};

const Project: React.FC<datatype> = ({
	image_url,
	title,
	description,
	_id,
	year,
}: datatype) => {
	return (
		<div className="pl-20">
			<Card className="w-[500px] h-[400px] bg-blueMist">
				<CardBody className="p-0 border-yellowCream">
					<img src={image_url} className="rounded-md w-full h-1/2" />
					<div className="flex flex-col p-5 w-full">
						<p className="font-semibold"> {title} </p>
						<p className="font-normal">{description} </p>
					</div>
				</CardBody>
			</Card>
		</div>
	);
};

export default Project;