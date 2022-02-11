import React, { useEffect, useState } from 'react'
import Retire from './Retire'

function BudgetCalc() {
    const [rent, setrent] = useState(1400)
    const [income, setincome] = useState(60000)
    const [actualPay, setactualPay] = useState(((income / 12) * .72) - rent)
    const [TakeHomeRate, setTakeHomeRate] = useState(.72)

    const [ret401k, setRet401k] = useState(0)
    const [ret401kMatch, setRet401kMatch] = useState(0)

    const [MoneyLeft, setMoneyLeft] = useState(0)
    const [Groc, setGroc] = useState(0)
    const [EatingOut, setEatingOut] = useState(0)
    const [Trans, setTrans] = useState(0)
    const [Other, setOther] = useState(0)
const [SavingInvest, setSavingInvest] = useState(0)

    const [SavingCash, setSavingCash] = useState(0)

    useEffect(() => {
        setactualPay(((income / 12) * TakeHomeRate) - rent)
    }, [rent, income,TakeHomeRate])




    useEffect(() => {
        setMoneyLeft((actualPay - Groc - EatingOut - Trans - Other-SavingCash-SavingInvest).toFixed(2))
    }, [actualPay,Groc,EatingOut,Trans,Other,SavingCash,SavingInvest])

useEffect(() => {
setTakeHomeRate(.72-ret401k)
}, [ret401k])


    return (
        <div>
            <h2> Your  monthly income  is {income / 12}</h2>
            <h2>A rough estimate of your monthly take home pay is {(income / 12) * .72}</h2>
            <h2> Your  monthly rent  is {rent}</h2>
            <h2>A rough estimate of your monthly take home pay after rent is  {actualPay}</h2>
            <h2>Savings per year: {(income * ret401k) + (income * ret401kMatch)     + (SavingInvest*12) +(SavingCash*12      )           }</h2>
            <h2>Money left for budgeting{MoneyLeft}</h2>

            <br />
            <h2>Income</h2>
            <label>Yearly income</label>   <input type='number' placeholder='0' value={income} onChange={(e) => setincome(e.target.value)}></input>          <br />
            <h2>Housing</h2>
            <label>Monthly Rent</label>   <input type='number' placeholder='0' value={rent} onChange={(e) => setrent(e.target.value)}></input>          <br />
            <h2>Food</h2>
            <label>Groceries</label>   <input type='number' placeholder='0' value={Groc} onChange={(e) => setGroc(e.target.value)}></input>          <br />
            <label>Eating Out</label>   <input type='number' placeholder='0' value={EatingOut} onChange={(e) => setEatingOut(e.target.value)}></input>          <br />
            <h2>Miscellaneous</h2>
            <label>Transportation </label>   <input type='number' placeholder='0' value={Trans} onChange={(e) => setTrans(e.target.value)}></input>          <br />
            <label>other  </label>   <input type='number' placeholder='0' value={Other} onChange={(e) => setOther(e.target.value)}></input>          <br />

            <h2>Saving</h2>
            <label>401k rate </label> <input type='number' placeholder='0' value={ret401k} onChange={(e) => setRet401k(e.target.value)}></input>          <br />
            <label>401k match </label> <input type='number' placeholder='0' value={ret401kMatch} onChange={(e) => setRet401kMatch(e.target.value)}></input>          <br />'
        
            <label>Savings Investment  </label>   <input type='number' placeholder='0' value={SavingInvest} onChange={(e) => setSavingInvest(e.target.value)}></input>          <br />
            <label>Savings cash   </label>   <input type='number' placeholder='0' value={SavingCash} onChange={(e) => setSavingCash(e.target.value)}></input>          <br />

<Retire/>
        </div>
    )
}

export default BudgetCalc