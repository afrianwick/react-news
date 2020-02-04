import React from 'react';
import { connect } from 'react-redux'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

import { CHANGE_USERNAME, CHANGE_PASSWORD } from '../store/reducers/auth';
import { doLogin } from '../store/action-creators/auth';

class Login extends React.Component {
  render () {
    return (
      <div>
      {
        this.props.error && <Alert variant="danger">{this.props.message}</Alert>
      }
        <Form>
          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text" 
              placeholder="username"
              onChange={this.props.changeUsername}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="password"
              onChange={this.props.changePassword}
            />
          </Form.Group>
          <Button
            variant="primary"
            onClick={this.props.doLogin}
          >
            Login
          </Button>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.auth.error,
    message: state.auth.message
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeUsername: (e) => {
      dispatch({
        type: CHANGE_USERNAME,
        username: e.target.value
      })
    },
    changePassword: (e) => {
      dispatch({
        type: CHANGE_PASSWORD,
        password: e.target.value
      })
    },
    doLogin: () => {
      dispatch(doLogin())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)