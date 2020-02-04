import React from 'react'
import axios from 'axios'

import Spinner from 'react-bootstrap/Spinner'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class Headlines extends React.Component {
  constructor() {
    super()

    this.state = {
      headlines: [],
      loading: true,
      error: false
    }
  }

  componentWillMount () {
    console.log(this.props.token)
    if (!this.props.token) {
      this.props.history.push('/login')
    }
  }

  async componentDidMount() {
    const source = this.props.match.params.source

    if (!source) {
      throw new Error()
    }
    
    const target = `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=7e7cba19a40d48e583b7a8195bbd4ee6`
  
    const { data: { articles } } = await axios.get(target)

    this.setState({
      headlines: articles,
      loading: false
    })
  }

  componentDidCatch() {
    this.setState({
      error: true
    })
  }

  render() {
    return (
      <div>
      {
        this.state.loading &&
        <div style={styles.loadingStyle}>
          <Spinner animation="border"/>
          <br/>
          <h3>Getting your best news sources...</h3>
        </div>
      }
      {
        this.state.headlines.map((news, key) => {
          return (
          <Card key={key}>
          {
            news.urlToImage &&
            <Card.Img variant="top" src={news.urlToImage} />
          }
            <Card.Body>
              <Card.Title>{news.title}</Card.Title>
              <Card.Text>{news.description}</Card.Text>
              <a href={news.url}>
                <Button>Read More</Button>
              </a>
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

export default Headlines
