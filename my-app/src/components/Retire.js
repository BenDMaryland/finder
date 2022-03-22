import React, { useState, useEffect } from 'react'
 import styled from 'styled-components'
function Retire({ initValue, setinitValue, goalRetireDate, goalRetireMoney, income }) {

    const [MonthlyContr, setMonthlyContr] = useState(500)
    const [Interest, setIInterest] = useState(.08)
    const [EndingValue, setEndingValue] = useState(0)
    const [years, setyears] = useState(15)
    const [timesPerMonth, settimesPerMonth] = useState(300)
const [suggestedSavingsAmount, setsuggestedSavingsAmount ] = useState()

    useEffect(() => {


        let nt = timesPerMonth * years
        let IntrestRate = 1 + (Interest / timesPerMonth)
        let compounder = Math.pow(IntrestRate, nt)


        let FutureValue = MonthlyContr * ((compounder - 1) / (IntrestRate / timesPerMonth))


        let princCompoud = compounder * initValue

     
        setEndingValue(princCompoud + FutureValue)
// for loop for suggested retirement savings based on date and year and shit 

        let FakeFutureValue
        let fakeEndingValue

for(let i =0; i< (income/12 ); i++){
     FakeFutureValue = i * ((compounder - 1) / (IntrestRate / timesPerMonth))
    fakeEndingValue = princCompoud + FakeFutureValue

    if (fakeEndingValue >= goalRetireMoney) setsuggestedSavingsAmount(i)
    if (fakeEndingValue >= goalRetireMoney) break 
   

}

    }, [years, Interest, MonthlyContr, initValue, timesPerMonth, initValue, goalRetireMoney, goalRetireDate,income])

    //Total = [ P(1+r/n)^(nt) ] + [ PMT × (((1 + r/n)^(nt) - 1) / (r/n)) ]
    return (


        <Style>
            <h1>Retirement calc.</h1>
            <h3> Goal retirement Savings amount ${goalRetireMoney.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3> <br />


            <p>Ending Value:  ${EndingValue.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}   of year: {Number(years) + Number(new Date().getFullYear())}  </p>
            <p>Money left :       ${(goalRetireMoney - EndingValue).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}   with {goalRetireDate - years}          Years left              </p>
<p>Suggested savings to meet retierment money : {suggestedSavingsAmount}</p>




            <label> Goal retirement year {Number(goalRetireDate) + Number(new Date().getFullYear())}  </label><br />
            <br />
            {/* <label>Starting amount</label><input type={"number"} value={initValue} onChange={(e) => setinitValue(parseInt(e.target.value))}></input><br /> */}
            <label> Monthly contributions   </label ><input value={MonthlyContr} type={"number"} onChange={(e) => setMonthlyContr(parseInt(e.target.value))}></input><br />
            <label> Intrest rate   </label><input value={Interest} onChange={(e) => setIInterest(e.target.value)}></input><br />
            <label> Years  </label ><input type={"number"} value={years} onChange={(e) => setyears(parseInt(e.target.value))}></input><br />
            <label> Times per Year   </label ><input type={"number"} value={timesPerMonth} onChange={(e) => settimesPerMonth(parseInt(e.target.value))}></input><br />

        </Style>
    )
}

export default Retire

const Style = styled.div `
display: grid ;

padding-left:20px;
h1,h2{
    text-align: center;
}
label{
     text-align: center;
}
`