import React from 'react'

export const CSS = ({ css }) =>
  <style
    dangerouslySetInnerHTML={{
      __html: css
    }}
  />

CSS.defaultProps = {
  css: '*{box-sizing:border-box}body{margin:0}'
}

CSS.displayName = 'CSS'

export default CSS
