// import React from "react"
// import MaxWidthWrapper from "./maxwidthwrapper"
// import "./days.css"

// export default function Days({desc}) {
//     return (
//         <MaxWidthWrapper>
//             <div className="subsec_2">
//                 <div className="day_1 bb">

//                     <div className="phase1">
//                         <div className="p1">today</div>
//                         <img className="p2" src={clear} alt="" />
//                         <div className="p3" >partly cloudy</div>
//                         <div className="p4">
//                             <div>75</div>

//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </MaxWidthWrapper>
//     )
// }

import React from "react";
import MaxWidthWrapper from "./maxwidthwrapper";
import "./days.css";

export default function Days({ forecast, weatherImages }) {
    return (
        <MaxWidthWrapper>
            <div className="subsec_2">
                {forecast.map((item, idx) => {
                    const date = new Date(item.dt_txt).toLocaleDateString(undefined, { weekday: 'short' });
                    const weatherMain = item.weather?.[0]?.main;
                    const description = item.weather?.[0]?.description;
                    const temp = Math.round(item.main?.temp);
                    const icon = weatherImages[weatherMain] ?? weatherImages["Clear"];

                    return (
                        <div key={idx} className="day_1 bb">
                            <div className="phase1">
                                <div className="p1">{date}</div>
                                <img className="p2" src={icon} alt={weatherMain} />
                                <div className="p3">{description}</div>
                                <div className="p4">
                                    <div>{temp ?? "--"}°C</div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </MaxWidthWrapper>
    );
}
