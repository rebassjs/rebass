import React from 'react'

class Tweet extends React.Component {
  componentDidMount () {
    if (typeof twttr !== 'undefined') {
      twttr.widgets.load(
        this.root
      )
    }
  }

  render () {
    return (
      <a
        ref={ref => this.root = ref}
        className='twitter-share-button'
        href='https://twitter.com/intent/tweet'
        children='Tweet'
      />
    )
  }
}

export default Tweet
