import { useSelector, useDispatch } from 'react-redux'
import { incrementVotes } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer'



const Anecdote = ({ content, votes, id, handleClick}) => {
  return (
    <>
      <div>
        {content}
      </div>
      <div>
        has {votes}
        <button onClick={handleClick}>vote</button>
      </div>
      </>
  )
}

const Anecdotes = () => {

  let { anecdotes, filter } = useSelector(state => state)
  const dispatch = useDispatch()

  if (filter) {
    anecdotes = anecdotes.filter(anecdote => anecdote.content.includes(filter))
  }
  

  const vote = (anecdote) => {
    dispatch(incrementVotes(anecdote))
    dispatch(showNotification(`you voted ${anecdote.content}`, 5000))
  }

  return(
    <>
    {anecdotes.map(anecdote =>
      <div key={anecdote.id}>
        <Anecdote 
          content={anecdote.content}
          votes={anecdote.votes}
          id={anecdote.id}
          handleClick={() => vote(anecdote)}
        />
      </div>
    )}
    </>
  )
}

export default Anecdotes