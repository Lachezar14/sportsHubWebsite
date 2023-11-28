export default function FeaturesCard() {
    return (
        <div>
            <section className="bg-teal">
                <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-48 lg:py-24 lg:px-6">
                    <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                        <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">"But my friends don't play this sport"</h2>
                            <p className="mb-8 font-light text-black lg:text-xl">Don't worry! With Sports Hub finding and joining events is a breeze. Elevate your sports experience, even when your friends aren't up for the game.</p>
                            <ul role="list" className="pt-8 space-y-5  border-gray-200 my-7 dark:border-gray-700">
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Explore Thousands of Events</span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Socialize and Have Fun</span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Learn a new sport</span>
                                </li>
                            </ul>
                            <p className="mb-8 font-light text-black lg:text-xl">Sports Hub is your passport to a vibrant world of sports, whether you're flying solo or looking for companions.</p>
                        </div>
                        {/*<img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src="./images/feature-1.png" alt="dashboard feature image">*/}
                        <img
                        className="hidden w-90 mb-4 rounded-lg lg:mb-0 lg:flex"
                        alt="iPhone-12"
                        src="/images/Untitlwwwwwed.png"
                        ></img>
                    </div>
                    <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                        <img
                            className="hidden w-90 mb-4 rounded-lg lg:mb-0 lg:flex"
                            alt="iPhone-12"
                            src="/images/wqswqswsqwsd.png"
                        ></img>
                            <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                                <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Manage your events effortlessly!</h2>
                                <p className="mb-8 font-light text-black lg:text-xl">It doesn't matter if you join an existing event or create one of your own. With Sports Hub it has never been easier to manage all your sporting events and be always on schedule.</p>
                                <ul role="list" className="pt-8 space-y-5  my-7 dark:border-gray-700">
                                    <li className="flex space-x-3">
                                        <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Detailed Event Customization </span>
                                    </li>
                                    <li className="flex space-x-3">
                                        <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">View you past and future events</span>
                                    </li>
                                    <li className="flex space-x-3">
                                        <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Manage your schedule</span>
                                    </li>
                                </ul>
                                <p className="font-light text-black lg:text-xl">Sports Hub is best companion for sport events management. Install it and never worry about missing a session!</p>
                            </div>
                    </div>
                </div>
            </section>
        </div>
    )
}