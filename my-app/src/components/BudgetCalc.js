import React, { useEffect, useState } from 'react'
import Retire from './Retire'
import styled, { css } from 'styled-components'
import UserInfoGrabber from './UserInfoGrabber'


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
    const [goalRetireMoney, setgoalRetireMoney] = useState(1000000)
    const [goalRetireDate, setgoalRetireDate] = useState(15)

    const [initValue, setinitValue] = useState(70000)

    useEffect(() => {
        setactualPay(((income / 12) * TakeHomeRate) - rent)
    }, [rent, income, TakeHomeRate])




    useEffect(() => {
        setMoneyLeft((actualPay - Groc - EatingOut - Trans - Other - SavingCash - SavingInvest).toFixed(2))
    }, [actualPay, Groc, EatingOut, Trans, Other, SavingCash, SavingInvest])

    useEffect(() => {
        setTakeHomeRate(.72 - ret401k)
    }, [ret401k])


    return (
        <div>

            <h2> Your  monthly income  is {income / 12}</h2>
            <h2>A rough estimate of your monthly take home pay is {(income / 12) * .72}</h2>
            <h2> Your  monthly rent  is {rent}</h2>
            <h2>A rough estimate of your monthly take home pay after rent is  {actualPay}</h2>
            <h2>Savings per year: {(income * ret401k) + (income * ret401kMatch) + (SavingInvest * 12) + (SavingCash * 12)}</h2>
            <h2>Money left for budgeting{MoneyLeft}</h2>
            <p>Goals: User should start by entering their income savings and goal retirement age/ and expected income increase and when </p>
            <UserInfoGrabber income={income} setincome={setincome} initValue={initValue} setinitValue={setinitValue} goalRetireDate={goalRetireDate} setgoalRetireDate={setgoalRetireDate} goalRetireMoney={goalRetireMoney} setgoalRetireMoney={setgoalRetireMoney} />
            <Calcs className='calcs'>
                <div className='info'>
                    <br />
                    <p> take home{(income / 12) * .72}</p>
                    <p>Money left: {MoneyLeft}</p>

                    
                    <label>Monthly Rent</label>   <input type='number' placeholder='0' value={rent} onChange={(e) => setrent(e.target.value)}></input>          <br />
    
                    <label>Groceries</label>   <input type='number' placeholder='0' value={Groc} onChange={(e) => setGroc(e.target.value)}></input>          <br />
                    <label>Eating Out</label>   <input type='number' placeholder='0' value={EatingOut} onChange={(e) => setEatingOut(e.target.value)}></input>          <br />

                    <label>Transportation </label>   <input type='number' placeholder='0' value={Trans} onChange={(e) => setTrans(e.target.value)}></input>          <br />
                    <label>other  </label>   <input type='number' placeholder='0' value={Other} onChange={(e) => setOther(e.target.value)}></input>          <br />

                    <h2>Saving</h2>
                    <label>401k rate </label> <input type='number' placeholder='0' value={ret401k} onChange={(e) => setRet401k(e.target.value)}></input>          <br />
                    <label>401k match </label> <input type='number' placeholder='0' value={ret401kMatch} onChange={(e) => setRet401kMatch(e.target.value)}></input>          <br />'

                    <label>Savings Investment  </label>   <input type='number' placeholder='0' value={SavingInvest} onChange={(e) => setSavingInvest(parseInt(e.target.value))}></input>          <br />
                    <h2>Savings Invest per month is   {((income * ret401k)/12) + ((income * ret401kMatch)/12) + (SavingInvest ) }</h2>
                    <label>Savings cash   </label>   <input type='number' placeholder='0' value={SavingCash} onChange={(e) => setSavingCash(e.target.value)}></input>          <br />
                </div>
                <div>
                    <Retire income={income} initValue={initValue} setinitValue={setinitValue} goalRetireMoney={goalRetireMoney} goalRetireDate={goalRetireDate}/>
                </div>
            </Calcs>
        </div>
    )
}

export default BudgetCalc

const Calcs = styled.div`
 display:grid;
 grid-template-columns: repeat(2, 1fr); 
padding-left:20px;


.info{
 display:grid;
 label{
      text-align: center;
 }
 /* grid-template-columns: repeat(2, 1fr);  */

}
`