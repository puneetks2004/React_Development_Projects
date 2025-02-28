import { useEffect, useState } from 'react';


function useCurrencyRates(currency) {
    //useState hook to store data
    const [data, setData] = useState({});//to handle empty values we gave this curly braces

    useEffect(() => {
        fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
            .then((response) => {
                return response.json()//data comming from api is generally in string to convert to json we did it
            })
            .then((values) => {
                return setData(values.rates) //b/c perticularly in rates key we have values like other currency rates
            })
    }, [currency]

    )
    return data;
}

export default useCurrencyRates;//export result of this custom hook