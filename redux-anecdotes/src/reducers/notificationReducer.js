export function showNotification (content, time) {
  return async dispatch => {
    dispatch({
      type: 'SHOW_NOTIFICATION',
      data:{
        content
      }
    })
    setTimeout(() => dispatch(cleanNotification()), time)
  }
}

export function cleanNotification () {
  return {
    type: 'CLEAN_NOTIFICATION',
    data:{
      content: ''
    }
  }
}

const reducer = (state = '', action) => {

  switch (action.type) {
    case 'SHOW_NOTIFICATION':
      return action.data.content
  
    case 'CLEAN_NOTIFICATION':
      return action.data.content
    
    default:
      return state
  }
}

export default reducer