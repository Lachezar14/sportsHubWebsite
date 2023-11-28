export default function Hero() {

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
                    <button className="inline-flex items-center px-5 py-3 mt-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent rounded-lg bg-gray-900"
                    >
                        Find out more
                    </button>
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
    );
}