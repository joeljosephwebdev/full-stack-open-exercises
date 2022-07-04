//render a list contacts to be displayed
const Persons = ({ display, person }) => {
  return (
    <div>
      <ul>
        {
          display.map(person => <li key={person.id}>{person.name} {person.number}</li>)
        }
      </ul>
    </div>
  )
}

export default Persons