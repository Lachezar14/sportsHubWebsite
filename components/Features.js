﻿import {useEffect} from "react";
import {Icon24Hours} from "@tabler/icons-react";

export default function Features() {
    useEffect(() => {
        // This script runs after the component has mounted
        document.documentElement.classList.add('js');
    }, []);

    return (
        <section className="bg-black pt-20 pb-8 lg:pt-[120px] lg:pb-[70px] flex justify-center">
            <div className="container">
                <div className="mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mb-12 mx-auto max-w-[485px] lg:mb-[70px] text-center">
            <span className="mb-2 block text-lg font-semibold text-white">
              Features
            </span>
                            <h2 className="mb-3 text-3xl font-bold text-white dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
                                Main Features Of Play
                            </h2>
                            <p className="text-white text-body-color dark:text-dark-6">
                                There are many variations of passages of Lorem Ipsum available
                                but the majority have suffered alteration in some form.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 md:w-1/2 lg:w-1/4">
                        <div className="wow fadeInUp group mb-12" data-wow-delay=".1s">
                            <div
                                className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary">
              <span
                  className="absolute top-0 left-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"></span>
                            </div>
                            <Icon24Hours width="40" height="40"/>
                            <h4 className="mb-3 text-xl font-bold text-white dark:text-white">
                                Free and Open-Source
                            </h4>
                            <p className="mb-8 text-white dark:text-dark-6 lg:mb-9">
                                Lorem Ipsum is simply dummy text of the printing and industry.
                            </p>
                        </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2 lg:w-1/4">
                        <div className="wow fadeInUp group mb-12" data-wow-delay=".15s">
                            <div
                                className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary">
              <span
                  className="absolute top-0 left-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"></span>
                            </div>
                            <h4 className="mb-3 text-xl font-bold text-white dark:text-white">
                                Multipurpose Template
                            </h4>
                            <p className="mb-8 text-white dark:text-dark-6 lg:mb-9">
                                Lorem Ipsum is simply dummy text of the printing and industry.
                            </p>
                        </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2 lg:w-1/4">
                        <div className="wow fadeInUp group mb-12" data-wow-delay=".2s">
                            <div
                                className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary">
              <span
                  className="absolute top-0 left-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"></span>
                            </div>
                            <h4 className="mb-3 text-xl font-bold text-white dark:text-white">
                                High-quality Design
                            </h4>
                            <p className="mb-8 text-white dark:text-dark-6 lg:mb-9">
                                Lorem Ipsum is simply dummy text of the printing and industry.
                            </p>
                        </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2 lg:w-1/4">
                        <div className="wow fadeInUp group mb-12" data-wow-delay=".25s">
                            <div
                                className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary">
              <span
                  className="absolute top-0 left-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"></span>
                            </div>
                            <h4 className="mb-3 text-xl font-bold text-white dark:text-white">
                                All Essential Elements
                            </h4>
                            <p className="mb-8 text-white dark:text-dark-6 lg:mb-9">
                                Lorem Ipsum is simply dummy text of the printing and industry.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}