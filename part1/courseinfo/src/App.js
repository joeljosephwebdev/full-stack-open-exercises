const Header = ({ course }) => {
  return (
    <h1>{course}</h1>
  )
}

const Part = ({ exercise }) => {
  return (
    <p key={exercise.name}>{exercise.name} {exercise.amount}</p>
  )
}

const Content = ({ exercises }) => {
  return (
    <div>
      {
        exercises.map(exercise => {
          return <Part exercise={exercise} />
        })
      }
    </div>
  )
}

const Total = ({ exercises }) => {
  let total = 0

  exercises.forEach(exercise => {
    total += exercise.amount
  });

  return (
    <p>Number of exercises {total}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const exercises = [
    {
      name: 'Fundementals of React',
      amount: 10
    },
    {
      name: 'Using props to pass data',
      amount: 7
    },
    {
      name: 'State of a component',
      amount: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content exercises={exercises} />
      <Total exercises={exercises} />
    </div>
  )
}

export default App;
