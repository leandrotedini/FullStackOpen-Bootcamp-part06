import { connect } from 'react-redux'
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

const Anecdotes = (props) => {

  let anecdotes = props.anecdotes

  const vote = (anecdote) => {
    props.incrementVotes(anecdote)
    props.showNotification(`you voted ${anecdote.content}`, 5000)
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

const mapStateToProps = (state) => {
  return {
    anecdotes: state.filter ? state.anecdotes.filter(anecdote => anecdote.content.includes(state.filter)) : state.anecdotes
  }
}

const mapDispatchToProps = {
  incrementVotes,
  showNotification
}

const ConnectedAnecdotes = connect(
  mapStateToProps,
  mapDispatchToProps
)(Anecdotes)
export default ConnectedAnecdotes