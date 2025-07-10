import React from "react"
import "./about.css"
import { GiSubmarineMissile } from "react-icons/gi";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";
import { GiClover } from "react-icons/gi";
import MaxWidthWrapper from "./maxwidthwrapper";

export default function About() {
    return (
        <>
            <MaxWidthWrapper>
                <div className="part1">
                    <h2>
                        About WeatherApp
                    </h2>
                    <p>Your reliable companion for accurate weather information and forecasts</p>
                </div>
                <div className="part2">
                    <div className="card c1">
                        <div className="heading">
                            <GiSubmarineMissile />
                            <p>Global Coverage</p>
                        </div>
                        <div className="content">
                            Access weather information from cities around the world. Whether you're at home or traveling, stay informed about weather conditions anywhere on the planet.
                        </div>
                    </div>
                    <div className="card c2">
                        <div className="heading">
                            <GiClover />
                            <p>Built with Care</p>
                        </div>
                        <div className="content">
                            Created with modern web technologies including React, TypeScript, and Tailwind CSS. We prioritize user experience, performance, and accessibility in everything we build.
                        </div>
                    </div>
                    <div className="card c3">
                        <div className="heading">
                            <AiOutlineGlobal />
                            <p>Our Mission</p>
                        </div>
                        <div className="content">
                            We provide accurate, real-time weather information to help you plan your day with confidence. Our goal is to make weather data accessible and easy to understand for everyone.
                        </div>
                    </div>
                    <div className="card c4">
                        <div className="heading">
                            <MdOutlineFeaturedPlayList />
                            <p>Features</p>
                        </div>
                        <ul className="content">
                            <li>Real-time weather updates</li>
                            <li> 5-day weather forecast</li>
                            <li> Detailed weather metrics</li>
                            <li>Responsive design</li>

                        </ul>
                    </div>
                </div>
                <div className="part3">
                    <p className="part3-heading">tech stack</p>
                    <div className="last-parent">
                        <div className="last l1">
                            <h3>React</h3>
                            <p>Frontend Framework</p>
                        </div>
                        <div className="last l2">
                            <h3>HTML</h3>
                            <p>Structure</p>
                        </div>
                        <div className="last l3">
                            <h3>CSS</h3>
                            <p>Styling</p>
                        </div>
                        <div className="last l4">
                            <h3>Vite</h3>
                            <p>Build Tool</p>
                        </div>
                    </div>
                </div>
                <div className="empty">

                </div>
            </MaxWidthWrapper>
        </>

    )
}