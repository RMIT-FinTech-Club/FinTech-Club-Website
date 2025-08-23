import React from 'react';
import { Card, CardBody } from "@heroui/react";

type datatype = {
	image_url: string;
	title: string;
	description: string;
};

const Project: React.FC<datatype> = ({
	image_url,
	title,
	description,
}: datatype) => {
	return (
		<div className="pl-20">
			<Card className="w-[500px] h-[400px] bg-blueMist">
				<CardBody className="p-0 border-yellowCream">
					<img src={image_url} className="rounded-md w-full h-[250px]" />
					<div className="flex flex-col p-5 w-full h-[150px]">
						<p className="font-semibold text-black">{title}</p>
						<p className="font-normal text-black">{description} </p>
					</div>
				</CardBody>
			</Card>
		</div>
	);
};

export default Project;