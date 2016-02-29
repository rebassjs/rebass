
import React from 'react'

const GithubButton = ({ user, repo, ...props }) => (
  <div className='inline-block mr2'
    style={{ height: 20 }}>
    <iframe src={`https://ghbtns.com/github-btn.html?user=${user}&repo=${repo}&type=star&count=true`}
      frameBorder='0'
      scrolling='0'
      width='100px'
      height='20px' />
  </div>
)

GithubButton.defaultProps = {
  user: 'jxnblk',
  repo: 'rebass'
}

export default GithubButton

