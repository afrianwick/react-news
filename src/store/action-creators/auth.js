import axios from 'axios'
import { LOGIN, LOGIN_ERROR } from '../reducers/auth'

const LOGIN_API = 'https://dummy-login-rctn.herokuapp.com/login'

export function doLogin() {
  return async function (dispatch, getState) {
    const { username, password } = getState().auth

    try {
      const response = await axios.post(
        LOGIN_API,
        { username, password },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )

      localStorage.setItem('token', response.data.token)

      dispatch({
        type: LOGIN,
        token: response.data.token
      })
    } catch (error) {
      console.log(error.toJSON())
      dispatch({
        type: LOGIN_ERROR,
        message: 'login gagal'
      })
    }
  }
}