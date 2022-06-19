import { useState } from 'react'

const Button = ({ text, handleClick }) => <button onClick={handleClick}>{text}</button>

const ButtonArea = ({ buttons }) => {
  return (
    <div>
      {buttons.map(button => {
        return (
          <Button key={button.text} text={button.text} handleClick={button.handleClick} />
        )
      })}
    </div>
  )
}

const StatisticLine = ({ text, value }) => {
  if (text !== 'positive') {
    return (
      <tr>
        <td> {text} </td>
        <td> {value} </td>
      </tr>
    )
  } else {
    return (
      <tr>
        <td> {text} </td>
        <td> {value} %</td>
      </tr>
    )
  }
}

const Statistics = ({ statistics, advancedStats }) => {

  if (advancedStats.total === 0) {
    return <p>No feedback given</p>
  }

  const generateStatsDisplay = (stats) => {
    let display = []
    for (const key in stats) {
      display.push(<StatisticLine key={key} text={key} value={stats[key]} />)
    }
    return display
  }

  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          {
            generateStatsDisplay(statistics)
          }
          {
            generateStatsDisplay(advancedStats)
          }
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  const [statistics, setStatistics] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const [advancedStats, setAdvancedStats] = useState({
    total: 0,
    average: 0,
    positive: 0
  })

  const handleClickGood = () => {
    const newStats = { ...statistics, good: statistics.good + 1 }
    setStatistics({ ...newStats })
    calculateAdvancedStats(newStats)
  }
  const handleClickNeutral = () => {
    const newStats = { ...statistics, neutral: statistics.neutral + 1 }
    setStatistics({ ...newStats })
    calculateAdvancedStats(newStats)
  }
  const handleClickBad = () => {
    const newStats = { ...statistics, bad: statistics.bad + 1 }
    setStatistics({ ...newStats })
    calculateAdvancedStats(newStats)
  }

  const calculateAdvancedStats = (stats) => {
    const newTotal = stats.good + stats.neutral + stats.bad
    const newAverage = (stats.good - stats.bad) / newTotal
    const newPositive = (stats.good / newTotal) * 100
    setAdvancedStats({ ...advancedStats, total: newTotal, average: newAverage, positive: newPositive })
  }

  const buttons = [
    {
      text: "Good",
      handleClick: handleClickGood
    },
    {
      text: "Neutral",
      handleClick: handleClickNeutral
    },
    {
      text: "Bad",
      handleClick: handleClickBad
    }
  ]

  return (
    <div>
      <h1>Give feedback</h1>
      <ButtonArea buttons={buttons} />
      <Statistics statistics={statistics} advancedStats={advancedStats} />
    </div>
  )
}

export default App;
