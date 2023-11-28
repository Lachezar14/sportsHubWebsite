import React, {useEffect} from "react";
import BaseSection from "./base/Section";
import LandingListItem from "./base/ListItem";


export default function CreditCard() {
    
    return (
        <section className="w-full my-36 bg-white">
            <BaseSection data-aos="fade-down" >
                <div className="col-span-12 lg:col-span-7">
                    <div className="w-full">
                        <img
                            className="w-90 md:ml-1 ml-24"
                            alt="iPhone-12"
                            src="/images/SportsHub.png"
                        ></img>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-5 space-y-6 px-4 sm:px-6 mt-20">
                    <h2 className="text-4xl font-semibold">
                        Introducing the{" "}
                        <span className="text-white">NEFA</span> Credit Card
                    </h2>
                    <p className="paragraph">
                        Subject to cardholder and rewards terms which will be available
                        at application.
                    </p>
                    <ul className="space-y-4 sm:space-y-2">
                        <LandingListItem title="Up to 3% back on purchases">
                            {" "}
                        </LandingListItem>
                        <LandingListItem title="Earn rewards in bitcoin or any crypto on NEFA">
                            {" "}
                        </LandingListItem>
                        <LandingListItem title="No annual fee"> </LandingListItem>
                    </ul>
                </div>
            </BaseSection>
        </section>
    );
}
