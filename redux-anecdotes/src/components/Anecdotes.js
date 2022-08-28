import { useSelector, useDispatch } from 'react-redux'
import { incrementVotes } from '../reducers/anecdoteReducer'


const Anecdotes = () => {

  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(incrementVotes(id))
  }

  return(
    <>
    <h2>Anecdotes</h2>
    {anecdotes.map(anecdote =>
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => vote(anecdote.id)}>vote</button>
        </div>
      </div>
    )}
    </>
  )
}

export default Anecdotes