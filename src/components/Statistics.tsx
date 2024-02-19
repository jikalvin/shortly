import React, { useEffect, useState } from "react";
import { useAppContext } from "../store/AppContext";
import CopyableLink from "./Result";

import icon1 from "../assets/images/icon-brand-recognition.svg";
import icon2 from "../assets/images/icon-detailed-records.svg";
import icon3 from "../assets/images/icon-fully-customizable.svg";

interface SavedUrl {
    original: string;
    shortened: string;
}

const Statistics: React.FC = () => {
    const { savedUrls } = useAppContext();
    const lastFiveUrls: SavedUrl[] = savedUrls.slice(-5).reverse();

    return (
        <>
            <div className="section-3">
                <button className="cyan-btn reset-results">Clear Results</button>
                <section className="search-result-block">
                    <div>
                        <ul>
                            {lastFiveUrls.map((url, index) => (
                                <CopyableLink 
                                    key={index} 
                                    label={url.original} 
                                    url={url.shortened} 
                                />
                            ))}
                        </ul>
                    </div>
                </section>
                <h2>Advanced Statistics</h2>
                <p className="info">Track how your links are performing across the web with our advanced statistics dashboard.</p>
                <section className="section-3-blocks ">
                    <div>
                        <img src={icon1} alt="" aria-hidden="true" />
                        <h3>Brand Recognition</h3>
                        <p className="gray-p">Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
                    </div>
                    <div>
                        <img src={icon2} alt="" aria-hidden="true" />
                        <h3>Detailed Records</h3>
                        <p className="gray-p">Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                    </div>
                    <div>
                        <img src={icon3} alt="" aria-hidden="true" />
                        <h3>Fully Customizable</h3>
                        <p className="gray-p">Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                    </div>
                </section>
            </div>
            <article className="section-4">
                <h2>Boost your links today</h2>
                <a className="cyan-btn" href="/">Get Started</a>
            </article>
        </>
    );
};

export default Statistics;
