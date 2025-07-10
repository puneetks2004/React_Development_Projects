
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import News from "./components/news";

export default function App() {
  return (
    <main className="bg-indigo-50 min-h-screen">
      <Navbar />
      <Hero />
      <News />
    </main>
  )
}

//min-h-screen sets the minimum height of an element to 100% of the viewport height.