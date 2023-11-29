import supabase from "../supabaseClient";
import {useEffect, useState} from "react";
import {IconCheck, IconUserPlus} from "@tabler/icons-react";

export default function Hero() {

    const [email, setEmail] = useState(null);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [users, setUsers] = useState([]);
    const [errorText, setErrorText] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let { data: usersData, error } = await supabase
                    .from('users')
                    .select('*');
                if (!error) {
                    setUsers(usersData);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    
    const isEmailAlreadySignedUp = (email) => {
        return users.some((user) => user.email === email);
    };

    const isValidEmail = (email) => {
        // Regular expression for a simple email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const signUp = async (email) => {
        
        if (!isValidEmail(email)) {
            setError(true);
            setErrorText("Please enter a valid email address.");
            return;
        }

        if (isEmailAlreadySignedUp(email)) {
            setError(true);
            setErrorText("You have already signed up.");
            return;
        }
        

        try {
            const {data, error} = await supabase
                .from('users')
                .insert([
                    {email: email},
                ])
                .select()

            if (!error) {
                setError(false)
                setSuccess(true);
                setTimeout(() => {
                    setSuccess(false);
                }, 4000);
            }
        } catch (error) {
            console.error("Error signing up:", error);
        }
    }

    return (
        <div className="ml-44 mr-24 mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div
                className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-40 items-center text-center">
                <h1 className="mb-5 text-8xl font-custom1 items-center Avenir xl:w-2/2 text-white">
                    Revolutionize your sports experience
                </h1>
                <p className="mb-4 mt-5 xl:w-3/4 text-black text-xl font-custom13">
                    Sign up below to get the SportsHub app and be the first to experience the new way of experiencing sports events.
                </p>
                <div className="flex justify-center">
                    <input
                        type="email"
                        placeholder="jack@example.com"
                        name="email"
                        autoComplete="email"
                        className="border border-gray-500 pr-28 pl-2 py-3 mt-2 rounded-md text-gray-900 font-semibold hover:border-gray-700 bg-white"
                        onChange={(e) => setEmail(e.target.value)}
                    />{" "}
                    <button
                        className="inline-flex items-center px-8 py-3 mt-2 ml-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent border border-black rounded-lg bg-black"
                        onClick={() => signUp(email)}>
                        Join the waitlist
                    </button>
                </div>
                {success ? <div className="bg-teal text-center py-4 lg:px-4">
                    <div className="pr-20 pl-10 pb-1 pt-1 ml-12 bg-green-700 items-center text-white leading-none lg:rounded-full flex lg:inline-flex" role="alert">
                        <div className="flex rounded-full uppercase px-2 py-1 text-xs font-bold mr-3">
                            <IconCheck width="20" height="20" strokeWidth={2} color="white"/>
                        </div>
                        <span className="font-semibold mr-2 text-white flex-auto">Thanks for signing up!</span>
                    </div>
                </div> : <p></p>}
                {error ? <div className="bg-teal text-center py-4 lg:px-4">
                    <div className="pr-20 pl-10 pb-1 pt-1 ml-12 bg-teal items-center text-white leading-none lg:rounded-full flex lg:inline-flex" role="alert">
                        <span className="font-semibold mr-2 text-red-900 flex-auto">{errorText}</span>
                    </div>
                </div> : <p></p>}
            </div>
            <div className="xl:mr-48 ml-24 sm:mr-0 sm:mb-28 mb-0 lg:mb-0 mr-48 md:pl-10">
                <img
                    className="w-90 md:ml-1 ml-24"
                    alt="iPhone-12"
                    src="/images/mainPage.png"
                ></img>
            </div>
        </div>
    );
}