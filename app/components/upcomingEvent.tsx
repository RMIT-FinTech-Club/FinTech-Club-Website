"use client";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import CardEvent from "./CardEvent";
import axios from "axios";

const settings = {
    className: "w-full",
    dots: false,
    infinite: true,
    autoplay: true,
    autoSpeed: 1000,
    dragagable: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    initialSlide: 0,
};

const UpcomingEvent = () => {

    const [upcomingEvents, setUpcomingEvents] = useState([]);

    useEffect(() => {
        axios.get("/api/v1/events/upcomming")
            .then((response) => {
                setUpcomingEvents(response.data.data);
                console.log(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <section className="flex flex-col px-side-margin-mobile md:px-side-margin gap-5 w-screen py-2 lg:py-12">
            <h1 className="text-3xl font-bold mx-auto text-ft-primary-blue">
                PROJECTS
            </h1>
            <section className="mx-auto overflow-hidden w-full">
                <section className="flex flex-row justify-between items-center w-full mb-5 gap-4">
                    <hr className="w-1/3  border-b-2 border-solid border-ft-primary-yellow md:hidden" />
                    <div className="text-ft-primary-yellow text-2xl font-semibold">
                        2024
                    </div>
                    <hr className="w-1/3  border-b-2 border-solid border-ft-primary-yellow  md:w-full" />
                </section>
                <Slider {...settings}>
                    {upcomingEvents.map((event, index) => {

                        // Split date to get month and day
                        const dateMonth = (event['date'] as string).split(' ')

                        return (
                            <CardEvent
                                key={event['_id']}
                                eventName="No name"
                                location={event['location']}
                                title={event['description']}
                                detail="Lorem ipsum dolor sit amet, consectetur ..."
                                timeOnHour={event['time']}
                                timeOnDay={dateMonth[0]}
                                timeOnMonth={dateMonth[1]}
                            />
                        )  
                    })}
                </Slider>
            </section>
        </section>
    );
};

export default UpcomingEvent;