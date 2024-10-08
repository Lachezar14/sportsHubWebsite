import CreditCard from "./CreditCard";
import Features from "./Features";
import FeaturesCard from "./FeaturesCard";
import CreditCard2 from "./CreditCard2";
import supabase from "../supabaseClient";
import {useEffect, useRef, useState} from "react";
import Hero from "./Hero";
import Header from "./Header";
import { Link } from 'react-scroll';

export default function Main() {
    
    const [email, setEmail] = useState(null);

    const ref = useRef(null);

    const handleClick = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                let {data: users, error} = await supabase
                    .from('users')
                    .select('*');
                console.log(users);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const isValidEmail = (email) => {
        // Regular expression for a simple email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const signUp = async (email) => {

        if (!isValidEmail(email)) {
            return;
        }


        try {
            const {data, error} = await supabase
                .from('users')
                .insert([
                    {email: email},
                ])
                .select()
            
        } catch (error) {
            console.error("Error signing up:", error);
        }
    }

    return (
        <section className="text-gray-600 body-font">
            <Header scrollToSubscribe={handleClick} />
            <Hero/>
            <Features/>
            <div className="mb-40">
                <FeaturesCard/>
            </div>
            <section className="relative" id="subscribe">
                <div className="max-w-7xl bg-black rounded-3xl mx-auto px-4 mb-44 sm:px-6 text-center">
                    <div className="py-24 md:py-24">
                        <div className="mx-auto max-w-screen-md sm:text-center">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">Join the waitlist to get the app!</h2>
                            <p className="mx-auto mb-8 max-w-2xl font-light text-gray-300 md:mb-12 sm:text-xl dark:text-gray-400">
                                If you like Sports Hub and want to try it 
                                sign up with your email to be first to get notified when the app is live!</p>
                            <form action="#">
                                <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                                    <div className="relative w-full">
                                        <label htmlFor="email"
                                               className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email
                                            address</label>
                                        <div
                                            className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                            {/*<svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                                                 viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                            </svg>*/}
                                        </div>
                                    </div>
                                        {/*
                                        <input
                                            className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Enter your email" type="email" id="email" required=""
                                            onChange={(e) => setEmail(e.target.value)}
                                        >
                                        </input>
                                    <div>
                                        <button 
                                            className="py-3 px-5 w-full  text-sm font-medium  text-black rounded-lg border cursor-pointer bg-teal border-teal sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                            onClick={() => signUp(email)}>
                                                Join 
                                        </button>
                                    </div>*/}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}
