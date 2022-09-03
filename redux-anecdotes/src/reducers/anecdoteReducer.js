import anecdotesService from '../services/anecdotes'

const orderByVotes = (anecdotes = []) => {
  
  return anecdotes.sort((a, b) => {
    if(a.votes === b.votes) {
      return 0
    }
    if(a.votes > b.votes) {
      return -1
    }
    return 1
  })
}

export function createAnecdote (content) {
  return {
    type: 'NEW_ANECDOTE',
    data:{
      content
    }
  }
}

export function incrementVotes (id) {
  return {
    type: 'VOTE',
    data:{
      id
    }
  }
}

export function initializeAnecdotes () {
  return async dispatch => {
    const anecdotes = await anecdotesService.getAll()
    dispatch({
      type: 'INIT_ANECDOTE',
      data: anecdotes,
    })
  }
}

const reducer = (state = [], action) => {

  switch (action.type) {
    case 'VOTE':
      let newState = state.map(element => {
        if (element.id === action.data.id) {
          return { ...element, votes: element.votes + 1 }
        }
        return element
      })
      return orderByVotes(newState)

    case 'NEW_ANECDOTE':
      return state.concat(action.data.content)

    case 'INIT_ANECDOTE':
      return action.data

    default:
      return state
  }
}

export default reducer