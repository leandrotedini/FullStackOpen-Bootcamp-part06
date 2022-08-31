export function filterAnecdotes (content) {
  return {
    type: 'FILTER',
    data:{
      content
    }
  }
}

const reducer = (state = '', action) => {

  switch (action.type) {
    case 'FILTER':
      return action.data.content

    default:
      return state
  }
}

export default reducer