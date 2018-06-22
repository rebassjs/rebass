module.exports = ({
  html = '',
  css = '',
  scripts,
  publicPath,
  title = 'x0',
  meta = [],
  links = [],
}) =>
`<!DOCTYPE html>
<head>
<meta charset='utf-8'>
<meta name='viewport' content='width=device-width,initial-scale=1'>
<meta name='generator' content='Compositor x0'>
<title>Rebass</title>
${meta.map(({ name, content }) => `<meta name='${name}' content='${content}'>`).join('\n')}
${links.map(({ rel, href }) => `<link rel='${rel}' href='${href}' />`).join('\n')}
<style>*{box-sizing:border-box}body{margin:0;font-family:system-ui,sans-serif}</style>
<meta name='description' content='React UI component library & design system, built with styled-components and styled-system'>
<meta name='twitter:card' content='summary_large_image'>
<meta name='twitter:site' content='@jxnblk'>
<meta name='twitter:title' content='Rebass'>
<meta name='twitter:description' content='React UI component library & design system, built with styled-components and styled-system'>
<meta name='twitter:image' content='https://jxnblk.com/rebass/card.png'>
<link rel='stylesheet' href='https://fonts.google.com/css?family=Roboto+Mono'>
${css}
</head>
<div id=root>${html}</div>
${scripts}
`
