import React from 'react'

class Tweet extends React.Component {
  componentDidMount () {
  }
  render () {
    return (
      <a
        className='twitter-share-button'
        href='https://twitter.com/intent/tweet'
        children='Tweet'
      />
    )
  }
}

export default Tweet
