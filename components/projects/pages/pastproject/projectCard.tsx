import React from 'react';
import { Card, CardBody, CardFooter, Image } from "@heroui/react";



type datatype = {
    year: number;
    image: string;
    title: string;
    brief: string;
}



const Project: React.FC<datatype> = ({ image, title, brief }: datatype) => {

    return (
        <div className="pl-20">
            <Card className="w-[500px] h-[400px]">
                <CardBody className="p-0" >
                    <Image
                        alt="ảnh"
                        width="100%"
                        radius="md"
                        className="w-full object-cover"
                        src={image}

                    />

                    <div className="flex flex-col p-5">
                        <p className="font-semibold"> {title} </p>
                        <p className="font-normal">{brief} </p>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
};

export default Project;