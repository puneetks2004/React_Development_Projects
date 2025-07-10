import React from "react"

import Navbar from "./navbar.jsx"
import { Outlet } from "react-router-dom"
import Api from "../api/useWeather.js"
import ParticlesCanvas from './Particles';

export default function Layout() {
    return (
        <>
            <main style={{
                position: "relative",
                isolation: "isolate"
            }}>
                <ParticlesCanvas />
                <Navbar />
                <Outlet />
                <Api />
            </main>

        </>
    )
}