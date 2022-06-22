//imports
import { useState } from 'react'

//Define App component
const App = () => {
  // Defining state constants

  const [anecdotes, setAnecdotes] = useState([
    {
      anecdote: 'If it hurts, do it more often',
      votes: 0
    },
    {
      anecdote: 'Adding manpower to a late software project makes it later!',
      votes: 0
    },
    {
      anecdote: 'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      votes: 0
    },
    {
      anecdote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      votes: 0
    },
    {
      anecdote: 'Premature optimization is the root of all evil.',
      votes: 0
    },
    {
      anecdote: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      votes: 0
    },
    {
      anecdote: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients',
      votes: 0
    }
  ])

  const [selected, setSelected] = useState(0)

  const [mostVotes, setMostVotes] = useState(0)

  //Applying click logic

  const handleAnecdoteClick = () => setSelected(Math.floor(Math.random() * anecdotes.length))

  //when a user votes, create a copy of the anecdotes array
  const handleVoteClick = () => setAnecdotes(anecdotes.map((anecdote, index) => {
    let newAnecdote = { ...anecdote, votes: anecdote.votes + 1 }
    //find the anecdote the user voted for and increment it's vote counter
    if (newAnecdote.anecdote === anecdotes[selected].anecdote) {
      //check if this anecdote now has more votes than the previous most voted
      if (newAnecdote.votes > anecdotes[mostVotes].votes) setMostVotes(index)

      return newAnecdote
    }

    return anecdote
  }))

  //Component return
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected].anecdote}</p>
      <p>has {anecdotes[selected].votes} votes</p>
      <button onClick={handleAnecdoteClick}>next anecdote</button>
      <button onClick={handleVoteClick}>vote</button>
      <h1>Anecdote with the most votes</h1>
      <p>{anecdotes[mostVotes].anecdote}</p>
      <p>has {anecdotes[mostVotes].votes} votes</p>
    </div>
  )
}

export default App