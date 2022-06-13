const Header = ({ course }) => {
  return (
    <h1>{course}</h1>
  )
}

const Part = ({ part }) => {
  return (
    <p key={part.name}>{part.name} {part.amount}</p>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      {
        parts.map(part => {
          return <Part part={part} />
        })
      }
    </div>
  )
}

const Total = ({ parts }) => {
  let total = 0

  parts.forEach(part => {
    total += part.amount
  });

  return (
    <p>Number of parts {total}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App;
