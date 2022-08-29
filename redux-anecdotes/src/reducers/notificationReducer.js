export function showNotification (content) {
  return {
    type: 'SHOW_NOTIFICATION',
    data:{
      content
    }
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

const reducer = (state = 'initial state', action) => {

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