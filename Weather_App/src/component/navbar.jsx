import React, { useState } from "react"
import { TiWeatherCloudy } from "react-icons/ti";
import { FaHome } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import MaxWidthWrapper from "./maxwidthwrapper";


export default function Navbar() {


    let [menu, setMenu] = useState("Home")

    return (
        <>
            <MaxWidthWrapper>
                <nav className="navbar">
                    <div className="navbar-left">
                        <TiWeatherCloudy className="main-icon" />
                        <p>WeatherApp</p>
                    </div>
                    <div className="navbar-right">
                        <button
                            onClick={() => setMenu("Home")}
                            className={`nav-btn ${menu === "Home" ? "now_active" : ""}`}

                        >
                            <NavLink className="extra" to="/">
                                <FaHome />
                                <p>Home</p>
                            </NavLink>
                        </button>

                        <button
                            onClick={() => setMenu("About")}
                            className={`nav-btn ${menu === "About" ? "now_active" : ""}`}

                        >
                            <NavLink className="extra" to="/about">
                                <IoMdInformationCircleOutline />
                                <p>About</p>
                            </NavLink>
                        </button>
                    </div>
                </nav>
                <hr></hr>
            </MaxWidthWrapper>
        </>
    )
}