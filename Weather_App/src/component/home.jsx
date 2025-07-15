import React, { useState, useEffect } from "react"
import "./home.css"
import { LuDroplets } from "react-icons/lu";
import { FaWind } from "react-icons/fa";
import { MdOutlineVisibility } from "react-icons/md";
import { FaTemperatureHalf } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import clear from "../assets/clear.png";
import MaxWidthWrapper from "./maxwidthwrapper";
import useWeather from "../api/useWeather";
import clouds from "../assets/clouds.png";
import drizzle from "../assets/drizzle.png";
import mist from "../assets/mist.png";
import rain from "../assets/rain.png";
import snow from "../assets/snow.png";
import haze from "../assets/haze.png";
import Days from "./days"
import nocity from "../assets/nocity.png"

export default function Home() {

    const [time, setTime] = useState("");
    const [date, setDate] = useState("");


    useEffect(() => {
        const interval = setInterval(() => {
            let date = new Date();
            // console.log(date.toLocaleTimeString());
            setTime(date.toLocaleTimeString());
            // console.log(date.toJSON())
            setDate(date.toJSON().substring(0, 10));
        }, 1000)

        return () => clearInterval(interval)
    }, [])
    // When this component is about to unmount, or before re - running this effect(if dependencies change), please run this cleanup function.”

    const [city, setCity] = useState("")
    const [input, setInput] = useState("");
    const weatherData = useWeather(city);



    const [visiblity, setVisiblity] = useState("--");

    useEffect(() => {
        if (weatherData?.list?.[0]?.visibility != null) {
            setVisiblity(weatherData.list[0].visibility / 1000);//converting to km
        }
        else {
            setVisiblity("--");
        }
    }, [weatherData])



    //for image
    const weatherImages = {
        Clear: clear,
        Clouds: clouds,
        Rain: rain,
        Snow: snow,
        Mist: mist,
        Drizzle: drizzle,
        Haze: haze,
    };
    const weatherMain = weatherData?.list?.[0]?.weather?.[0]?.main;
    const weatherImage = weatherImages[weatherMain];

    const forecastList = weatherData?.list ?? [];
    const dailyData = forecastList.filter((item, idx) => idx % 8 === 0);


    return (



        <>
            <MaxWidthWrapper>
                <div className="all">
                    <div className="seg_1">
                        <p className="main">Weather Dashboard</p>
                        <p className="not_main">{date}  •  {time}</p>
                    </div>

                    <div className="city-input">
                        <input type="text" placeholder="Enter your city" value={input}
                            onChange={(e) => setInput(e.target.value)} />
                        <button onClick={() => setCity(input)}>Search</button>
                    </div>
                    <div className="parent">
                        <div className="part_1 aab">

                            <div className="main_seg">

                                <div className="sub_main_seg1">
                                    <div className="sub1"><FaLocationDot className="red" /><p>{weatherData?.city?.name ?? "--"}</p></div>
                                    <div className="sub2">
                                        <FaTemperatureHalf className="red" /><p>{weatherData?.list?.[0]?.main?.temp ?? '--'}</p>
                                    </div>
                                    <p className="sub3">{weatherData?.list?.[0]?.weather?.[0]?.description ?? '--'}</p>
                                </div>

                                <div className="sub_main_seg2">
                                    <img src={weatherImage ?? nocity} alt={weatherMain} className="img_main" />


                                </div>

                            </div>

                        </div>
                        <div className="part_2 aa">
                            <div>
                                <LuDroplets className="red" /><h2>Humidity</h2>
                            </div>
                            <p>{weatherData?.list?.[0]?.main?.humidity ?? '--'}<span className="small"> %</span></p>
                        </div>
                        <div className="part_3 aa">
                            <div>
                                <FaWind className="red" /><h2>Wind Speed</h2>
                            </div>
                            <p>{weatherData?.list?.[0]?.wind?.speed ?? '--'} <span className="small"> m/s</span></p>
                        </div>
                        < div className="part_4 aa">
                            <div>
                                <MdOutlineVisibility className="red" /><h2>Visiblity</h2>
                            </div>

                            <p>{visiblity} <span className="small"> KM</span></p>

                        </div>
                    </div>

                    <div className="seg_3">
                        <div className="subsec_1">
                            <p>5 day forecast</p>
                        </div>

                        {/* <div className="subsec_2">
                            <div className="day_1 bb">

                                <div className="phase1">
                                    <div className="p1">today</div>
                                    <img className="p2" src={clear} alt="" />
                                    <div className="p3" >partly cloudy</div>
                                    <div className="p4">
                                        <div>75</div>

                                    </div>
                                </div>
                            </div>
                            <div className="day_2 bb">
                                <div className="phase1">
                                    <div className="p1">today</div>
                                    <img className="p2" src={clear} alt="" />
                                    <div className="p3" >partly cloudy</div>
                                    <div className="p4">
                                        <div>75</div>

                                    </div>
                                </div>
                            </div>
                            <div className="day_3 bb">
                                <div className="phase1">
                                    <div className="p1">today</div>
                                    <img className="p2" src={clear} alt="" />
                                    <div className="p3" >partly cloudy</div>
                                    <div className="p4">
                                        <div>75</div>

                                    </div>
                                </div>
                            </div>
                            <div className="day_4 bb">
                                <div className="phase1">
                                    <div className="p1">today</div>
                                    <img className="p2" src={clear} alt="" />
                                    <div className="p3" >partly cloudy</div>
                                    <div className="p4">
                                        <div>75</div>

                                    </div>
                                </div>
                            </div>
                            <div className="day_5 bb">
                                <div className="phase1">
                                    <div className="p1">today</div>
                                    <img className="p2" src={clear} alt="" />
                                    <div className="p3" >partly cloudy</div>
                                    <div className="p4">
                                        <div>75</div>

                                    </div>
                                </div> */}
                        {/* </div> */}
                        {/* </div> */}


                        <Days
                            weatherImages={weatherImages}
                            forecast={dailyData}

                        />




                    </div>
                </div>
                <div className="lastride"></div>
            </MaxWidthWrapper>
        </>
    )
}