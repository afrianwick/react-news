import React from 'react'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Spinner from 'react-bootstrap/Spinner'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'

import {
  loadSources
} from '../store/action-creators/sources'
class Sources extends React.Component {
  async componentDidMount() {
    this.props.loadSources()
  }

  render() {
    return (
      <div>
        {
          this.props.loading &&
          <div style={styles.loadingStyle}>
            <Spinner animation="border"/>
            <br/>
            <h3>Getting your best news sources...</h3>
          </div>
        }
        {
          this.props.sources.map((source, key) => {
            return (
            <Card key={key}>
              <Card.Body>
                <Card.Title>{source.name}</Card.Title>
                <Badge variant="primary">{source.language}</Badge>
                <Badge variant="danger">{source.category}</Badge>
                <Card.Text>{source.description}</Card.Text>
                <Link to={`/headlines/${source.id}`}>
                  <Button>Read News</Button>
                </Link>
              </Card.Body>
            </Card>)
          })
        }
      </div>
    )
  }
}

const styles = {
  loadingStyle: {
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center',
    paddingTop: '30px',
    flexDirection: 'column'
  }
}

const mapStateToProps = (state) => {
  return {
    sources: state.sources.sources,
    loading: state.sources.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadSources: () => dispatch(loadSources())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sources)



