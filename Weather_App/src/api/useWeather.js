//it is a custom react hook

import { useState, useEffect } from "react"

export default function useWeather(city) {

    const [data, setData] = useState("");

    useEffect(() => {

        if (city) {


            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=217fbdf0ca1d389b54a744f720c84d26&units=metric`).then((response) => {
                return response.json()
            }).then((value) => {
                if (value.cod == 200) {
                    setData(value);
                } else {
                    setData(null)
                }
            }
            );

        }
    }, [city])

    return data


}

// import { useState, useEffect } from "react";

// export default function useWeather(city) {
//     const [data, setData] = useState(null);

//     useEffect(() => {
//         if (city) {
//             fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=YOUR_API_KEY`)
//                 .then(response => response.json())
//                 .then(value => {
//                     if (value.cod == 200) {
//                         setData(value);
//                     } else {
//                         setData(null);
//                     }
//                 })
//                 .catch(err => {
//                     console.error(err);
//                     setData(null);
//                 });
//         }
//     }, [city]);

//     return data;
// }
