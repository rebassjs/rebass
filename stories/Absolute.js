import React from 'react';
import { storiesOf } from '@storybook/react';
import { Absolute, Box } from '../src';

storiesOf('Absolute', module)
  .add('Default', () =>
    <Absolute>
      <Box>Hello</Box>
    </Absolute>,
  )
  .add('Center', () =>
    <Absolute center>
      <Box>Hello</Box>
    </Absolute>,
  );
