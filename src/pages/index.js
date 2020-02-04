import React from 'react'
import { connect } from 'react-redux'
import {
  Route,
  Switch,
  Link
} from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Sources from './Sources'
import Headlines from './Headlines'
import BasicRedux from './BasicRedux'
import Login from './Login'

import { authenticate } from '../helpers/authenticate'

class Home extends React.Component {
  render () {
    return (
      <Container>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand >News App</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/" style={{color: 'white' }}>
                Sources
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/basic-redux" style={{color: 'white' }}>
                Basic Redux
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar>
        <Row>
          <Col></Col>
          <Col sm={12} md={12}>
            <Switch>
              <Route
                path="/" 
                exact
                children={authenticate(<Sources/>, this.props.token)}
              />
              <Route path="/headlines/:source" children={<Headlines/>} />
              <Route path="/basic-redux" children={<BasicRedux/>} />
              <Route path="/login" children={<Login/>} />
              <Route path="/error">
                <div>
                  <h1>Congratulation</h1>
                  <h2>You have reached the error page</h2>
                  <h3>Please report to developer to have it fixed</h3>
                </div>
              </Route>
            </Switch>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token
  }
}

export default connect(mapStateToProps, null)(Home)
