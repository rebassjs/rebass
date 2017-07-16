
# Grid System

Rebass includes and incredibly flexible, responsive flexbox grid system based on
[Grid Styled](http://jxnblk.com/grid-styled).
Use the `<Flex />` and `<Box />` components to fine tune spacing and alignment in a variety of combination.

```.jsx
<Flex>
  <Box w={1/2} bg='blue'>
    Half
  </Box>
  <Box w={1/2} bg='green'>
    Half
  </Box>
</Flex>
```

```.jsx
<Flex wrap mx={-2}>
  <Box px={2} py={2} width={1/2}>
    <Text p={1} color='white' bg='blue'>
      1/2
    </Text>
  </Box>
  <Box px={2} py={2} width={1/2}>
    <Text p={1} color='white' bg='blue'>
      1/2
    </Text>
  </Box>
  <Box px={2} py={2} width={1/3}>
    <Text p={1} color='white' bg='blue'>
      1/3
    </Text>
  </Box>
  <Box px={2} py={2} width={1/3}>
    <Text p={1} color='white' bg='blue'>
      1/3
    </Text>
  </Box>
  <Box px={2} py={2} width={1/3}>
    <Text p={1} color='white' bg='blue'>
      1/3
    </Text>
  </Box>
  <Box px={2} py={2} width={1/4}>
    <Text p={1} color='white' bg='blue'>
      1/4
    </Text>
  </Box>
  <Box px={2} py={2} width={1/4}>
    <Text p={1} color='white' bg='blue'>
      1/4
    </Text>
  </Box>
  <Box px={2} py={2} width={1/4}>
    <Text p={1} color='white' bg='blue'>
      1/4
    </Text>
  </Box>
  <Box px={2} py={2} width={1/4}>
    <Text p={1} color='white' bg='blue'>
      1/4
    </Text>
  </Box>
</Flex>
```

```.jsx
<Flex align='center'>
  <Box w={1/3}>
    <Heading
      py={4}
      fontSize={[ 5, 6 ]}
      color='white'
      bg='blue'>
      Hello
    </Heading>
  </Box>
  <Box w={1/3} ml='auto'>
    <Text>Grid</Text>
  </Box>
</Flex>
```

See the [Grid Styled documentation](https://github.com/jxnblk/grid-styled) for more.
