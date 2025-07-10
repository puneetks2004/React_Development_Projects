//no need for this
import React from "react"
import Navbar from "./component/navbar.jsx"
import Home from "./component/home.jsx"
import About from "./component/about.jsx"
import ParticlesCanvas from '../src/component/Particles';

export default function App()
{
  return (
    <>
      <main style={{
        position: "relative",
        isolation: "isolate"
      }}>
      <ParticlesCanvas />
      <Navbar/>
      {/* <About /> */}
        <Home />
        </main>
    </>
  )
}