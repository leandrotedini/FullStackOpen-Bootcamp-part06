import { useSelector, useDispatch } from 'react-redux'
import { incrementVotes } from '../reducers/anecdoteReducer'
import { showNotification, cleanNotification } from '../reducers/notificationReducer'


const Anecdote = ({ content, votes, id, handleClick}) => {
  return (
    <>
      <div>
        {content}
      </div>
      <div>
        has {votes}
        <button onClick={() => handleClick(id, content)}>vote</button>
      </div>
      </>
  )
}

const Anecdotes = () => {

  const anecdotes = useSelector(state => state.anecdotes)
  const dispatch = useDispatch()

  const vote = (id, content) => {
    dispatch(incrementVotes(id))
    dispatch(showNotification(`you voted ${content}`))
    setTimeout(() => dispatch(cleanNotification()), 5000)
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