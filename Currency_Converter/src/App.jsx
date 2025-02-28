import { useState } from 'react'
import './App.css'
import Input_Box from './components/Input_Box'
import useCurrencyRates from './custom_hook/Fetch_rates'

function App() {
    //useState hook for the values that will change
    const [amount, setAmount] = useState(0);//for amount that is to be operated upon
    const [convertedAmount, setConvertedAmount] = useState(0);//for final converted amount
    const [from, setFrom] = useState("INR");//to update from --------->currency
    const [to, setTo] = useState("USD");//to update to -------->currency

    const currencyRates = useCurrencyRates(from);//passing value in custom hook to fetch perticular currency data on changing


    const options = Object.keys(currencyRates);//to collect rates keys i.e.------>only currency names

    const convert = () => {
        setConvertedAmount(amount * currencyRates[to])//passing converted value to setConvertedAmount hook
    }

    const onswap = () => {
        setAmount((prevAmount) => {
            setConvertedAmount(prevAmount); // Set convertedAmount to old amount
            return convertedAmount; // Set amount to old convertedAmount
        });
        setFrom(to);
        setTo(from);
    };


    return (
        <div className="h-screen w-full bg-cover bg-no-repeat justify-center items-center flex"
            style={{
                backgroundImage: "url('https://i.pinimg.com/736x/0e/19/ea/0e19ea9849fb2f275ab4f89e1499e854.jpg')",
                backgroundSize: "fit",
                backgroundRepeat: "no-repeat",
            }}
        >

            <div className="w-full">
                <div className="w-full max-w-xl mx-auto border border-white rounded-lg p-5 backdrop-blur-sm bg-black/15 grid items-center justify-center pt-10">
                    <div className='font-bold text-2xl text-white capitalize mt-3 md-8 flex justify-center items -center p-5'>
                        currency converter
                    </div>
                    <form
                        onClick={(e) => {
                            e.preventDefault()
                            convert()
                        }}
                    >
                        <div className='w-full mb-1'>

                            <Input_Box
                                label="from"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencychange={(currency) => { setFrom(currency) }}
                                onAmountchange={(amount) => { setAmount(amount) }}
                                selectcurrency={from}
                            />
                        </div>

                        <div className='mt-5 flex  justify-center items-center'>
                            <button className='bg-white border-2 border-white text-black text-2xl font-bold capitalize h-10 w-1/3 hover:bg-black hover:text-white cursor-pointer' onClick={onswap}>
                                swap
                            </button>
                        </div>

                        <div className='w-full mb-1 mt-5'>
                            <Input_Box
                                label="to"
                                currencyOptions={options}
                                onCurrencychange={(currency) => { setTo(currency) }}
                                selectcurrency={to}
                                amount={convertedAmount}
                            />
                        </div>
                        <div className='flex items-center pb-10 justify-center '>
                            <button type="submit" className=' border-2 border-white w-full h-10 cursor-pointer hover:bg-black hover:text-white mt-3 bg-white capitalize font-bold '>
                                convert {from.toUpperCase()} to {to.toUpperCase()}
                            </button>
                        </div>
                    </form>
                </div>



            </div>
        </div>
    )
}
export default App