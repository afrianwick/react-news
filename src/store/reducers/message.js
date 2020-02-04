const initialMessage = {
  message: 'halo'
}

function messageReducer(state = initialMessage, action) {
  switch(action.type) {
    case 'changeMessage':
      return {
        ...state,
        message: action.message
      }
    default:
      return state
  }
}

export default messageReducer;