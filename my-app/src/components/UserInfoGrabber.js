import React from 'react'
// goalRetireDate={goalRetireDate} setgoalRetireDate={setgoalRetireDate} goalRetireMoney={goalRetireMoney} setgoalRetireMoney={setgoalRetireMoney}
function UserInfoGrabber({ income, setincome, initValue, setinitValue, goalRetireDate, setgoalRetireDate, goalRetireMoney, setgoalRetireMoney}) {
  return (
    <div>
        Here we get
          <label>Yearly income</label>   <input type='number' placeholder='0' value={income} onChange={(e) => setincome(e.target.value)}></input>          <br />
          <label>Starting amount</label><input type={"number"} value={initValue} onChange={(e) => setinitValue(parseInt(e.target.value))}></input><br />

          <p>Guess at income increase and date </p>

          <label>How many years till retirement: </label>   <input type='number' placeholder='0' value={goalRetireDate} onChange={(e) => setgoalRetireDate(e.target.value)}></input>          <br />
          <label>Retirement money: </label><input type={"number"} value={goalRetireMoney} onChange={(e) => setgoalRetireMoney(parseInt(e.target.value))}></input><br />
         </div>
  )
}

export default UserInfoGrabber