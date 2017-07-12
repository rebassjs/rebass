import React from 'react'
import styled from 'styled-components'
import {
  Box,
  Code,
  Text,
  theme
} from 'rebass'

const Table = styled.table`
width: 100%;
margin: 0;
border-collapse: collapse;
`

const TH = styled.td`
text-align: left;
font-size: 14px;
font-weight: bold;
padding-top: 4px;
padding-bottom: 4px;
border-bottom-style: solid;
border-bottom-width: 2px;
border-color: ${theme.colors.gray3}
`
const TD = styled.td`
padding-top: 4px;
padding-bottom: 4px;
border-bottom-style: solid;
border-bottom-width: 1px;
border-color: ${theme.colors.gray3}
`

const PropsTable = () => (
  <Table>
    <thead>
      <tr>
        <TH>Prop</TH>
        <TH>Alias</TH>
        <TH>Type</TH>
        <TH>Description</TH>
      </tr>
    </thead>
    <tbody>
      {defs.map(def => (
        <tr key={def.prop}>
          <TD>
            <Code>
              {def.prop}
            </Code>
          </TD>
          <TD>
            <Code>
              {def.alias}
            </Code>
          </TD>
          <TD>{def.type}</TD>
          <TD>{def.description}</TD>
        </tr>
      ))}
    </tbody>
  </Table>
)

const type = 'number|string|array'
const defs = [
  { prop: 'is', type: 'string', description: 'sets the HTML element' },
  { prop: 'width', alias: 'w', type, description: 'width' },
  { prop: 'fontSize', alias: 'f', type, description: 'font-size' },
  { prop: 'color', type, description: 'color' },
  { prop: 'bg', type, description: 'background-color' },
  { prop: 'm', type, description: 'margin' },
  { prop: 'mt', type, description: 'margin-top' },
  { prop: 'mr', type, description: 'margin-right' },
  { prop: 'mb', type, description: 'margin-bottom' },
  { prop: 'ml', type, description: 'margin-left' },
  { prop: 'mx', type, description: 'margin x-axis (margin-left & margin-right)' },
  { prop: 'my', type, description: 'margin y-axis (margin-top & margin-bottom)' },
  { prop: 'p', type, description: 'padding' },
  { prop: 'pt', type, description: 'padding-top' },
  { prop: 'pr', type, description: 'padding-right' },
  { prop: 'pb', type, description: 'padding-bottom' },
  { prop: 'pl', type, description: 'padding-left' },
  { prop: 'px', type, description: 'padding x-axis (padding-left & padding-right)' },
  { prop: 'py', type, description: 'padding y-axis (padding-top & padding-bottom)' },
]

export default PropsTable
