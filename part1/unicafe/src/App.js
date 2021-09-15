import React, { useState } from 'react'

const Header = ({text}) => 
  <h1>{text}</h1>

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Statistics = (props) => {
  if (props.all === 0){
    return (
      <div>
        <p>
          No feedback given
        </p>
      </div>
    )
  }
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine text="all" value={props.all} />
        <StatisticLine text="average" value={props.sum / props.all} />
        <StatisticLine text="positive" value={(props.good / props.all) * 100} />
      </tbody>
    </table>
  )
}

const StatisticLine = ({text, value}) => {
  if (text === "positive"){
    return (
      <tr>
        <td>{text}</td>
        <td>{value} %</td>
      </tr>
    )
  }
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  return (
    <div>
      <Header text="give feedback"/>
      <Button handleClick={() => setGood(good + 1)} text='good'/>
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='bad' />
      <Header text="statistics"/>
      <Statistics good={good} neutral={neutral} bad={bad} all={good + neutral + bad} sum={good - bad} />
    </div>
  )
}

export default App