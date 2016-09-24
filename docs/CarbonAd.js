
import React from 'react'

const css = `
#carbonads {
  display: inline-block;
  font-size: 14px;
  line-height: 1.25;
  text-align: left;
  max-width: 320px;
}
#carbonads a,
#carbonads a:hover {
  text-decoration: none;
  color: inherit;
}
#carbonads span { display: block }
#carbonads > span::before,
#carbonads > span::after {
  content: '';
  display: table;
}
#carbonads > span::after {
  clear: both;
}
.carbon-img {
  float: left;
  margin-right: .5em;
}
.carbon-img > img { display: block }
.carbon-text { overflow: hidden }
.carbon-poweredby {
  float: left;
  margin-top: .25em;
  opacity: 0.5;
}
`.replace(/\n/, '').replace(/\s\s+/g, ' ')

const CarbonAd = () => (
  <div style={{ minHeight: 100 }}>
    <style dangerouslySetInnerHTML={{ __html: css }} />
    <script
      async
      type='text/javascript'
      src={`//cdn.carbonads.com/carbon.js?zoneid=1696&serve=CVYD42T&placement=jxnblkcom`}
      id='_carbonads_js' />
  </div>
)

export default CarbonAd

