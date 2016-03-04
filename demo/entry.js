
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import Rebass from '../src'
import data from '../package.json'

data.components = Object.keys(Rebass).length

const div = document.getElementById('app')
ReactDOM.render(<App {...data} />, div)

