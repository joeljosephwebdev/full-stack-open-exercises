//render a search box that allows the user to filter their contacts by name or number
const Filter = ({ filter, handleFilterChange }) => {
  return (
    <div>
      Search: <input value={filter} onChange={handleFilterChange}></input>
    </div>
  )
}

export default Filter