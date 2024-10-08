import React from "react";
import { Link, animateScroll as scroll } from 'react-scroll';
import {IconArrowNarrowDown} from '@tabler/icons-react'

export default function Header({ scrollToSubscribe }) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    
    return (
        <div className="top-0 w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out">
            <div className="flex flex-col ml-24 mr-36 px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                <div className="flex flex-row justify-between p-4">
                    <a
                        href="/"
                        className="text-lg font-semibold rounded-lg tracking-widest focus:outline-none focus:shadow-outline"
                    >
                        <img
                            className="w-80"
                            alt="SportsHub"
                            src="/images/eeee.png"
                        ></img>
                    </a>
                    <button
                        className="text-white cursor-pointer leading-none px-3 py-1 md:hidden outline-none focus:outline-none "
                        type="button"
                        aria-label="button"
                        onClick={(e) => {
                            e.preventDefault(); // Prevent default form submission
                            setNavbarOpen(!navbarOpen);
                            scrollToSubscribe(); // Invoke the callback to scroll to the subscribe section
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#191919"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-menu"
                        >
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    </button>
                </div>
                <div
                    className={
                        "md:flex flex-grow items-center" +
                        (navbarOpen ? " flex" : " hidden")
                    }
                >
                    <nav className="flex-col flex-grow ">
                        <ul className="flex flex-grow justify-end flex-wrap items-center">
                            <a
                                className="inline-flex items-center px-4 py-2 mt-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent rounded-lg text-md md:mt-0 md:ml-4 bg-gray-900"
                                href="/"
                            >
                                <span className="justify-center">Sign Up</span>
                                <IconArrowNarrowDown width="20" height="20" strokeWidth={2} color="white"/>
                            </a>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}
