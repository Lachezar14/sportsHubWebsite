﻿import {useEffect} from "react";
import {Icon24Hours} from "@tabler/icons-react";
import {white} from "tailwindcss/colors";
import {IconUserPlus} from "@tabler/icons-react";
import {IconCalendarPlus} from "@tabler/icons-react";
import {IconListCheck} from "@tabler/icons-react";
import {IconSortAscendingLetters} from "@tabler/icons-react";

export default function Features() {
  
    return (
        <section className="bg-black pt-20 pb-8 lg:pt-[120px] lg:pb-[70px] flex justify-center">
            <div className="container">
                <div className="mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mb-12 mx-auto max-w-[485px] lg:mb-[70px] text-center">
                            <h2 className="mb-20 text-6xl font-custom1 text-white dark:text-white">
                                Main Features
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="-mx-4 mb-10 flex flex-wrap">
                    <div className="w-full px-4 md:w-1/2 lg:w-1/4">
                        <div className="wow fadeInUp group mb-12" data-wow-delay=".1s">
                            <div
                                className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary">
              <span
                  className="absolute top-0 left-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"></span>
                            </div>
                            <div className="flex flex-col items-center">
                            <IconUserPlus width="60" height="60" strokeWidth={2} color="white"/>
                            <h4 className="mb-3 mt-5 text-xl font-bold text-white dark:text-white">
                                Discover and Join Nearby Events
                            </h4>
                            <p className="mb-8 text-gray-300 dark:text-dark-6 lg:mb-9">
                                Never miss an opportunity to play your favorite sport. With SportsHub's location-based event discovery, easily find and join sports events happening in your vicinity.
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2 lg:w-1/4">
                        <div className="wow fadeInUp group mb-12" data-wow-delay=".15s">
                            <div
                                className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary">
              <span
                  className="absolute top-0 left-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"></span>
                            </div>
                            <div className="flex flex-col items-center">
                                <IconCalendarPlus width="60" height="60" strokeWidth={2} color="white"/>
                                <h4 className="mb-3 mt-5 text-xl font-bold text-white dark:text-white">
                                    Sports Event Creation Made Easy
                                </h4>
                                <p className="mb-8 text-gray-300 dark:text-dark-6 lg:mb-9">
                                    SportsHub takes the hassle out of creating engaging sports gatherings, making it easy for you to set up and share your events.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2 lg:w-1/4">
                        <div className="wow fadeInUp group mb-12" data-wow-delay=".2s">
                            <div
                                className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary">
              <span
                  className="absolute top-0 left-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"></span>
                            </div>
                            <div className="flex flex-col items-center">
                                <IconListCheck width="60" height="60" strokeWidth={2} color="white"/>
                                <h4 className="mb-3 mt-5 text-xl font-bold text-white dark:text-white">
                                    Effortless Event Management
                                </h4>
                                <p className="mb-8 text-gray-300 dark:text-dark-6 lg:mb-9">
                                    SportsHub simplifies participant tracking, making event management a breeze for organizers.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2 lg:w-1/4">
                        <div className="wow fadeInUp group mb-12" data-wow-delay=".25s">
                            <div
                                className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary">
              <span
                  className="absolute top-0 left-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"></span>
                            </div>
                            <div className="flex flex-col items-center">
                                <IconSortAscendingLetters width="60" height="60" strokeWidth={2} color="white"/>
                                <h4 className="mb-3 mt-5 text-xl font-bold text-white dark:text-white">
                                    Support for Multiple Sports
                                </h4>
                                <p className="flex justify-center mb-8 text-gray-300 dark:text-dark-6 lg:mb-9">
                                    Enjoy versatility with SportsHub's support for multiple sports. Whether it's basketball, soccer, or any other sport, our platform caters to diverse sporting interests
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}