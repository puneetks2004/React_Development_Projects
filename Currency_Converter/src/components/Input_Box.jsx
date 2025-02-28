import { useId } from "react";

function Input_Box({

    label,
    amount,
    onAmountchange, //what happens when amount is changed
    amountdisabled = false,//to disable amount after usage if true
    selectcurrency = "USD",
    onCurrencychange,
    currencydisabled = false,
    currencyOptions = []//will be  storing all values of currency types

}) {

    const attach_both = useId();
    return (

        <div className="h-25 w-120 bg-black p-1 border-2 border-black flex items-center justify-between">
            <div className=" w-1/2 h-full grid items-center justify-start  m-1">
                <div className="w-full h-full bg-white rounded-[15px] border-2 border-black flex items-center  capitalize justify-start font-bold  p-1 pl-2  " htmlFor={attach_both} >
                    {label}
                </div>
                <div>
                    <input id={attach_both} type="number" className=" bg-white text-black w-full border-black border-2 p-1 rounded-[15px] flex items-center justify-start pl-2"
                        value={amount}
                        placeholder="Enter Amount"
                        disabled={amountdisabled}
                        //firing event object
                        onChange={(e) => onAmountchange && onAmountchange(Number(e.target.value))}
                    //since amount is in string format to dedicately convert it to number we used number function
                    ></input>
                </div>
            </div>


            <div className=" w-1/2 h-full grid items-center justify-end  m-1">
                <div className="w-full font-bold h-full rounded-[15px] bg-white border-2 border-black  flex items-center justify-end p-3 pl-15 capitalize" >
                    Currency Type
                </div>
                <div>
                    <select className="rounded-[15px] bg-white w-full border-black border-2 p-1"

                        value={selectcurrency}
                        disabled={currencydisabled}
                        onChange={(e) =>
                            onCurrencychange && onCurrencychange(
                                (e.target.value))
                        }
                    >


                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))
                        }

                    </select>
                </div>
            </div>
        </div>
    )
}

export default Input_Box;
//finally export it