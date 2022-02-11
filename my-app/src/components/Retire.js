import React, { useState, useEffect } from 'react'

function Retire() {
    const [initValue, setinitValue] = useState(70000)
    const [MonthlyContr, setMonthlyContr] = useState(500)
    const [Interest, setIInterest] = useState(8)
    const [EndingValue, setEndingValue] = useState(0)
    const [years, setyears] = useState(3)
    const [timesPerMonth, settimesPerMonth] = useState(1)


    useEffect(() => {


        let nt = 12 * years
        let IntrestRate = 1 + (Interest / timesPerMonth)
        let compounder = Math.pow(IntrestRate, nt)

console.log("Results",compounder * initValue )



        setEndingValue(compounder * initValue )


    }, [years, Interest, MonthlyContr, initValue, timesPerMonth, initValue])

    return (


        <div>
            <h1>Retirement calc.</h1>
            <h2>Ending Value{EndingValue.toFixed(2)}</h2>





            <label> Goal retirement Savings amount</label> <input ></input><br />
            <label> Goal retirement age   </label><input></input><br />
            <br />
            <label>Starting amount</label><input value={initValue} onChange={(e) => setinitValue(e.target.value)}></input><br />
            <label> Monthly contributions   </label ><input value={MonthlyContr} onChange={(e) => setMonthlyContr(e.target.value)}></input><br />
            <label> Intrest rate   </label><input value={Interest} onChange={(e) => setIInterest(e.target.value)}></input><br />
            <label> Years  </label ><input value={years} onChange={(e) => setyears(e.target.value)}></input><br />
            <label> Times per month   </label ><input value={timesPerMonth} onChange={(e) => settimesPerMonth(e.target.value)}></input><br />
        </div>
    )
}

export default Retire