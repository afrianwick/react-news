import React from 'react'

import Jumbotron from 'react-bootstrap/Jumbotron'

import NewsItem from './NewsItem'

function NewsList (props) {
  const { news } = props

  return (
    <Jumbotron>
      {
        news.map((data, index) => <NewsItem key={index} news={data} />)
      }
    </Jumbotron>
  )
}

export default NewsList