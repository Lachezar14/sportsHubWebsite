import CreditCard from "./CreditCard";
import Features from "./Features";
import Something from "./Something";
import CreditCard2 from "./CreditCard2";
import supabase from "../supabaseClient";
import {useEffect} from "react";

export default function Main() {

    useEffect(async () => {

        let {data: users, error} = await supabase
            .from('users')
            .select('*')
        console.log(users)
    }, []);
    
    return (
        <section className="text-gray-600 body-font">
            <div className="ml-44 mr-24 mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div
                    className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-40 items-center text-center">
                    <h1 className="mb-5 sm:text-6xl text-5xl items-center Avenir xl:w-2/2 text-white">
                        We are making Stunning Websites
                    </h1>
                    <p className="mb-4 xl:w-3/4 text-gray-600 text-lg">
                        nine4 is a free to use website template for websites made with
                        Next.js and styled with Tailwind CSS
                    </p>
                    <div className="flex justify-center">
                        <a
                            className="inline-flex items-center px-5 py-3 mt-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-gray-900"
                            href="https://github.com/r1/nine4-2/"
                        >
                            <span className="justify-center">Find out more</span>
                        </a>
                    </div>
                </div>
                <div className="xl:mr-48 ml-24 sm:mr-0 sm:mb-28 mb-0 lg:mb-0 mr-48 md:pl-10">
                    <img
                        className="w-90 md:ml-1 ml-24"
                        alt="iPhone-12"
                        src="/images/mainPage.png"
                    ></img>
                </div>
            </div>
            <Features/>
            <CreditCard/>
            <CreditCard2/>
            <CreditCard/>
            <section className="relative">
                <div className="max-w-7xl bg-black rounded-3xl mx-auto px-4 mb-44 sm:px-6 text-center">
                    <div className="py-24 md:py-36">
                        <h1 className="mb-5 text-6xl Avenir font-semibold text-gray-900">
                            Subscribe to our newsletter
                        </h1>
                        <h1 className="mb-9 text-2xl font-semibold text-gray-600">
                            Enter your email address and get our newsletters straight away.
                        </h1>
                        <input
                            placeholder="jack@example.com"
                            name="email"
                            type="email"
                            autoComplete="email"
                            className="border border-gray-600 w-1/4 pr-2 pl-2 py-3 mt-2 rounded-md text-gray-800 font-semibold hover:border-gray-900"
                        ></input>{" "}
                        <a
                            className="inline-flex items-center px-14 py-3 mt-2 ml-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-gray-900"
                            href="/"
                        >
                            <span className="justify-center">Subscribe</span>
                        </a>
                    </div>
                </div>
            </section>
        </section>
    );
}
