
import React from 'react'
import Example from 'rebass-example'
import components from '../components-data.jsx'
import {
  Section,
  SectionHeader,
} from '../..'

class Components extends React.Component {

  render () {
    return (
      <div>
        <ul className='list-reset m2 fixed top-0 right-0'>
          {components.map(function(comp, i) {
            return (
              <li key={i}>
                <a href={'#' + comp.name}
                  className='h5 bold'>
                  {comp.name}
                </a>
              </li>
            )
          })}
        </ul>
        {components.map(function(comp, i) {
          return (
            <Section key={i}>
              <SectionHeader title={comp.name} />
              {comp.examples.map(function(example, i) {
                return (
                  <Example key={i}>
                    {example}
                  </Example>
                )
              })}
            </Section>
          )
        })}
        <hr />
        {/*
        <Section>
          <SectionHeader title='Range' />
          <Example>
            Range TK
          </Example>
        </Section>
        <Section>
          <SectionHeader title='Fieldset' />
          <Example>
            Fieldset TK
          </Example>
        </Section>
        <Section>
          <SectionHeader title='Progress' />
          <Example>
            Progress TK
          </Example>
        </Section>
        <Section>
          <SectionHeader title='Fieldset' />
          <Example>
            Fieldset TK
          </Example>
        </Section>
        <Section>
          <SectionHeader title='Toolbar' />
          <Example>
            Toolbar TK
          </Example>
        </Section>
        <Section>
          <SectionHeader title='Menu' />
          <Example>
            Menu TK
          </Example>
        </Section>
        <Section>
          <SectionHeader title='MenuItem' />
          <Example>
            MenuItem TK
          </Example>
        </Section>
        <Section>
          <SectionHeader title='NavItem' />
          <Example>
            Overlay TK
          </Example>
        </Section>
        <Section>
          <SectionHeader title='Panel' />
          <Example>
            Panel TK
          </Example>
        </Section>
        <Section>
          <SectionHeader title='Card' />
          <Example>
            Card TK
          </Example>
        </Section>
        <Section>
          <SectionHeader title='Message' />
          <Example>
            Message TK
          </Example>
        </Section>
        <Section>
          <SectionHeader title='Banner' />
          <Example>
            Banner TK
          </Example>
        </Section>
        <Section>
          <SectionHeader title='Overlay' />
          <Example>
            Overlay TK
          </Example>
        </Section>
        */}
      </div>
    )
  }

}

export default Components

