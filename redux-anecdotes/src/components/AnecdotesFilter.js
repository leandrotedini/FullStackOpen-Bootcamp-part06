import { filterAnecdotes } from '../reducers/anecdotesFilterReducer'
import { useDispatch, useSelector } from 'react-redux'

const AnecdoteFilter = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const dispatch = useDispatch()
  const handleChange = (event) => {
    dispatch(filterAnecdotes(event.target.value))
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

export default AnecdoteFilter