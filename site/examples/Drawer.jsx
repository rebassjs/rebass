<div>
  <Button
    onClick={e => update(toggle('drawer'))}
    children='Toggle Drawer'
  />
  {drawer && (
    <Fixed
      top={0}
      right={0}
      bottom={0}
      left={0}
      onClick={e => update(toggle('drawer'))}
    />
  )}
  <Drawer
    open={drawer}
    position='right'
    p={3}
    color='white'
    bg='dark'>
    <Heading>Hello</Heading>
  </Drawer>
</div>
