import React, { useState, useEffect } from 'react'

function Retire() {
    const [initValue, setinitValue] = useState(70000)
    const [MonthlyContr, setMonthlyContr] = useState(500)
    const [Interest, setIInterest] = useState(.08)
    const [EndingValue, setEndingValue] = useState(0)
    const [years, setyears] = useState(3)
    const [timesPerMonth, settimesPerMonth] = useState(12)


    useEffect(() => {

        console.log("Month cont ", MonthlyContr)
        let nt = timesPerMonth * years
        let IntrestRate = 1 + (Interest / timesPerMonth)
        let compounder = Math.pow(IntrestRate, nt)


        let FutureValue = MonthlyContr * ((compounder- 1) / (Interest / timesPerMonth))


        let princCompoud = compounder * initValue

       
        setEndingValue(princCompoud + FutureValue)


    }, [years, Interest, MonthlyContr, initValue, timesPerMonth, initValue])

    //Total = [ P(1+r/n)^(nt) ] + [ PMT × (((1 + r/n)^(nt) - 1) / (r/n)) ]
    return (


        <div>
            <h1>Retirement calc.</h1>
            <h2>Ending Value: ${EndingValue.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>





            <label> Goal retirement Savings amount</label> <input ></input><br />
            <label> Goal dretirement age   </label><input></input><br />
            <br />
            <label>Starting amount</label><input type={"number"} value={initValue} onChange={(e) => setinitValue(parseInt(e.target.value))}></input><br />
            <label> Monthly contributions   </label ><input  value={MonthlyContr} type={"number"} onChange={(e) => setMonthlyContr(parseInt(e.target.value))}></input><br />
            <label> Intrest rate   </label><input type={"number"} value={Interest} onChange={(e) => setIInterest(parseInt(e.target.value))}></input><br />
            <label> Years  </label ><input type={"number"} value={years} onChange={(e) => setyears(parseInt(e.target.value))}></input><br />
            <label> Times per Year   </label ><input type={"number"} value={timesPerMonth} onChange={(e) => settimesPerMonth(parseInt(e.target.value))}></input><br />

        </div>
    )
}

export default Retire