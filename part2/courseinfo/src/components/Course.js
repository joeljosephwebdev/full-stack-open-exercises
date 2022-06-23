const Header = ({ course }) => {
  return (
    <h1>{course}</h1>
  )
}

const Part = ({ part }) => {
  return (
    <p>{part.name} {part.exercises}</p>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      {
        parts.map(part => {
          return <Part key={part.id} part={part} />
        })
      }
    </div>
  )
}

const Total = ({ parts }) => {
  let total = parts.reduce((previousValue, currentValue) => previousValue + currentValue.exercises, 0)

  return (
    <strong><p>Total of {total} exercises</p></strong>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default Course