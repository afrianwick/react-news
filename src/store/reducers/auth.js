const initialState = {
  token: localStorage.getItem('token'),
  username: '',
  password: '',
  message: '',
  error: false
}

export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const CHANGE_USERNAME = 'CHANGE_USERNAME'
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD'

function authReducer (state = initialState, action) {
  switch (action.type) {
    case LOGIN_ERROR:
      return {
        ...state,
        error: true,
        message:  action.message
      }
    case LOGIN:
      return {
        ...state,
        token: action.token
      }
    case LOGOUT:
      return {
        ...state,
        token: null
      }
    case CHANGE_USERNAME:
      return {
        ...state,
        username: action.username
      }
    case CHANGE_PASSWORD:
      return {
        ...state,
        password: action.password
      }
    default:
      return state
  }
}

export default authReducer