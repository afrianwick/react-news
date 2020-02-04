import React from 'react'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function NewsItem (props) {
  const { news } = props

  return (
    <Card style={{ marginBottom: 20 }}>
      <Card.Img variant="top" src={news.urlToImage} />
      <Card.Body>
        <Card.Title>{news.title}</Card.Title>
        <Card.Text>{news.description}</Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
  )
}

export default NewsItem
