/* eslint no-unused-vars: 0 */
import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import preset from "@rebass/preset";
import { ThemeProvider } from "emotion-theming";
// OR import { ThemeProvider } from 'styled-components'
import { Box, Flex, Heading, Text, Button, Link, Image, Card } from "rebass";
import { Label, Input, Select, Textarea, Radio, Checkbox } from "@rebass/forms";
import { map } from "ramda";
// OR use 'rebass/styled-components'

const theme = {
  ...preset
};

const App = props => {
  const [searchTerm, setSearchTerm] = useState();
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      fetch(
        `https://itunes.apple.com/search?entity=ebook&limit=2&term=${searchTerm}`
      )
        .then(response => response.json())
        .then(json => {
          console.log(json.results);
          setResults(json.results);
        });
    }
  }, [searchTerm]);

  return (
    <ThemeProvider theme={theme}>
      <Box variant="styles.root">
        <Heading as="h1" mb={4}>
          Rebass Sandbox
        </Heading>
        <Input
          placeholder="search"
          onChange={event => {
            console.log("value:", event.target.value);
            setSearchTerm(event.target.value);
          }}
        />
        <Flex flexDirection="column">
          {map(
            r =>
              r && r.trackName ? (
                <Text>{r.trackName}</Text>
              ) : (
                <Text>no name</Text>
              ),
            results
          )}
        </Flex>
      </Box>
    </ThemeProvider>
  );
};

render(<App />, root); // eslint-disable-line no-undef
