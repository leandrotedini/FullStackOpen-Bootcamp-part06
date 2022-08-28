import { useSelector, useDispatch } from 'react-redux'
import { incrementVotes } from '../reducers/anecdoteReducer'


const Anecdote = ({ content, votes, id, handleClick}) => {
  return (
    <>
      <div>
        {content}
      </div>
      <div>
        has {votes}
        <button onClick={() => handleClick(id)}>vote</button>
      </div>
      </>
  )
}

const Anecdotes = () => {

  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(incrementVotes(id))
  }

  return(
    <>
    {anecdotes.map(anecdote =>
      <div key={anecdote.id}>
        <Anecdote 
          content={anecdote.content}
          votes={anecdote.votes}
          id={anecdote.id}
          handleClick={vote}
        />
      </div>
    )}
    </>
  )
}

export default Anecdotes