import { filterAnecdotes } from '../reducers/anecdotesFilterReducer'
import { connect } from 'react-redux'

const AnecdoteFilter = (props) => {
  const handleChange = (event) => {
    props.filterAnecdotes(event.target.value)
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input name='filter' onChange={handleChange} />
    </div>
  )
}

const mapDispatchToProps = {
  filterAnecdotes
}

const ConnectedAnecdoteFilter = connect(
  null,
  mapDispatchToProps
)(AnecdoteFilter)
export default ConnectedAnecdoteFilter