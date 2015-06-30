
import React from 'react'
import Example from 'rebass-example'
import {
  Arrow,
  Badge,
  Container,
  Row,
  Col,
  PageHeader,
  Section,
  SectionHeader,
  Footer,
  Flex,
  FlexItem
} from '../..'

class Components extends React.Component {

  render () {
    return (
      <div>
        <Section>
          <SectionHeader title='Container' />
          <Example>
            <Container>
              <div>Container children</div>
            </Container>
          </Example>
        </Section>
        <Section>
          <SectionHeader title='Grid' />
          <Example>
            <Container>
              <Row>
                <Col xs={6}>Col 6</Col>
                <Col xs={6}>Col 6</Col>
              </Row>
            </Container>
          </Example>
          <Example>
            <Container>
              <Row>
                <Col sm={6} md={4} lg={3}>Col sm6 md4 lg3</Col>
                <Col sm={6} md={4} lg={3}>Col sm6 md4 lg3</Col>
                <Col sm={6} md={4} lg={3}>Col sm6 md4 lg3</Col>
                <Col sm={6} md={4} lg={3}>Col sm6 md4 lg3</Col>
                <Col sm={6} md={4} lg={3}>Col sm6 md4 lg3</Col>
                <Col sm={6} md={4} lg={3}>Col sm6 md4 lg3</Col>
              </Row>
            </Container>
          </Example>
        </Section>
        <Section>
          <SectionHeader title='Media' />
          <Example>
            Media TK
          </Example>
        </Section>
        <Section>
          <SectionHeader title='Flex' />
          <Example>
            <Flex>
              <FlexItem auto>FlexItem</FlexItem>
              <FlexItem>FlexItem</FlexItem>
              <FlexItem>FlexItem</FlexItem>
            </Flex>
          </Example>
        </Section>
        <Section>
          <SectionHeader title='Button' />
          <Example>
            Button TK
          </Example>
        </Section>
        <Section>
          <SectionHeader title='Arrow' id='Arrow' />
          <Example>
            <Arrow />
          </Example>
          <Example>
            <Arrow up />
          </Example>
        </Section>
        <Section>
          <SectionHeader title='Badge'>
            Badge
          </SectionHeader>
          <Example>
            <Badge>Badge</Badge>
          </Example>
        </Section>
        <Section>
          <SectionHeader title='Input' />
          <Example>
            Input TK
          </Example>
        </Section>
        <Section>
          <SectionHeader title='Range' />
          <Example>
            Range TK
          </Example>
        </Section>
        <Section>
          <SectionHeader title='Select' />
          <Example>
            Select TK
          </Example>
        </Section>
        <Section>
          <SectionHeader title='Textarea' />
          <Example>
            Textarea TK
          </Example>
        </Section>
        <Section>
          <SectionHeader title='Radio' />
          <Example>
            Radio TK
          </Example>
        </Section>
        <Section>
          <SectionHeader title='Checkbox' />
          <Example>
            Checkbox TK
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
          <SectionHeader title='Fieldset' />
          <Example>
            Fieldset TK
          </Example>
        </Section>
      </div>
    )
  }

}

export default Components

